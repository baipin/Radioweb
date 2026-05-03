// UI交互模块
const UIManager = (function() {
    let allStations = [];
    let currentFilter = '全部';
    let currentRenderTask = null;
    let sortable = null;
    
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const stationData = JSON.parse(item.dataset.info);
                item.innerHTML = `
                    <div style="width:52px;height:52px;">${getLogoHTML(stationData.logo, stationData.name)}</div>
                    <span style="font-weight:600; margin-top:12px; text-align:center; font-size:0.9rem;">${escapeHtml(stationData.name)}</span>
                    <div class="admin-actions">
                        <mdui-button-icon icon="edit" size="small" onclick="window.openEdit('${escapeHtml(stationData.url)}'); event.stopPropagation();"></mdui-button-icon>
                        <mdui-button-icon icon="keyboard_arrow_up" size="small" onclick="window.moveStation('${escapeHtml(stationData.url)}', -1); event.stopPropagation();"></mdui-button-icon>
                        <mdui-button-icon icon="keyboard_arrow_down" size="small" onclick="window.moveStation('${escapeHtml(stationData.url)}', 1); event.stopPropagation();"></mdui-button-icon>
                    </div>
                `;
                lazyObserver.unobserve(item);
            }
        });
    }, { rootMargin: '100px' });

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
            return c;
        });
    }

    function getLogoHTML(logo, name) {
        if (logo && logo.trim() !== '') {
            return `<img src="${logo}" class="dynamic-logo" onerror="this.outerHTML = createPlaceholder('${escapeHtml(name.replace(/'/g, "\\'"))}').outerHTML">`;
        }
        return createPlaceholder(name).outerHTML;
    }

    function createPlaceholder(name) {
        const char = (name && name.length > 0) ? name.charAt(0).toUpperCase() : '?';
        const colors = ['#5e7eff', '#ff6b6b', '#4ecdc4', '#f9a825', '#ab47bc'];
        const colorIndex = Math.abs(name ? name.length : 0) % colors.length;
        const div = document.createElement('div');
        div.className = 'dynamic-logo';
        div.style.background = colors[colorIndex];
        div.innerText = char;
        return div;
    }

    function renderStations(stations, favorites, currentPlayingUrl) {
        if (currentRenderTask) {
            cancelAnimationFrame(currentRenderTask);
        }

        const listDiv = document.getElementById('station-list');
        if (!listDiv) return;
        
        lazyObserver.disconnect();
        listDiv.innerHTML = '';

        let filtered = stations;
        if (currentFilter === '我的收藏') {
            filtered = stations.filter(s => favorites.includes(s.url));
        } else if (currentFilter !== '全部') {
            filtered = stations.filter(s => (s.category || '未分类') === currentFilter);
        }

        const chunkSize = 20;
        let index = 0;

        function renderChunk() {
            const limit = Math.min(index + chunkSize, filtered.length);
            const fragment = document.createDocumentFragment();

            for (; index < limit; index++) {
                const s = filtered[index];
                const item = document.createElement('div');
                item.className = `radio-item ${currentPlayingUrl === s.url ? 'active' : ''}`;
                item.style.animationDelay = `${(index % chunkSize) * 0.05}s`;
                item.dataset.info = JSON.stringify(s);
                item.innerHTML = `<div style="width:52px;height:52px;" class="dynamic-logo">...</div>`;
                item.onclick = () => PlayerManager.play(s);
                
                fragment.appendChild(item);
                lazyObserver.observe(item);
            }

            listDiv.appendChild(fragment);

            if (index < filtered.length) {
                currentRenderTask = requestAnimationFrame(renderChunk);
            } else {
                currentRenderTask = null;
            }
        }

        renderChunk();
    }

    function renderCategories(stations, favorites, onFilterChange) {
        const tabBox = document.getElementById('category-tabs');
        if (!tabBox) return;
        
        let cats = ['全部'];
        if (favorites.length > 0) cats.push('我的收藏');
        
        const allCategories = stations
            .map(s => s.category || '未分类')
            .filter((v, i, self) => self.indexOf(v) === i)
            .sort();
        
        cats = [...cats, ...allCategories];

        tabBox.innerHTML = '';
        cats.forEach(c => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${currentFilter === c ? 'active' : ''}`;
            btn.textContent = c;
            btn.onclick = () => {
                currentFilter = c;
                if (onFilterChange) onFilterChange(c);
            };
            tabBox.appendChild(btn);
        });
    }

    function updateFavoriteButton(url, favorites) {
        const btn = document.getElementById('fav-btn-main');
        if (!btn) return;
        
        if (!url) {
            btn.style.display = 'none';
            return;
        }
        
        btn.style.display = 'inline-flex';
        const isFav = favorites.includes(url);
        btn.icon = isFav ? 'favorite' : 'favorite_border';
    }

    function updatePlayingUI(station) {
        if (!station) return;
        
        const currentNameSpan = document.getElementById('current-name');
        const playerLogo = document.getElementById('player-logo');
        
        if (currentNameSpan) currentNameSpan.innerText = station.name;
        if (playerLogo) playerLogo.innerHTML = getLogoHTML(station.logo, station.name);
    }

    function setFilter(filter) {
        currentFilter = filter;
    }

    function getFilter() {
        return currentFilter;
    }

    function initSortable(onOrderChange) {
        const listDiv = document.getElementById('station-list');
        if (!listDiv) return;
        
        sortable = new Sortable(listDiv, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            disabled: true,
            onEnd: function() {
                const newOrder = Array.from(listDiv.querySelectorAll('.radio-item')).map(el => {
                    return JSON.parse(el.dataset.info).url;
                });
                if (onOrderChange) onOrderChange(newOrder);
            }
        });
        
        return sortable;
    }

    function setSortableEnabled(enabled) {
        if (sortable) {
            sortable.option('disabled', !enabled);
        }
    }

    return {
        renderStations,
        renderCategories,
        updateFavoriteButton,
        updatePlayingUI,
        setFilter,
        getFilter,
        initSortable,
        setSortableEnabled,
        getLogoHTML,
        createPlaceholder
    };
})();
