// 百品电台 - 多语言支持文件
// 支持语言：简体中文、繁体中文、英语

const translations = {
    'zh-CN': {
        // 导航栏
        'nav_title': '百品电台',
        // 播放器
        'status_ready': '准备就绪',
        'status_playing': '正在直播',
        'status_buffering': '缓冲中...',
        'status_paused': '已暂停',
        'status_please_select': '请选择电台',
        'status_connecting': '连接中...',
        'status_proxy_switching': '切换代理模式中...',
        'status_unavailable': '频道暂时不可用',
        'status_click_to_activate': '点击图标以激活播放',
        // 按钮
        'btn_favorite': '收藏',
        'btn_add_station': '添加电台',
        'btn_batch_import': '批量导入 JSON',
        'btn_save': '保存',
        'btn_delete': '删除此电台',
        'btn_cancel': '取消',
        'btn_start_import': '开始导入',
        // 分类标签
        'tab_all': '全部',
        'tab_favorites': '我的收藏',
        // 对话框
        'dialog_title_add': '添加电台',
        'dialog_title_edit': '编辑电台',
        'dialog_desc': '百品电台会先尝试直连电台，若果失败百品电台将会使用服务器进行反代连接，使您在世界各地都可享受电台服务。',
        'field_name': '名称',
        'field_url': '链接',
        'field_category': '分类',
        'field_logo': 'Logo 地址',
        'field_paste_json': '粘贴 JSON 数组',
        // 提示消息
        'msg_select_station_first': '请先选择一个电台',
        'msg_fields_required': '必填项不能为空',
        'msg_delete_confirm': '确定删除吗？',
        'msg_json_format_error': 'JSON 格式错误',
        'msg_sync_complete': '电台频道已同步',
        // 管理模式
        'admin_mode_enter': '管理模式',
        'admin_mode_exit': '退出编辑',
        // 页脚
        'footer_baipon_entry': '百品入口',
        'footer_donate': '捐赠我们',
        'footer_contact': '联系&反馈',
        'footer_other_projects': '其他项目',
        'footer_copyright': '基于服务器反代加速的世界电台服务',
        'footer_disclaimer': '所有源均来自公开资料搜集，本应用不提供任何源。如有侵权请联系删除。',
        // 语言切换
        'language_switch': '语言',
        'language_simplified': '简体中文',
        'language_traditional': '繁體中文',
        'language_english': 'English'
    },
    'zh-TW': {
        'nav_title': '百品電台',
        'status_ready': '準備就緒',
        'status_playing': '正在直播',
        'status_buffering': '緩衝中...',
        'status_paused': '已暫停',
        'status_please_select': '請選擇電台',
        'status_connecting': '連線中...',
        'status_proxy_switching': '切換代理模式中...',
        'status_unavailable': '頻道暫時不可用',
        'status_click_to_activate': '點擊圖標以啟動播放',
        'btn_favorite': '收藏',
        'btn_add_station': '新增電台',
        'btn_batch_import': '批量匯入 JSON',
        'btn_save': '儲存',
        'btn_delete': '刪除此電台',
        'btn_cancel': '取消',
        'btn_start_import': '開始匯入',
        'tab_all': '全部',
        'tab_favorites': '我的收藏',
        'dialog_title_add': '新增電台',
        'dialog_title_edit': '編輯電台',
        'dialog_desc': '百品電台會先嘗試直連電台，若果失敗百品電台將會使用伺服器進行反代連接，使您在世界各地都可享受電台服務。',
        'field_name': '名稱',
        'field_url': '連結',
        'field_category': '分類',
        'field_logo': 'Logo 地址',
        'field_paste_json': '貼上 JSON 陣列',
        'msg_select_station_first': '請先選擇一個電台',
        'msg_fields_required': '必填項不能為空',
        'msg_delete_confirm': '確定刪除嗎？',
        'msg_json_format_error': 'JSON 格式錯誤',
        'msg_sync_complete': '電台頻道已同步',
        'admin_mode_enter': '編輯模式',
        'admin_mode_exit': '退出編輯',
        'footer_baipon_entry': '百品入口',
        'footer_donate': '捐贈我們',
        'footer_contact': '聯絡&反饋',
        'footer_other_projects': '其他項目',
        'footer_copyright': '基於伺服器反代加速的世界電台服務',
        'footer_disclaimer': '所有源均來自公開資料蒐集，本應用不提供任何源。如有侵權請聯繫刪除。',
        'language_switch': '語言',
        'language_simplified': '简体中文',
        'language_traditional': '繁體中文',
        'language_english': 'English'
    },
    'en': {
        'nav_title': 'Baipin Radio',
        'status_ready': 'Ready',
        'status_playing': 'Live',
        'status_buffering': 'Buffering...',
        'status_paused': 'Paused',
        'status_please_select': 'Please select a station',
        'status_connecting': 'Connecting...',
        'status_proxy_switching': 'Switching to proxy mode...',
        'status_unavailable': 'Station temporarily unavailable',
        'status_click_to_activate': 'Click to activate playback',
        'btn_favorite': 'Favorite',
        'btn_add_station': 'Add Station',
        'btn_batch_import': 'Batch Import JSON',
        'btn_save': 'Save',
        'btn_delete': 'Delete Station',
        'btn_cancel': 'Cancel',
        'btn_start_import': 'Start Import',
        'tab_all': 'All',
        'tab_favorites': 'My Favorites',
        'dialog_title_add': 'Add Station',
        'dialog_title_edit': 'Edit Station',
        'dialog_desc': 'Baipon Radio will try to connect directly first. If it fails, it will use server proxy to let you enjoy radio services anywhere in the world.',
        'field_name': 'Name',
        'field_url': 'URL',
        'field_category': 'Category',
        'field_logo': 'Logo URL',
        'field_paste_json': 'Paste JSON Array',
        'msg_select_station_first': 'Please select a station first',
        'msg_fields_required': 'Required fields cannot be empty',
        'msg_delete_confirm': 'Are you sure you want to delete?',
        'msg_json_format_error': 'JSON format error',
        'msg_sync_complete': 'Radio stations synchronized',
        'admin_mode_enter': 'Edit Mode',
        'admin_mode_exit': 'Exit Edit',
        'footer_baipon_entry': 'Baipon Portal',
        'footer_donate': 'Donate',
        'footer_contact': 'Contact',
        'footer_other_projects': 'Other Projects',
        'footer_copyright': 'World radio service based on server proxy acceleration',
        'footer_disclaimer': 'All sources are collected from public sources. This app does not provide any source. If there is any infringement, please contact us to delete.',
        'language_switch': 'Language',
        'language_simplified': '简体中文',
        'language_traditional': '繁體中文',
        'language_english': 'English'
    }
};

