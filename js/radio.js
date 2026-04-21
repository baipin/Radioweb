/**
 * 电台数据配置 - 百品专用
 */
const radioStations = [
    // === 香港 ===
    { name: "香港电台第一台", url: "https://rthkaudio1-lh.akamaihd.net/i/radio1_1@355864/master.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },
    { name: "香港电台第二台", url: "https://rthkaudio2-lh.akamaihd.net/i/radio2_1@355865/master.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },
    { name: "香港电台第三台", url: "https://rthkaudio3-lh.akamaihd.net/i/radio3_1@355866/master.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },
    { name: "香港电台第四台 (古典音乐)", url: "https://rthkaudio4-lh.akamaihd.net/i/radio4_1@355867/master.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },
    { name: "香港电台第五台", url: "https://rthkaudio5-lh.akamaihd.net/i/radio5_1@355868/master.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },
    { name: "香港电台第六台转播香港之声", url: "https://rthkradiocnrhk-live.akamaized.net/hls/live/2046111/radiocnrhk/master.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },
    { name: "香港电台普通话台", url: "https://rthkaudio6-lh.akamaihd.net/i/radiopth_1@355869/master.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },
    { name: "香港电台转播大湾区之声", url: "https://rthkradiocmgrgb-live.akamaized.net/hls/live/2046112/radiocmgrgb/index_64_a.m3u8", logo: "https://www.rthk.hk/favicon.ico", category: "香港" },

    { name: "新城知讯台 (997)", url: "https://metroradio-lh.akamaihd.net/i/997_h@349799/master.m3u8", logo: "https://www.metroradio.com.hk/favicon.ico", category: "香港" },
    { name: "新城财经台 (104)", url: "https://metroradio-lh.akamaihd.net/i/104_h@349798/master.m3u8", logo: "https://www.metroradio.com.hk/favicon.ico", category: "香港" },
    { name: "新城采讯台 (Metro Plus AM1044)", url: "https://metroradio-lh.akamaihd.net/i/1044_h@349800/master.m3u8", logo: "https://www.metroradio.com.hk/favicon.ico", category: "香港" },

    { name: "雷霆881 商业一台", url: "https://d2agljdoug3z0j.cloudfront.net/radio-HTTP/cr1-hd.3gp/chunklist.m3u8", logo: "https://www.881903.com/favicon.ico", category: "香港" },
    { name: "叱咤903 商业二台", url: "https://d2agljdoug3z0j.cloudfront.net/radio-HTTP/cr2-hd.3gp/chunklist.m3u8", logo: "https://www.881903.com/favicon.ico", category: "香港" },
    { name: "豁达864", url: "https://d3ca3xccq5z5hu.cloudfront.net/radio-HTTP/am864.3gp/chunklist.m3u8", logo: "https://www.881903.com/favicon.ico", category: "香港" },

    // === 澳门 ===
    { name: "澳门电台 (中文)", url: "https://live5.tdm.com.mo/live/rch2.live/playlist.m3u8", logo: "https://cdn2.tdm.com.mo/uploads/media/web_images/tdm new app logo.png", category: "澳门" },
    { name: "澳门电台 (葡文)", url: "https://live5.tdm.com.mo/live/rch1.live/playlist.m3u8", logo: "https://cdn2.tdm.com.mo/uploads/media/web_images/tdm new app logo.png", category: "澳门" },

    // === 内地 (CNR / CMG / CRI) ===
    { name: "中国之声", url: "https://ngcdn001.cnr.cn/live/zgzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "经济之声", url: "https://ngcdn002.cnr.cn/live/jjzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "音乐之声", url: "https://ngcdn003.cnr.cn/live/yyzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "经典音乐广播", url: "https://ngcdn004.cnr.cn/live/dszs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "中华之声", url: "https://ngcdn005.cnr.cn/live/zhzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "神州之声", url: "https://ngcdn006.cnr.cn/live/szzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "大湾区之声", url: "https://ngcdn007.cnr.cn/live/hxzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "香港之声", url: "https://ngcdn008.cnr.cn/live/xgzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "民族之声", url: "https://ngcdn009.cnr.cn/live/mzzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "文艺之声", url: "https://ngcdn010.cnr.cn/live/wyzs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "阅读之声", url: "https://ngcdn014.cnr.cn/live/ylgb/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "中国交通广播", url: "https://ngcdn016.cnr.cn/live/gsgljtgb/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },
    { name: "中国乡村之声", url: "https://ngcdn017.cnr.cn/live/xczs/index.m3u8", logo: "https://www.cnr.cn/favicon.ico", category: "内地" },

    { name: "华语环球广播 (CRI)", url: "http://sk.cri.cn/hyhq.m3u8", logo: "https://www.cri.cn/favicon.ico", category: "内地" },
    { name: "环球资讯广播", url: "http://sk.cri.cn/905.m3u8", logo: "https://www.cri.cn/favicon.ico", category: "内地" },
    { name: "英语资讯广播 (China Plus)", url: "http://cnlive.cnr.cn/hls/yyzxgb.m3u8", logo: "https://www.cri.cn/favicon.ico", category: "内地" },
    { name: "世界华声", url: "http://sk.cri.cn/hxfh.m3u8", logo: "https://www.cri.cn/favicon.ico", category: "内地" },
    { name: "劲曲调频 (CRI Hit FM)", url: "http://sk.cri.cn/887.m3u8", logo: "https://www.cri.cn/favicon.ico", category: "内地" },
    { name: "轻松调频 (CRI EZFM)", url: "http://sk.cri.cn/915.m3u8", logo: "https://www.cri.cn/favicon.ico", category: "内地" },

    // === 台湾 ===
    // 警察广播电台（含补充分台）
    { name: "警察广播电台 全国治安交通网", url: "https://stream.pbs.gov.tw/live/PBS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 台北分台", url: "https://stream.pbs.gov.tw/live/TPS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 台中分台", url: "https://stream.pbs.gov.tw/live/TCS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 台南分台", url: "https://stream.pbs.gov.tw/live/TNS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 高雄分台", url: "https://stream.pbs.gov.tw/live/KSS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 宜兰分台", url: "https://stream.pbs.gov.tw/live/ELS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 花莲分台", url: "https://stream.pbs.gov.tw/live/HLS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 台东分台", url: "http://stream.pbs.gov.tw:1935/live/TTS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },
    { name: "警察广播电台 新竹分台", url: "http://stream.pbs.gov.tw:1935/live/SCS/playlist.m3u8", logo: "img/radio/pbs.jpg", category: "台湾" },

    // 中央广播电台 (RTI)
    { name: "中央广播电台 国语台 (RTI)", url: "http://live2.rti.org.tw/live/_definst_/rti/rti3/playlist.m3u8", logo: "https://www.rti.org.tw/favicon.ico", category: "台湾" },
    { name: "中央广播电台 音乐台 (RTI)", url: "http://live2.rti.org.tw/live/_definst_/rti/rti4/playlist.m3u8", logo: "https://www.rti.org.tw/favicon.ico", category: "台湾" },
    { name: "中央广播电台 讲客电台 (RTI Hakka)", url: "http://live2.rti.org.tw/live/_definst_/rti/hakka/playlist.m3u8", logo: "https://www.rti.org.tw/favicon.ico", category: "台湾" },

    // 其他台湾电台（含补充）
    { name: "ICRT 台北国际社区广播电台", url: "https://stream.rcs.revma.com/nkdfurztxp3vv", logo: "https://www.icrt.com.tw/favicon.ico", category: "台湾" },
    { name: "飞碟联播网 (UFO)", url: "https://stream.rcs.revma.com/7mnq8rt7k5zuv", logo: "https://www.uforadio.com.tw/favicon.ico", category: "台湾" },
    { name: "BravoFM 台北都会音乐台", url: "https://onair.bravo913.com.tw:9130/live.mp3", logo: "", category: "台湾" },
    { name: "CityFM 城市广播 (929)", url: "http://fm929.cityfm.tw:8080/929.mp3", logo: "", category: "台湾" },
    { name: "CityFM 台北健康电台 (901)", url: "http://fm901.cityfm.tw:8080/901.mp3", logo: "", category: "台湾" },
    { name: "CityFM 大苗栗 (983)", url: "http://fm983.cityfm.tw:8080/983.mp3", logo: "", category: "台湾" },
    { name: "CityFM 台南知音 (971)", url: "http://fm971.cityfm.tw:8080/971.mp3", logo: "", category: "台湾" },
    { name: "M-Radio 全国", url: "http://stream.rcs.revma.com/044q61ha7a0uv", logo: "", category: "台湾" },

    { name: "Classical FM 97.7", url: "https://onair.family977.com.tw:8977/live.mp3", logo: "https://www.family977.com.tw/apple-touch-icon.png", category: "台湾" },
    { name: "Bravo FM 91.3", url: "https://onair.bravo913.com.tw:9130/live.mp3", logo: "https://www.bravo913.com.tw/lazyweb/images/logo.png", category: "台湾" },
    { name: "ICRT", url: "https://stream.rcs.revma.com/nkdfurztxp3vv", logo: "https://www.icrt.com.tw/favicon.ico, category: "台湾" },
    { name: "News 98", url: "https://stream.rcs.revma.com/pntx1639ntzuv.m4a", logo: "https://www.news98.com.tw/images/logo.png", category: "台湾" },
    { name: "城市廣播網台北90.1", url: "http://fm901.cityfm.tw:8080/901.mp3", logo: "http://www.cityfm.tw/img/logo.png", category: "台湾" },
    { name: "IC之音", url: "https://stream.rcs.revma.com/7mnq8rt7k5zuv", logo: "https://www.ic975.com/wp-content/themes/ic975/images/logo.png", category: "台湾" },
    { name: "臺北廣播電臺93.1", url: "https://stream.ginnet.cloud/live0130lo-yfyo/_definst_/fm/playlist.m3u8", logo: "https://tradio.gov.taipei/favicon.ico", category: "台湾" },
    { name: "中廣流行網", url: "https://sonnykuo.appspot.com/bcc/?id=中廣流行網", logo: "https://www.bcc.com.tw/favicon.ico", category: "台湾" },
    { name: "中廣音樂網", url: "https://sonnykuo.appspot.com/bcc/?id=中廣音樂網", logo: "https://www.bcc.com.tw/favicon.ico", category: "台湾" },
    { name: "中廣新聞網", url: "https://sonnykuo.appspot.com/bcc/?id=中廣新聞網", logo: "https://www.bcc.com.tw/favicon.ico", category: "台湾" },
    { name: "飛碟聯播網", url: "https://stream.rcs.revma.com/em90w4aeewzuv.m4a", logo: "https://www.uforadio.com.tw/frontend_assets/img/logo-s.png", category: "台湾" },
    { name: "AsiaFM 亞洲電台", url: "https://stream.rcs.revma.com/xpgtqc74hv8uv", logo: "https://www.asiafm.com.tw/wp-content/themes/asiafm/images/logo.png", category: "台湾" },
    { name: "Hit FM 台北之音", url: "http://202.39.43.67:1935/live/RA000036/chunklist.m3u8", logo: "http://www.hitoradio.com/newweb/img/logo.png", category: "台湾" },
    { name: "好事聯播網", url: "http://202.39.43.67:1935/live/RA000013/chunklist.m3u8", logo: "http://www.bestradio.com.tw/images/logo.png", category: "台湾" },
    { name: "台北流行廣播POP Radio", url: "http://202.39.43.67:1935/live/RA000080/chunklist.m3u8", logo: "https://www.pop917.com/images/logo_2025.png", category: "台湾" },
    { name: "台北愛樂电台", url: "http://202.39.43.67:1935/live/RA000018/chunklist.m3u8", logo: "https://www.e-classical.com.tw/images/logo.png", category: "台湾" },
    
    { name: "LOVE 972", url: "https://14033.live.streamtheworld.com/LOVE972FM_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/love-972.png", category: "新加坡" },
    { name: "YES 933", url: "https://22393.live.streamtheworld.com/YES933_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/yes-933.png", category: "新加坡" },
    { name: "CNA 938", url: "https://14033.live.streamtheworld.com/938NOW_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/cna-938.png", category: "新加坡" },
    { name: "CAPITAL 958", url: "https://19183.live.streamtheworld.com/CAPITAL958FM_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/capital-958.png", category: "新加坡" },
    { name: "CLASS 95", url: "https://14033.live.streamtheworld.com/CLASS95_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/class-95.png", category: "新加坡" },
    { name: "GOLD 905", url: "https://14033.live.streamtheworld.com/GOLD905_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/gold-95.png", category: "新加坡" },
    { name: "987FM", url: "https://14033.live.streamtheworld.com/987FM_PREM.aac", logo: "https://www.melisten.sg/favicon.ico", category: "新加坡" },
    { name: "SYMPHONY 924", url: "https://14033.live.streamtheworld.com/SYMPHONY924FM_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/symphony-924.png", category: "新加坡" },
    { name: "RIA 897", url: "https://14033.live.streamtheworld.com/RIA897FM_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/ria-897.png", category: "新加坡" },
    { name: "Oli 968", url: "https://14033.live.streamtheworld.com/OLI968FM_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/oli-968.png", category: "新加坡" },
    { name: "Warna 942", url: "https://14033.live.streamtheworld.com/WARNA942FM_PREM.aac", logo: "https://www16.mediacorp.sg/melisten/radiostation-logos/warna-942.png", category: "新加坡" },
    { name: "UFM 100.3", url: "https://sph-radio.streamguys1.com/u1003", logo: "https://www.ufm1003.sg/favicon.ico", category: "新加坡" },
    { name: "96.3 好FM", url: "https://sph-radio.streamguys1.com/963", logo: "https://www.963haofm.sg/favicon.ico", category: "新加坡" },
    { name: "One FM 91.3", url: "https://sph-radio.streamguys1.com/one913", logo: "https://www.onefm.sg/favicon.ico", category: "新加坡" },
    { name: "Kiss92 FM", url: "https://sph-radio.streamguys1.com/kiss92", logo: "https://www.kiss92.sg/favicon.ico", category: "新加坡" },
    { name: "Power 98 Love Songs", url: "https://camokix.streamguys1.com/power98_mp3", logo: "https://www.power98.com.sg/favicon.ico", category: "新加坡" },

    // === 国际 / 其他 ===
    { name: "BBC World Service", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service", logo: "https://www.bbc.com/favicon.ico", category: "国际" },
    { name: "半岛电视台 (Al Jazeera English)", url: "https://live-hls-audio-web-aje.getaj.net/VOICE-AJE/01.m3u8", logo: "https://www.aljazeera.com/favicon.ico", category: "国际" },
    { name: "Linn Jazz (高音质)", url: "http://89.16.185.174:8004/stream", logo: "https://www.linn.co.uk/favicon.ico", category: "国际" },
    { name: "NHK 世界广播 (中文)", url: "https://nhkworld.webcdn.stream.ne.jp/www11/radiojapan/all/263948/live_s.m3u8", logo: "https://www.nhk.or.jp/favicon.ico", category: "国际" },
    { name: "VOA Global English", url: "http://voa-ingest.akamaized.net/hls/live/2035200/161_352R/playlist.m3u8", logo: "", category: "国际" },

    // === 网络音乐 ===
    { name: "V2BEAT", url: "https://stream.v2beat.live/icecast.audio?t=file.mp3", logo: "", category: "网络音乐" },
    { name: "AsiaFM 亚洲音乐", url: "http://asiafm.hk:8000/asiafm", logo: "", category: "网络音乐" },
    { name: "AsiaFM HD音乐", url: "http://asiafm.hk:8000/asiahd", logo: "", category: "网络音乐" },
    { name: "AsiaFM 亚洲经典", url: "http://goldfm.cn:8000/goldfm", logo: "", category: "网络音乐" },
    { name: "AsiaFM 亚洲热歌", url: "http://hot.asiafm.net:8000/asiafm", logo: "", category: "网络音乐" },
    { name: "AsiaFM 亚洲天空", url: "http://funradio.cn:8000/funradio", logo: "", category: "网络音乐" },
    { name: "AsiaFM 亚洲粤语", url: "http://yyt.asiafm.net:8000/asiafm", logo: "", category: "网络音乐" },
    { name: "80后音悦台", url: "http://stream3.hndt.com/now/SFZeH2cb/playlist.m3u8", logo: "", category: "网络音乐" },
    { name: "500首华语经典", url: "http://ls.qingting.fm/live/3412131.m3u8?bitrate=64", logo: "", category: "网络音乐" },
    { name: "Big B Radio 中文流行", url: "http://cpop.bigbradio.net/s", logo: "", category: "网络音乐" },
    { name: "Big B Radio 韩语流行", url: "http://kpop.bigbradio.net/s", logo: "", category: "网络音乐" },
    { name: "Big B Radio 日语流行", url: "http://jpop.bigbradio.net/s", logo: "", category: "网络音乐" }
];
