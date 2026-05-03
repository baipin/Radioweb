// 本地存储管理模块
const StorageManager = (function() {
    const KEYS = {
        CUSTOM: 'bp_radios_custom',
        FAVORITES: 'bp_radios_favs',
        DELETED: 'bp_radios_deleted',
        SORT_ORDER: 'bp_radios_sort_order',
        THEME: 'bp_theme_mode',
        LANGUAGE: 'bp_language'
    };

    function get(key, defaultValue = []) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    }

    function set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    return {
        KEYS,
        getCustom: () => get(KEYS.CUSTOM, []),
        setCustom: (data) => set(KEYS.CUSTOM, data),
        getFavorites: () => get(KEYS.FAVORITES, []),
        setFavorites: (data) => set(KEYS.FAVORITES, data),
        getDeleted: () => get(KEYS.DELETED, []),
        setDeleted: (data) => set(KEYS.DELETED, data),
        getSortOrder: () => get(KEYS.SORT_ORDER, []),
        setSortOrder: (data) => set(KEYS.SORT_ORDER, data),
        getTheme: () => localStorage.getItem(KEYS.THEME),
        setTheme: (mode) => localStorage.setItem(KEYS.THEME, mode),
        getLanguage: () => localStorage.getItem(KEYS.LANGUAGE),
        setLanguage: (lang) => localStorage.setItem(KEYS.LANGUAGE, lang)
    };
})();
