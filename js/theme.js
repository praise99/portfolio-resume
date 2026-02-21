/* Theme Toggle — shared across pages (initial theme set in head inline script for no flash) */
(function () {
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
