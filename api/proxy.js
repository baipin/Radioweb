export const config = {
  runtime: 'edge', // 使用 Edge Runtime 以支持流式传输
};

export default async function handler(req) {
  // 获取 URL 参数中的目标地址，例如：/api/proxy?url=http://example.com/stream.m3u8
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  try {
    // 后台请求不安全的 HTTP 链接
    const response = await fetch(targetUrl);

    // 转发原始响应头（如 Content-Type），确保浏览器将其识别为音频流
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Access-Control-Allow-Origin', '*'); // 允许跨域

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  } catch (error) {
    return new Response('Proxy Error: ' + error.message, { status: 500 });
  }
}
