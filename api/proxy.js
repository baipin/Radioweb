export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // 获取当前请求的域名和路径，用于补全分片的代理前缀
  const { searchParams, origin, pathname } = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response('错误：缺少 url 参数', { status: 400 });
  }

  try {
    // 1. 核心功能：伪造请求头，模拟直接访问，绕过防盗链
    const customHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Cache-Control': 'no-cache',
    };

    // 2. 核心功能：利用 Vercel 海外节点中转（处理被墙资源 & HTTP转HTTPS）
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: customHeaders,
      referrerPolicy: 'no-referrer', // 抹除来源信息
    });

    if (!response.ok) {
      throw new Error(`目标服务器响应异常: ${response.status}`);
    }

    // 3. 构建响应头，允许跨域 (CORS)
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Access-Control-Allow-Origin', '*');
    newHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    newHeaders.delete('content-security-policy'); // 移除可能的安全限制

    // 4. 判定文件类型
    const isM3U8 = targetUrl.includes('.m3u8') || response.headers.get('content-type')?.includes('mpegurl');

    if (isM3U8) {
      // --- 核心功能：重写 M3U8 内容以修复 404 相对路径问题 ---
      let text = await response.text();
      
      const baseUrl = new URL(targetUrl);
      // 获取当前 M3U8 的目录路径，例如 http://site.com/live/1.m3u8 -> http://site.com/live/
      const basePath = baseUrl.origin + baseUrl.pathname.substring(0, baseUrl.pathname.lastIndexOf('/') + 1);

      const lines = text.split('\n');
      const rewrittenLines = lines.map(line => {
        const trimmedLine = line.trim();
        
        // 保持注释行、空行、或已经是绝对路径的行不变
        if (!trimmedLine || trimmedLine.startsWith('#') || trimmedLine.startsWith('http')) {
          return line;
        }

        // 补全相对路径为绝对路径
        const absoluteUrl = trimmedLine.startsWith('/') 
            ? baseUrl.origin + trimmedLine 
            : basePath + trimmedLine;
            
        // 将分片地址再次封装进代理接口，确保所有分片都走 Vercel 节点且伪装 Referer
        return `${origin}${pathname}?url=${encodeURIComponent(absoluteUrl)}`;
      });

      newHeaders.set('Content-Type', 'application/vnd.apple.mpegurl');
      return new Response(rewrittenLines.join('\n'), {
        status: 200,
        headers: newHeaders,
      });
    }

    // 5. 对于非 M3U8 文件（如直接请求的 .ts 或普通音频流），直接流式转发
    if (targetUrl.includes('.ts')) {
      newHeaders.set('Content-Type', 'video/mp2t');
    }

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });

  } catch (error) {
    // 6. 返回中文错误信息
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
