export const config = {
  runtime: 'edge',
};

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Range, Content-Type, Accept, Origin, Referer, User-Agent',
  'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges, Content-Type, Icy-Br, Ice-Audio-Info, Icy-Description, Icy-Genre, Icy-Name, Icy-Pub',
};

const HOP_BY_HOP_HEADERS = [
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
  'content-encoding',
];

function corsResponse(body = null, init = {}) {
  const headers = new Headers(init.headers);
  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(body, { ...init, headers });
}

function buildProxyUrl(proxyBase, url) {
  return `${proxyBase}?url=${encodeURIComponent(url)}`;
}

function toAbsoluteUrl(value, baseUrl) {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (value.startsWith('//')) {
    return `${baseUrl.protocol}${value}`;
  }

  return new URL(value, baseUrl).toString();
}

function rewriteM3U8(text, finalUrl, proxyBase) {
  const baseUrl = new URL(finalUrl);

  return text
    .split('\n')
    .map((line) => {
      const trimmed = line.trim();

      if (!trimmed) {
        return line;
      }

      if (trimmed.startsWith('#')) {
        return line.replace(/URI="([^"]+)"/g, (match, uri) => {
          if (uri.includes('/api/proxy?url=')) {
            return match;
          }
          return `URI="${buildProxyUrl(proxyBase, toAbsoluteUrl(uri, baseUrl))}"`;
        });
      }

      if (trimmed.includes('/api/proxy?url=')) {
        return line;
      }

      return buildProxyUrl(proxyBase, toAbsoluteUrl(trimmed, baseUrl));
    })
    .join('\n');
}

function buildUpstreamHeaders(req, target) {
  const headers = new Headers();

  headers.set('User-Agent', req.headers.get('user-agent') || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  headers.set('Accept', req.headers.get('accept') || '*/*');
  headers.set('Accept-Language', req.headers.get('accept-language') || 'zh-CN,zh;q=0.9,en;q=0.8');
  headers.set('Cache-Control', 'no-cache');
  headers.set('Referer', target.origin);

  const range = req.headers.get('range');
  if (range) {
    headers.set('Range', range);
  }

  return headers;
}

function buildResponseHeaders(response) {
  const headers = new Headers(response.headers);

  for (const header of HOP_BY_HOP_HEADERS) {
    headers.delete(header);
  }

  headers.delete('content-security-policy');
  headers.delete('content-security-policy-report-only');

  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    headers.set(key, value);
  }

  return headers;
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return corsResponse(null, { status: 204 });
  }

  if (!['GET', 'HEAD'].includes(req.method)) {
    return corsResponse('Method not allowed', { status: 405 });
  }

  const requestUrl = new URL(req.url);
  const targetUrl = requestUrl.searchParams.get('url');

  if (!targetUrl) {
    return corsResponse('Missing url parameter', { status: 400 });
  }

  let target;
  try {
    target = new URL(targetUrl);
  } catch {
    return corsResponse('Invalid url parameter', { status: 400 });
  }

  if (!['http:', 'https:'].includes(target.protocol)) {
    return corsResponse('Only http and https URLs are supported', { status: 400 });
  }

  try {
    const upstreamResponse = await fetch(target.toString(), {
      method: req.method,
      headers: buildUpstreamHeaders(req, target),
      redirect: 'follow',
    });

    const finalUrl = upstreamResponse.url || target.toString();
    const responseHeaders = buildResponseHeaders(upstreamResponse);
    const contentType = upstreamResponse.headers.get('content-type') || '';
    const isM3U8 = /\.m3u8(?:$|\?)/i.test(new URL(finalUrl).pathname) || /mpegurl|vnd\.apple\.mpegurl/i.test(contentType);

    if (req.method === 'HEAD') {
      return new Response(null, {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        headers: responseHeaders,
      });
    }

    if (isM3U8) {
      const proxyBase = `${requestUrl.origin}${requestUrl.pathname}`;
      const text = await upstreamResponse.text();

      responseHeaders.set('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
      responseHeaders.delete('content-length');

      return new Response(rewriteM3U8(text, finalUrl, proxyBase), {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        headers: responseHeaders,
      });
    }

    if (/\.ts(?:$|\?)/i.test(new URL(finalUrl).pathname)) {
      responseHeaders.set('Content-Type', 'video/mp2t');
    }

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return corsResponse(`Proxy request failed: ${error.message}`, { status: 502 });
  }
}
