export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  try {
    // 伪造请求头
    const customHeaders = {
      'Referer': '',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': '*/*',
    };

    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: customHeaders,
      referrerPolicy: 'no-referrer'
    });

    // 复制原始响应头并处理跨域
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Access-Control-Allow-Origin', '*');
    newHeaders.set('Access-Control-Allow-Methods', 'GET');
    
    // 如果是 m3u8，确保 Content-Type 正确以便 Hls.js 处理
    if (targetUrl.includes('.m3u8')) {
        newHeaders.set('Content-Type', 'application/vnd.apple.mpegurl');
    }

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  } catch (error) {
    return new Response('Proxy Error: ' + error.message, { status: 500 });
  }
}
