export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams, origin, pathname } = new URL(req.url);
  let targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response('错误：缺少 url 参数', { status: 400 });
  }

  try {
    // ========== 1. 处理重定向，获取最终 URL ==========
    let finalUrl = targetUrl;
    let redirectCount = 0;
    const maxRedirects = 5;
    
    while (redirectCount < maxRedirects) {
      const redirectResponse = await fetch(finalUrl, {
        method: 'HEAD',  // 使用 HEAD 请求检查重定向
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': '*/*',
        },
        redirect: 'manual',  // 手动处理重定向，不自动跟随
      });
      
      const status = redirectResponse.status;
      const location = redirectResponse.headers.get('location');
      
      if ((status === 301 || status === 302 || status === 303 || status === 307 || status === 308) && location) {
        // 处理相对路径重定向
        if (location.startsWith('http')) {
          finalUrl = location;
        } else {
          const baseUrl = new URL(finalUrl);
          finalUrl = baseUrl.origin + (location.startsWith('/') ? location : '/' + location);
        }
        redirectCount++;
        console.log(`重定向 ${redirectCount}: ${finalUrl}`);
      } else {
        break;
      }
    }
    
    console.log(`最终 URL: ${finalUrl}`);

    // ========== 2. 伪造请求头，模拟直接访问 ==========
    const customHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Cache-Control': 'no-cache',
      'Referer': new URL(finalUrl).origin,  // 添加 Referer
      'Origin': new URL(finalUrl).origin,   // 添加 Origin
    };

    // ========== 3. 请求最终 URL ==========
    const response = await fetch(finalUrl, {
      method: 'GET',
      headers: customHeaders,
    });

    if (!response.ok) {
      throw new Error(`目标服务器响应异常: ${response.status}`);
    }

    // ========== 4. 构建响应头 ==========
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Access-Control-Allow-Origin', '*');
    newHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    newHeaders.delete('content-security-policy');

    // ========== 5. 处理 M3U8 文件（重写分片路径） ==========
    const isM3U8 = finalUrl.includes('.m3u8') || response.headers.get('content-type')?.includes('mpegurl');

    if (isM3U8) {
      let text = await response.text();
      
      const baseUrl = new URL(finalUrl);
      // 获取 M3U8 的目录路径
      const basePath = baseUrl.origin + baseUrl.pathname.substring(0, baseUrl.pathname.lastIndexOf('/') + 1);
      
      // 获取当前代理的基础路径（用于重写分片 URL）
      const proxyBase = `${origin}${pathname}`;
      
      const lines = text.split('\n');
      const rewrittenLines = lines.map(line => {
        const trimmedLine = line.trim();
        
        // 跳过注释行和空行
        if (!trimmedLine || trimmedLine.startsWith('#')) {
          return line;
        }
        
        // 已经是代理 URL 的跳过
        if (trimmedLine.includes('/api/proxy?url=')) {
          return line;
        }
        
        // 已经是绝对路径且不是当前域的，保持原样或也代理
        if (trimmedLine.startsWith('http')) {
          // 也代理外部 URL，确保所有资源都通过代理
          return `${proxyBase}?url=${encodeURIComponent(trimmedLine)}`;
        }
        
        // 补全相对路径为绝对路径
        let absoluteUrl;
        if (trimmedLine.startsWith('/')) {
          absoluteUrl = baseUrl.origin + trimmedLine;
        } else {
          absoluteUrl = basePath + trimmedLine;
        }
        
        // 将分片地址封装进代理
        return `${proxyBase}?url=${encodeURIComponent(absoluteUrl)}`;
      });

      newHeaders.set('Content-Type', 'application/vnd.apple.mpegurl');
      return new Response(rewrittenLines.join('\n'), {
        status: 200,
        headers: newHeaders,
      });
    }

    // ========== 6. 非 M3U8 文件直接转发 ==========
    if (finalUrl.includes('.ts')) {
      newHeaders.set('Content-Type', 'video/mp2t');
    }

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });

  } catch (error) {
    console.error('代理错误:', error);
    
    let errorMsg = '代理访问失败: ';
    if (error.message.includes('fetch failed')) {
      errorMsg += '无法连接到目标服务器（可能地址失效或暂时无法访问）。';
    } else {
      errorMsg += error.message;
    }

    return new Response(errorMsg, { 
      status: 502,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}
