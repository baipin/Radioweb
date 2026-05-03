// 播放器核心模块
const PlayerManager = (function() {
    let audio = null;
    let hls = null;
    let currentUrl = '';
    let isRetrying = false;
    let currentStation = null;

    function init() {
        audio = document.getElementById('audio-player');
        
        if (!audio) return;
        
        audio.onerror = handleError;
        audio.onplaying = handlePlaying;
        audio.onpause = handlePause;
        audio.onabort = handleAbort;
        
        // 音量控制
        const volumeSlider = document.getElementById('volume-slider');
        if (volumeSlider) {
            volumeSlider.oninput = (e) => {
                if (audio) audio.volume = e.target.value / 100;
            };
        }
        
        // 静音按钮
        const muteBtn = document.getElementById('mute-btn');
        if (muteBtn) {
            muteBtn.onclick = () => {
                if (audio) {
                    audio.muted = !audio.muted;
                    muteBtn.icon = audio.muted ? 'volume_off' : 'volume_up';
                }
            };
        }
    }

    function loadSource(url, isM3U8) {
        if (!audio) return;
        
        if (isM3U8) {
            if (Hls.isSupported()) {
                if (hls) hls.destroy();
                hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(audio);
                hls.on(Hls.Events.MANIFEST_PARSED, () => audio.play());
                hls.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal && !isRetrying) handleError();
                });
            } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
                audio.src = url;
                audio.play();
            }
        } else {
            if (hls) hls.destroy();
            audio.src = url;
            audio.play();
        }
    }

    function play(station) {
        if (!audio) return;
        
        let targetUrl = station.url;
        isRetrying = false;
        currentStation = station;

        if (targetUrl.startsWith('http://')) {
            targetUrl = `/api/proxy?url=${encodeURIComponent(targetUrl)}`;
            isRetrying = true;
        }

        currentUrl = targetUrl;
        
        const statusText = document.getElementById('play-status');
        if (statusText) statusText.innerText = '缓冲中...';
        
        loadSource(targetUrl, station.url.includes('.m3u8'));
        
        // 通知Android
        if (window.AndroidBridge) {
            window.AndroidBridge.onStationChanged(station.name, station.url, station.logo || '');
        }
    }

    function handleError() {
        const statusText = document.getElementById('play-status');
        
        if (!isRetrying && currentUrl) {
            isRetrying = true;
            if (statusText) statusText.innerText = '切换代理模式中...';
            const proxyUrl = `/api/proxy?url=${encodeURIComponent(currentUrl)}`;
            loadSource(proxyUrl, currentUrl.includes('.m3u8'));
        } else {
            if (statusText) statusText.innerText = '频道暂时不可用';
        }
    }

    function handlePlaying() {
        const statusText = document.getElementById('play-status');
        const masterBtn = document.getElementById('master-play-btn');
        const waveAnim = document.getElementById('playing-anim');
        
        const currentLang = window.currentLanguage || 'zh-CN';
        const translations = window.translations || {};
        
        statusText.innerText = translations[currentLang]?.status_playing || '正在直播';
        if (masterBtn) masterBtn.icon = 'pause';
        if (waveAnim) waveAnim.style.display = 'flex';
    }

    function handlePause() {
        const masterBtn = document.getElementById('master-play-btn');
        const waveAnim = document.getElementById('playing-anim');
        const statusText = document.getElementById('play-status');
        
        const currentLang = window.currentLanguage || 'zh-CN';
        const translations = window.translations || {};
        
        if (masterBtn) masterBtn.icon = 'play_arrow';
        if (waveAnim) waveAnim.style.display = 'none';
        statusText.innerText = translations[currentLang]?.status_paused || '已暂停';
    }

    function handleAbort() {
        const masterBtn = document.getElementById('master-play-btn');
        const waveAnim = document.getElementById('playing-anim');
        
        if (masterBtn) masterBtn.icon = 'play_arrow';
        if (waveAnim) waveAnim.style.display = 'none';
    }

    function togglePlay() {
        if (!audio) return;
        
        const statusText = document.getElementById('play-status');
        
        if (!audio.src || audio.src === window.location.href) {
            statusText.innerText = '请先选择电台';
            return;
        }
        
        if (audio.paused) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    statusText.innerText = '点击图标以激活播放';
                });
            }
        } else {
            audio.pause();
            // Safari 优化
            if (!hls && audio.canPlayType('application/vnd.apple.mpegurl')) {
                const currentSrc = audio.src;
                audio.src = '';
                audio.load();
                audio.src = currentSrc;
            }
        }
    }

    function getCurrentStation() {
        return currentStation;
    }

    function getCurrentUrl() {
        return currentUrl;
    }

    function destroy() {
        if (hls) {
            hls.destroy();
            hls = null;
        }
    }

    return { init, play, togglePlay, getCurrentStation, getCurrentUrl, destroy };
})();
