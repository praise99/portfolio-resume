/* Projects Page Renderer */
document.addEventListener('DOMContentLoaded', function () {
    var d = SITE_DATA;
    var container = document.getElementById('content');

    // Back link + header
    container.innerHTML = '<a href="index.html" class="back-link">Back to home</a>' +
        '<header class="fade-in">' +
            '<h1>~/projects</h1>' +
            '<p class="page-desc">Things I\'m building, breaking, and learning from. A mix of production work, research, and explorations.</p>' +
        '</header>';

    // Project cards
    d.PROJECTS.forEach(function (p, i) {
        var badgeClass = 'badge ' + p.status;
        var badgeContent = p.status === 'live'
            ? '<span class="pulse-dot"></span>Live'
            : p.status === 'complete' ? 'Complete' : 'Lab';

        var tagsHtml = '<div class="card-tags">';
        p.tags.forEach(function (t) {
            tagsHtml += '<span class="tag">' + t + '</span>';
        });
        tagsHtml += '</div>';

        var actionsHtml = '<div class="card-actions">';
        p.actions.forEach(function (a, ai) {
            if (ai > 0) actionsHtml += '<div class="sep"></div>';
            if (a.type === 'readme') {
                actionsHtml += '<button class="action-link" data-readme="' + i + '">' + a.text + '</button>';
            } else {
                var target = a.href && a.href !== '#' ? ' target="_blank"' : '';
                actionsHtml += '<a href="' + (a.href || '#') + '" class="action-link"' + target + '>' + a.text + '</a>';
            }
        });
        actionsHtml += '</div>';

        container.innerHTML += '<div class="project-card fade-in">' +
            '<div class="card-header">' +
                '<div class="card-info">' +
                    '<div class="card-label">' + p.label + '</div>' +
                    '<div class="card-name">' + p.name + '</div>' +
                    '<div class="card-desc">' + p.desc + '</div>' +
                '</div>' +
                '<span class="' + badgeClass + '">' + badgeContent + '</span>' +
            '</div>' +
            tagsHtml +
            actionsHtml +
        '</div>';
    });

    // Footer
    container.innerHTML += '<footer class="fade-in" style="margin-top:40px;padding-top:24px;border-top:1px solid var(--border);">' +
        '<div class="footer-row">' +
            '<span class="footer-copyright">' + d.PERSONAL.copyright + '</span>' +
            '<span class="footer-tagline">' + d.PERSONAL.tagline + '</span>' +
        '</div></footer>';

    // README modal handlers
    document.querySelectorAll('[data-readme]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var idx = parseInt(this.getAttribute('data-readme'));
            var project = d.PROJECTS[idx];
            if (project && project.readme) {
                document.getElementById('modal-title').textContent = project.name.toLowerCase().replace(/\s+/g, '-') + ' / README.md';
                document.getElementById('modal-content').innerHTML = project.readme;
                var modal = document.getElementById('modal');
                modal.style.display = 'flex';
                requestAnimationFrame(function () { modal.classList.add('visible'); });
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Modal close
    document.getElementById('modal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    function closeModal() {
        var modal = document.getElementById('modal');
        modal.classList.remove('visible');
        setTimeout(function () { modal.style.display = 'none'; }, 300);
        document.body.style.overflow = '';
    }
});
