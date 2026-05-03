// 主题管理模块
const ThemeManager = (function() {
    let currentTheme = 'auto';

    function applyDarkMode(isDark) {
        const body = document.body;
        const themeToggleBtn = document.getElementById('theme-toggle');
        
        if (isDark) {
            body.classList.add('mdui-theme-dark');
            if (themeToggleBtn) themeToggleBtn.icon = 'light_mode';
        } else {
            body.classList.remove('mdui-theme-dark');
            if (themeToggleBtn) themeToggleBtn.icon = 'dark_mode';
        }
    }

    function init() {
        const savedTheme = StorageManager.getTheme();
        
        if (savedTheme === 'dark') {
            applyDarkMode(true);
        } else if (savedTheme === 'light') {
            applyDarkMode(false);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyDarkMode(prefersDark);
        }

        // 监听系统主题变化
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (StorageManager.getTheme() === null) {
                applyDarkMode(e.matches);
            }
        });

        // 绑定切换按钮
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            themeBtn.onclick = () => {
                const isDark = !document.body.classList.contains('mdui-theme-dark');
                applyDarkMode(isDark);
                StorageManager.setTheme(isDark ? 'dark' : 'light');
            };
        }
    }

    function syncDialogTheme() {
        const isDark = document.body.classList.contains('mdui-theme-dark');
        const dialogs = ['station-dialog', 'example-dialog'];
        
        dialogs.forEach(id => {
            const dialog = document.getElementById(id);
            if (dialog) {
                if (isDark) {
                    dialog.setAttribute('theme', 'dark');
                } else {
                    dialog.removeAttribute('theme');
                }
            }
        });
    }

    return { init, syncDialogTheme, applyDarkMode };
})();