// 当前语言
let currentLanguage = 'zh-CN';

// 获取URL参数中的语言
function getUrlLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang && translations[lang]) {
        return lang;
    }
    return null;
}

// 初始化语言
function initLanguage() {
    // 优先级：URL参数 > localStorage > 默认
    const urlLang = getUrlLanguage();
    if (urlLang) {
        currentLanguage = urlLang;
        localStorage.setItem('bp_language', currentLanguage);
    } else {
        const savedLang = localStorage.getItem('bp_language');
        if (savedLang && translations[savedLang]) {
            currentLanguage = savedLang;
        } else {
            // 根据浏览器语言自动检测
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang === 'zh-TW' || browserLang === 'zh-HK' || browserLang === 'zh-MO') {
                currentLanguage = 'zh-TW';
            } else if (browserLang.startsWith('en')) {
                currentLanguage = 'en';
            } else {
                currentLanguage = 'zh-CN';
            }
        }
    }
    
    // 保存到localStorage
    localStorage.setItem('bp_language', currentLanguage);
    
    // 设置页面语言
    applyLanguage();
    
    return currentLanguage;
}

// 应用语言到页面
function applyLanguage() {
    const t = translations[currentLanguage];
    if (!t) return;
    
    // 设置导航栏标题
    const navTitle = document.querySelector('.nav-content span');
    if (navTitle && navTitle.innerText !== '') {
        // 只更新如果还是默认文字
        if (navTitle.innerText === '百品电台' || navTitle.innerText === '百品電台' || navTitle.innerText === 'Baipon Radio') {
            navTitle.innerText = t.nav_title;
        }
    }
    
    // 设置播放器状态（仅当是默认状态时）
    const currentName = document.getElementById('current-name');
    if (currentName && (currentName.innerText === '准备就绪' || currentName.innerText === '準備就緒' || currentName.innerText === 'Ready')) {
        currentName.innerText = t.status_ready;
    }
    
    const playStatus = document.getElementById('play-status');
    if (playStatus && (playStatus.innerText === '请选择电台' || playStatus.innerText === '請選擇電台' || playStatus.innerText === 'Please select a station')) {
        playStatus.innerText = t.status_please_select;
    }
    
    // 设置对话框文字
    const diagTitle = document.getElementById('diag-title');
    if (diagTitle) {
        window.dialogTitles = {
            add: t.dialog_title_add,
            edit: t.dialog_title_edit
        };
    }
    
    const diagDesc = document.querySelector('#station-dialog span[slot="description"]');
    if (diagDesc) {
        diagDesc.innerText = t.dialog_desc;
    }
    
    // 设置表单标签
    const nameField = document.querySelector('#f-name');
    if (nameField) nameField.setAttribute('label', t.field_name);
    
    const urlField = document.querySelector('#f-url');
    if (urlField) urlField.setAttribute('label', t.field_url);
    
    const catField = document.querySelector('#f-cat');
    if (catField) catField.setAttribute('label', t.field_category);
    
    const logoField = document.querySelector('#f-logo');
    if (logoField) logoField.setAttribute('label', t.field_logo);
    
    const importArea = document.querySelector('#import-area');
    if (importArea) importArea.setAttribute('label', t.field_paste_json);
    
    // 设置按钮文字
    const saveBtn = document.getElementById('btn-save');
    if (saveBtn) saveBtn.innerText = t.btn_save;
    
    const deleteBtn = document.getElementById('btn-delete-station');
    if (deleteBtn) deleteBtn.innerText = t.btn_delete;
    
    const cancelBtn = document.querySelector('#station-dialog mdui-button[slot="action"][variant="text"]');
    if (cancelBtn) cancelBtn.innerText = t.btn_cancel;
    
    const importBtn = document.getElementById('show-import-area');
    if (importBtn) importBtn.innerText = t.btn_batch_import;
    
    const doImportBtn = document.getElementById('btn-do-import');
    if (doImportBtn) doImportBtn.innerText = t.btn_start_import;
    
    // 设置页脚链接文字
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 4) {
        footerLinks[0].innerText = t.footer_baipon_entry;
        footerLinks[1].innerText = t.footer_donate;
        footerLinks[2].innerText = t.footer_contact;
        footerLinks[3].innerText = t.footer_other_projects;
    }
    
    // 设置页脚版权文字
    const copyright = document.querySelector('.footer-copyright');
    if (copyright) {
        copyright.innerHTML = `&copy; 2026 百品电台 · ${t.footer_copyright}<br/>${t.footer_disclaimer}`;
    }
    
    // 设置语言切换按钮的文字
    const langBtn = document.getElementById('language-switch-btn');
    if (langBtn) {
        langBtn.innerText = t.language_switch;
    }
    
    console.log('语言已切换为: ' + currentLanguage);
}

