import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // 确保每次都动态获取

const API_URL = 'https://ytmsout.radio.cn/web/appBroadcast/list?categoryId=0&provinceCode=0';

export async function GET() {
  try {
    const res = await fetch(API_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Vercel-Radio-Proxy/1.0)',
      },
      // 可选：缓存 30 秒（直播源 key 有时效性，不建议缓存太久）
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error(`API 请求失败: ${res.status}`);
    }

    const data = await res.json();

    // 简化数据，只保留频道名称（固定）和推荐的直播源
    const channels = data.data?.map((item: any) => ({
      title: item.title,           // 频道名称（固定）
      subtitle: item.subtitle,
      image: item.image,
      // 推荐优先级：playUrlMulti > mp3PlayUrlHigh > mp3PlayUrlLow
      streamUrl: item.playUrlMulti || 
                item.mp3PlayUrlHigh || 
                item.mp3PlayUrlLow || 
                item.playUrlLow,
      contentId: item.contentId,
    }));

    return NextResponse.json({
      success: true,
      count: channels.length,
      channels,
      updatedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: '获取直播源失败',
    }, { status: 500 });
  }
}
