// 主入口文件
(function() {
    // 全局变量
    let customData = [];
    let favorites = [];
    let deletedUrls = [];
    let sortOrder = [];
    let allStations = [];

    // 初始化存储
    function initStorage() {
        customData = StorageManager.getCustom();
        favorites = StorageManager.getFavorites();
        deletedUrls = StorageManager.getDeleted();
        sortOrder = StorageManager.getSortOrder();
    }

    // 保存存储
    function saveStorage() {
        StorageManager.setCustom(customData);
        StorageManager.setFavorites(favorites);
        StorageManager.setDeleted(deletedUrls);
        StorageManager.setSortOrder(sortOrder);
    }

    // 刷新电台列表
    function refreshStations() {
        const base = (typeof radioStations !== 'undefined' && Array.isArray(radioStations)) ? radioStations : [];
        const combinedRaw = [...base, ...customData];
        allStations = combinedRaw.filter(s => !deletedUrls.includes(s.url));
        
        if (sortOrder.length > 0) {
            allStations.sort((a, b) => {
                let idxA = sortOrder.indexOf(a.url);
                let idxB = sortOrder.indexOf(b.url);
                if (idxA === -1) idxA = 9999;
                if (idxB === -1) idxB = 9999;
                return idxA - idxB;
            });
        }
        
        const currentPlayingUrl = PlayerManager.getCurrentUrl();
        UIManager.renderStations(allStations, favorites, currentPlayingUrl);
        UIManager.renderCategories(allStations, favorites, (filter) => {
            UIManager.setFilter(filter);
            refreshStations();
        });
        UIManager.updateFavoriteButton(currentPlayingUrl, favorites);
    }

    // 移动电台
    window.moveStation = function(url, direction) {
        let currentOrder = allStations.map(s => s.url);
        let index = currentOrder.indexOf(url);
        if (index === -1) return;
        let newIndex = index + direction;
        if (newIndex < 0 || newIndex >= currentOrder.length) return;
        [currentOrder[index], currentOrder[newIndex]] = [currentOrder[newIndex], currentOrder[index]];
        sortOrder = currentOrder;
        StorageManager.setSortOrder(sortOrder);
        refreshStations();
    };

    // 打开编辑
    window.openEdit = function(url) {
        const station = allStations.find(x => x.url === url);
        if (!station) return;
        
        const base = (typeof radioStations !== 'undefined' && Array.isArray(radioStations)) ? radioStations : [];
        const isPreset = base.some(p => p.url === url);
        const diag = document.getElementById('station-dialog');
        const diagTitle = document.getElementById('diag-title');
        const nameField = document.getElementById('f-name');
        const catField = document.getElementById('f-cat');
        const logoField = document.getElementById('f-logo');
        const urlField = document.getElementById('f-url');
        const deleteBtn = document.getElementById('btn-delete-station');
        const saveBtn = document.getElementById('btn-save');
        
        window.editingUrl = url;
        diagTitle.innerText = '编辑电台';
        nameField.value = station.name;
        catField.value = station.category || '';
        logoField.value = station.logo || '';
        
        if (isPreset) {
            urlField.value = '预置电台';
            urlField.disabled = true;
        } else {
            urlField.value = station.url;
            urlField.disabled = false;
        }
        
        saveBtn.style.display = 'inline-flex';
        deleteBtn.style.display = 'inline-flex';
        diag.open = true;
    };

    // 强制刷新电台
    window.forceReloadRadios = function() {
        const refreshBtn = document.querySelector('#refresh');
        if (refreshBtn) refreshBtn.classList.add('rotate-anim');
        
        const script = document.createElement('script');
        script.src = `js/radio.js?t=${Date.now()}`;
        script.onload = function() {
            if (refreshBtn) refreshBtn.classList.remove('rotate-anim');
            refreshStations();
            if (typeof mdui !== 'undefined') {
                mdui.snackbar({
                    message: '电台频道已同步',
                    position: 'right-top'
                });
            }
        };
        document.head.appendChild(script);
    };

    // 关闭对话框
    window.closeDialog = function() {
        const diag = document.getElementById('station-dialog');
        if (diag) diag.open = false;
    };

    // 初始化事件监听
    function initEventListeners() {
        // 收藏按钮
        const favBtn = document.getElementById('fav-btn-main');
        if (favBtn) {
            favBtn.onclick = () => {
                const currentUrl = PlayerManager.getCurrentUrl();
                if (!currentUrl) return;
                
                if (favorites.includes(currentUrl)) {
                    favorites = favorites.filter(u => u !== currentUrl);
                } else {
                    favorites.push(currentUrl);
                }
                StorageManager.setFavorites(favorites);
                refreshStations();
            };
        }
        
        // 添加电台按钮
        const openAddBtn = document.getElementById('open-add');
        if (openAddBtn) {
            openAddBtn.onclick = () => {
                window.editingUrl = null;
                const diag = document.getElementById('station-dialog');
                const diagTitle = document.getElementById('diag-title');
                const nameField = document.getElementById('f-name');
                const urlField = document.getElementById('f-url');
                const catField = document.getElementById('f-cat');
                const logoField = document.getElementById('f-logo');
                const importWrapper = document.getElementById('import-area-wrapper');
                const saveBtn = document.getElementById('btn-save');
                const doImportBtn = document.getElementById('btn-do-import');
                const deleteBtn = document.getElementById('btn-delete-station');
                
                diagTitle.innerText = '添加电台';
                nameField.value = '';
                urlField.value = '';
                urlField.disabled = false;
                catField.value = '';
                logoField.value = '';
                importWrapper.style.display = 'none';
                saveBtn.style.display = 'inline-flex';
                doImportBtn.style.display = 'none';
                deleteBtn.style.display = 'none';
                diag.open = true;
            };
        }
        
        // 保存按钮
        const saveBtn = document.getElementById('btn-save');
        if (saveBtn) {
            saveBtn.onclick = () => {
                const urlInput = document.getElementById('f-url');
                const station = {
                    name: document.getElementById('f-name').value.trim(),
                    url: urlInput.disabled ? window.editingUrl : urlInput.value.trim(),
                    category: document.getElementById('f-cat').value.trim() || '默认',
                    logo: document.getElementById('f-logo').value.trim()
                };
                
                if (!station.name || !station.url) {
                    alert('必填项不能为空');
                    return;
                }
                
                if (window.editingUrl && window.editingUrl !== station.url) {
                    if (!deletedUrls.includes(window.editingUrl)) {
                        deletedUrls.push(window.editingUrl);
                    }
                    customData = customData.filter(x => x.url !== window.editingUrl);
                }
                
                customData = customData.filter(x => x.url !== station.url);
                customData.push(station);
                StorageManager.setCustom(customData);
                
                deletedUrls = deletedUrls.filter(u => u !== station.url);
                StorageManager.setDeleted(deletedUrls);
                
                document.getElementById('station-dialog').open = false;
                refreshStations();
            };
        }
        
        // 删除按钮
        const deleteBtn = document.getElementById('btn-delete-station');
        if (deleteBtn) {
            deleteBtn.onclick = () => {
                if (confirm('确定删除吗？')) {
                    customData = customData.filter(x => x.url !== window.editingUrl);
                    StorageManager.setCustom(customData);
                    
                    if (!deletedUrls.includes(window.editingUrl)) {
                        deletedUrls.push(window.editingUrl);
                    }
                    StorageManager.setDeleted(deletedUrls);
                    
                    document.getElementById('station-dialog').open = false;
                    refreshStations();
                }
            };
        }
        
        // 批量导入显示按钮
        const showImportBtn = document.getElementById('show-import-area');
        if (showImportBtn) {
            showImportBtn.onclick = () => {
                const importWrapper = document.getElementById('import-area-wrapper');
                const saveBtn = document.getElementById('btn-save');
                const doImportBtn = document.getElementById('btn-do-import');
                
                importWrapper.style.display = 'block';
                saveBtn.style.display = 'none';
                doImportBtn.style.display = 'inline-flex';
            };
        }
        
        // 执行导入按钮
        const doImportBtn = document.getElementById('btn-do-import');
        if (doImportBtn) {
            doImportBtn.onclick = () => {
                try {
                    const importArea = document.getElementById('import-area');
                    const imported = JSON.parse(importArea.value);
                    customData = [...customData, ...imported];
                    StorageManager.setCustom(customData);
                    document.getElementById('station-dialog').open = false;
                    refreshStations();
                } catch (e) {
                    alert('JSON 格式错误');
                }
            };
        }
        
        // 管理模式切换
        const toggleAdminBtn = document.getElementById('toggle-admin');
        if (toggleAdminBtn) {
            toggleAdminBtn.onclick = () => {
                const isAdmin = document.body.classList.toggle('is-admin-mode');
                toggleAdminBtn.icon = isAdmin ? 'check_circle' : 'settings';
                UIManager.setSortableEnabled(isAdmin);
            };
        }
        
        // 播放按钮
        const masterPlayBtn = document.getElementById('master-play-btn');
        if (masterPlayBtn) {
            masterPlayBtn.onclick = (e) => {
                e.preventDefault();
                PlayerManager.togglePlay();
            };
        }
        
        // 滚动粘性播放器
        const stickyWrapper = document.getElementById('player-sticky-wrapper');
        window.addEventListener('scroll', () => {
            if (stickyWrapper) {
                if (window.scrollY > 40) {
                    stickyWrapper.classList.add('is-sticky');
                } else {
                    stickyWrapper.classList.remove('is-sticky');
                }
            }
        });
        
        // 示例对话框链接
        const exampleLink = document.getElementById('view-example-link');
        const exampleDialog = document.getElementById('example-dialog');
        if (exampleLink && exampleDialog) {
            exampleLink.addEventListener('click', (e) => {
                e.preventDefault();
                exampleDialog.open = true;
            });
        }
    }

    // 初始化拖拽排序
    function initSortable() {
        const sortable = UIManager.initSortable((newOrder) => {
            sortOrder = newOrder;
            StorageManager.setSortOrder(sortOrder);
            refreshStations();
        });
        return sortable;
    }

    // 页面加载完成
    document.addEventListener('DOMContentLoaded', () => {
        initStorage();
        PlayerManager.init();
        ThemeManager.init();
        initEventListeners();
        initSortable();
        
        // 等待radioStations加载
        const checkData = setInterval(() => {
            if (typeof radioStations !== 'undefined') {
                refreshStations();
                clearInterval(checkData);
            }
        }, 100);
        setTimeout(() => clearInterval(checkData), 5000);
    });
})();
