/**
 * 电台数据配置 - 百品导航专用
 * 包含：电台名称、直播流地址、Logo图标
 * 已全面补充香港、澳门、内地、国际及台湾电台（新增警察广播电台、RTI、ICRT 等）
 */
const radioStations = [
    // --- 香港电台 (RTHK) ---
    { name: "香港电台第一台", url: "https://rthkaudio1-lh.akamaihd.net/i/radio1_1@355864/master.m3u8", logo: "https://www.rthk.hk/favicon.ico" },
    { name: "香港电台第二台", url: "https://rthkaudio2-lh.akamaihd.net/i/radio2_1@355865/master.m3u8", logo: "https://www.rthk.hk/favicon.ico" },
    { name: "香港电台第三台", url: "https://rthkaudio3-lh.akamaihd.net/i/radio3_1@355866/master.m3u8", logo: "https://www.rthk.hk/favicon.ico" },
    { name: "香港电台第四台 (古典音乐)", url: "https://rthkaudio4-lh.akamaihd.net/i/radio4_1@355867/master.m3u8", logo: "https://www.rthk.hk/favicon.ico" },
    { name: "香港电台第五台", url: "https://rthkaudio5-lh.akamaihd.net/i/radio5_1@355868/master.m3u8", logo: "https://www.rthk.hk/favicon.ico" },
    { name: "香港电台第六台", url: "https://rthkaudio6cnr-lh.akamaihd.net/i/radio6cnr_1@575604/master.m3u8", logo: "https://www.rthk.hk/favicon.ico" },
    { name: "香港电台普通话台", url: "https://rthkaudio6-lh.akamaihd.net/i/radiopth_1@355869/master.m3u8", logo: "https://www.rthk.hk/favicon.ico" },
    { name: "香港电台转播大湾区之声 / 香港之声", url: "https://rthkradiocmgrgb-live.akamaized.net/hls/live/2046112/radiocmgrgb/index_64_a.m3u8", logo: "https://www.rthk.hk/favicon.ico" },

    // --- 新城电台 (Metro Radio) ---
    { name: "新城知讯台 (997)", url: "https://metroradio-lh.akamaihd.net/i/997_h@349799/master.m3u8", logo: "https://www.metroradio.com.hk/favicon.ico" },
    { name: "新城财经台 (104)", url: "https://metroradio-lh.akamaihd.net/i/104_h@349798/master.m3u8", logo: "https://www.metroradio.com.hk/favicon.ico" },
    { name: "新城采讯台 (Metro Plus AM1044)", url: "https://metroradio-lh.akamaihd.net/i/1044_h@349800/master.m3u8", logo: "https://www.metroradio.com.hk/favicon.ico" },

    // --- 香港商业电台 (881903) ---
    { name: "雷霆881 商业一台", url: "https://d2agljdoug3z0j.cloudfront.net/radio-HTTP/cr1-hd.3gp/chunklist.m3u8", logo: "https://www.881903.com/favicon.ico" },
    { name: "叱咤903 商业二台", url: "https://d2agljdoug3z0j.cloudfront.net/radio-HTTP/cr2-hd.3gp/chunklist.m3u8", logo: "https://www.881903.com/favicon.ico" },
    { name: "豁达864", url: "https://d3ca3xccq5z5hu.cloudfront.net/radio-HTTP/am864.3gp/chunklist.m3u8", logo: "https://www.881903.com/favicon.ico" },

    // --- 澳门电台 (TDM) ---
    { name: "澳门电台 (中文)", url: "https://live.tdm.com.mo/ch1/radio_ch.live/playlist.m3u8", logo: "https://www.tdm.com.mo/favicon.ico" },
    { name: "澳门电台 (葡文)", url: "https://live.tdm.com.mo/ch2/radio_pt.live/playlist.m3u8", logo: "https://www.tdm.com.mo/favicon.ico" },

    // --- 中国中央广播电视总台 (CNR / CMG) ---
    { name: "中国之声", url: "http://ngcdn001.cnr.cn/live/zgzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "经济之声", url: "http://ngcdn002.cnr.cn/live/jjzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "音乐之声", url: "http://ngcdn003.cnr.cn/live/yyzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "经典音乐广播", url: "http://ngcdn004.cnr.cn/live/dszs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "中华之声", url: "http://ngcdn005.cnr.cn/live/zhzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "神州之声", url: "http://ngcdn006.cnr.cn/live/szzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "大湾区之声", url: "http://ngcdn007.cnr.cn/live/hxzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "香港之声", url: "http://ngcdn008.cnr.cn/live/xgzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "民族之声", url: "http://ngcdn009.cnr.cn/live/mzzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "文艺之声", url: "http://ngcdn010.cnr.cn/live/wyzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "阅读之声", url: "http://ngcdn014.cnr.cn/live/ylgb/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "中国交通广播", url: "http://ngcdn016.cnr.cn/live/gsgljtgb/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },
    { name: "中国乡村之声", url: "http://ngcdn017.cnr.cn/live/xczs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico" },

    // --- 中国国际广播电台 (CRI) ---
    { name: "华语环球广播", url: "http://sk.cri.cn/hyhq.m3u8", logo: "https://www.cri.cn/favicon.ico" },
    { name: "环球资讯广播", url: "http://sk.cri.cn/905.m3u8", logo: "https://www.cri.cn/favicon.ico" },
    { name: "英语资讯广播 (China Plus)", url: "http://cnlive.cnr.cn/hls/yyzxgb.m3u8", logo: "https://www.cri.cn/favicon.ico" },
    { name: "世界华声", url: "http://sk.cri.cn/hxfh.m3u8", logo: "https://www.cri.cn/favicon.ico" },
    { name: "劲曲调频 (CRI Hit FM)", url: "http://sk.cri.cn/887.m3u8", logo: "https://www.cri.cn/favicon.ico" },
    { name: "轻松调频 (CRI EZFM)", url: "http://sk.cri.cn/915.m3u8", logo: "https://www.cri.cn/favicon.ico" },

    // --- 台湾电台 (Taiwan Radio) ---
    // 警察广播电台 (Police Broadcasting Service)
    { name: "警察广播电台 全国治安交通网", url: "https://stream.pbs.gov.tw/live/PBS/playlist.m3u8", logo: "https://www.pbs.gov.tw/favicon.ico" },
    { name: "警察广播电台 台北分台", url: "https://stream.pbs.gov.tw/live/TPS/playlist.m3u8", logo: "https://www.pbs.gov.tw/favicon.ico" },
    { name: "警察广播电台 台中分台", url: "https://stream.pbs.gov.tw/live/TCS/playlist.m3u8", logo: "https://www.pbs.gov.tw/favicon.ico" },
    { name: "警察广播电台 台南分台", url: "https://stream.pbs.gov.tw/live/TNS/playlist.m3u8", logo: "https://www.pbs.gov.tw/favicon.ico" },
    { name: "警察广播电台 高雄分台", url: "https://stream.pbs.gov.tw/live/KSS/playlist.m3u8", logo: "https://www.pbs.gov.tw/favicon.ico" },
    { name: "警察广播电台 宜兰分台", url: "https://stream.pbs.gov.tw/live/ELS/playlist.m3u8", logo: "https://www.pbs.gov.tw/favicon.ico" },
    { name: "警察广播电台 花莲分台", url: "https://stream.pbs.gov.tw/live/HLS/playlist.m3u8", logo: "https://www.pbs.gov.tw/favicon.ico" },

    // 台湾中央广播电台 (RTI)
    { name: "中央广播电台 国语台 (RTI)", url: "http://live2.rti.org.tw/live/_definst_/rti/rti3/playlist.m3u8", logo: "https://www.rti.org.tw/favicon.ico" },
    { name: "中央广播电台 音乐台 (RTI)", url: "http://live2.rti.org.tw/live/_definst_/rti/rti4/playlist.m3u8", logo: "https://www.rti.org.tw/favicon.ico" },
    { name: "中央广播电台 讲客电台 (RTI Hakka)", url: "http://live2.rti.org.tw/live/_definst_/rti/hakka/playlist.m3u8", logo: "https://www.rti.org.tw/favicon.ico" },

    // ICRT（台北国际社区广播电台，英语台）
    { name: "ICRT 台北国际社区广播电台", url: "https://stream.rcs.revma.com/nkdfurztxp3vv", logo: "https://www.icrt.com.tw/favicon.ico" },

    // 其他台湾热门电台
    { name: "飞碟联播网 (UFO)", url: "https://stream.rcs.revma.com/7mnq8rt7k5zuv", logo: "https://www.uforadio.com.tw/favicon.ico" },
    { name: "好事联播网 Best Radio 989", url: "", logo: "https://www.bestradio.com.tw/favicon.ico" },  // 部分联播网地址需官网App验证，可后续替换
    { name: "中广新闻网 (BCC News)", url: "", logo: "https://www.bcc.com.tw/favicon.ico" },

    // --- 国际/其他 ---
    { name: "半岛电视台 (Al Jazeera English)", url: "https://live-hls-audio-web-aje.getaj.net/VOICE-AJE/01.m3u8", logo: "https://www.aljazeera.com/favicon.ico" },
    { name: "BBC World Service", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service", logo: "https://www.bbc.com/favicon.ico" },
    { name: "Linn Jazz (高音质)", url: "http://89.16.185.174:8004/stream", logo: "https://www.linn.co.uk/favicon.ico" }
];
