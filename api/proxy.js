export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response('错误：缺少 url 参数', { status: 400 });
  }

  try {
    // 1. 构建伪装请求头，模拟“直接访问”
    const customHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Cache-Control': 'no-cache',
    };

    // 2. 发起请求 (利用 Vercel 海外节点处理被墙资源)
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: customHeaders,
      referrerPolicy: 'no-referrer', // 确保完全抹除 Referer 来源
    });

    // 3. 构建新的响应头
    const newHeaders = new Headers(response.headers);
    
    // 强制开启跨域 (CORS)，确保前端 Hls.js 能读取数据
    newHeaders.set('Access-Control-Allow-Origin', '*');
    newHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    
    // 针对 M3U8 和 TS 切片修正 MIME 类型，防止浏览器拦截
    if (targetUrl.includes('.m3u8')) {
      newHeaders.set('Content-Type', 'application/vnd.apple.mpegurl');
    } else if (targetUrl.includes('.ts')) {
      newHeaders.set('Content-Type', 'video/mp2t');
    }

    // 4. 返回处理后的流
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });

  } catch (error) {
    // 将捕获到的错误（如 DNS 超时、连接被拒）转化为中文
    let errorMsg = '代理访问失败: ';
    if (error.message.includes('fetch failed')) {
      errorMsg += '目标服务器连接超时或地址无效。';
    } else {
      errorMsg += error.message;
    }

    return new Response(errorMsg, { 
      status: 502,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}