// 切换语言
function switchLanguage(lang) {
    if (translations[lang] && lang !== currentLanguage) {
        currentLanguage = lang;
        localStorage.setItem('bp_language', lang);
        applyLanguage();
        
        // 刷新分类标签和电台列表
        if (typeof refresh === 'function') {
            refresh();
        }
        
        // 通知Android语言已更改
        if (window.AndroidBridge && window.AndroidBridge.onLanguageChanged) {
            window.AndroidBridge.onLanguageChanged(lang);
        }
        
        // 显示提示
        if (typeof mdui !== 'undefined') {
            mdui.snackbar({
                message: translations[lang].language_switch + ': ' + translations[lang]['language_' + lang.replace('-', '_')],
                position: 'right-top',
                timeout: 1500
            });
        }
    }
}

// 创建语言选择器下拉菜单
function createLanguageSelector() {
    const footerLinks = document.querySelector('.footer-links');
    if (!footerLinks) return;
    
    // 检查是否已存在
    if (document.getElementById('language-selector')) return;
    
    const t = translations[currentLanguage];
    
    const langContainer = document.createElement('span');
    langContainer.id = 'language-selector';
    langContainer.style.position = 'relative';
    langContainer.style.display = 'inline-block';
    
    const langBtn = document.createElement('button');
    langBtn.id = 'language-switch-btn';
    langBtn.innerText = t.language_switch;
    langBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--accent-color);
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        margin: 0 10px;
        padding: 0;
        text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    `;
    
    const dropdown = document.createElement('div');
    dropdown.id = 'language-dropdown';
    dropdown.style.cssText = `
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border-radius: 12px;
        border: 1px solid var(--glass-border);
        padding: 8px 0;
        display: none;
        z-index: 1000;
        min-width: 120px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    const languages = [
        { code: 'zh-CN', name: t.language_simplified },
        { code: 'zh-TW', name: t.language_traditional },
        { code: 'en', name: t.language_english }
    ];
    
    languages.forEach(lang => {
        const item = document.createElement('div');
        item.innerText = lang.name;
        item.style.cssText = `
            padding: 8px 16px;
            cursor: pointer;
            font-size: 14px;
            color: inherit;
            white-space: nowrap;
            transition: background 0.2s;
        `;
        item.onmouseenter = () => item.style.background = 'rgba(128,128,128,0.1)';
        item.onmouseleave = () => item.style.background = 'transparent';
        item.onclick = (e) => {
            e.stopPropagation();
            switchLanguage(lang.code);
            dropdown.style.display = 'none';
        };
        dropdown.appendChild(item);
    });
    
    langBtn.onclick = (e) => {
        e.stopPropagation();
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
        
        // 更新下拉菜单文字
        const items = dropdown.querySelectorAll('div');
        const t2 = translations[currentLanguage];
        if (items[0]) items[0].innerText = t2.language_simplified;
        if (items[1]) items[1].innerText = t2.language_traditional;
        if (items[2]) items[2].innerText = t2.language_english;
    };
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!langContainer.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
    
    langContainer.appendChild(langBtn);
    langContainer.appendChild(dropdown);
    
    // 插入到捐赠链接之后
    const donateLink = footerLinks.children[1];
    if (donateLink) {
        footerLinks.insertBefore(langContainer, donateLink.nextSibling);
    } else {
        footerLinks.appendChild(langContainer);
    }
}

// 导出全局函数
window.translations = translations;
window.currentLanguage = currentLanguage;
window.initLanguage = initLanguage;
window.applyLanguage = applyLanguage;
window.switchLanguage = switchLanguage;
window.createLanguageSelector = createLanguageSelector;
window.getLanguage = () => currentLanguage;

// 自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initLanguage();
        createLanguageSelector();
    });
} else {
    initLanguage();
    createLanguageSelector();
}
