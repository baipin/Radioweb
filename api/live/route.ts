import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_URL = 'https://ytmsout.radio.cn/web/appBroadcast/list?categoryId=0&provinceCode=0';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');        // 按频道名称查询
    const contentId = searchParams.get('id');     // 按 contentId 查询

    const res = await fetch(API_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 30 },
    });

    if (!res.ok) throw new Error('上游接口错误');

    const json = await res.json();
    let channels = json.data || [];

    // 如果指定了 name 或 id，则过滤单个频道
    if (name || contentId) {
      channels = channels.filter((item: any) => {
        if (name) return item.title.includes(name);           // 支持模糊匹配
        if (contentId) return item.contentId === contentId;
        return true;
      });
    }

    // 处理数据
    const result = channels.map((item: any) => ({
      contentId: item.contentId,
      title: item.title,
      subtitle: item.subtitle,
      image: item.image,
      streamUrl: item.playUrlMulti || 
                item.mp3PlayUrlHigh || 
                item.mp3PlayUrlLow || 
                item.playUrlLow,
      allUrls: {
        playUrlMulti: item.playUrlMulti,
        mp3PlayUrlHigh: item.mp3PlayUrlHigh,
        mp3PlayUrlLow: item.mp3PlayUrlLow,
        playUrlLow: item.playUrlLow,
      }
    }));

    return NextResponse.json({
      success: true,
      count: result.length,
      channels: result,
      updatedAt: new Date().toISOString(),
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, s-maxage=30',
      }
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: '获取失败' }, { status: 500 });
  }
}
