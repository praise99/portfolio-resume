/* Theme Toggle — shared across pages */
(function () {
    try {
        var saved = localStorage.getItem('theme-portfolio');
        if (saved) {
            document.documentElement.setAttribute('data-theme', saved);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    } catch (e) {}

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle-btn');
        if (btn) {
            btn.addEventListener('click', function () {
                var html = document.documentElement;
                var current = html.getAttribute('data-theme');
                var next = current === 'light' ? 'dark' : 'light';
                html.setAttribute('data-theme', next);
                try { localStorage.setItem('theme-portfolio', next); } catch (e) {}
            });
        }
    });
})();
