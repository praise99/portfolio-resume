/* Home Page Renderer */
document.addEventListener('DOMContentLoaded', function () {
    var d = SITE_DATA;
    var container = document.getElementById('content');

    // Header
    container.innerHTML = '<header class="fade-in">' +
        '<h1>' + d.PERSONAL.name + '</h1>' +
        '<p class="subtitle">' + d.PERSONAL.subtitle + '</p>' +
        '<p class="personal-intro">' + d.PERSONAL.intro + '</p>' +
    '</header>';

    // Recent Projects (featured only)
    var featured = d.PROJECTS.filter(function (p) { return p.featured; });
    if (featured.length) {
        var html = '<section class="fade-in"><h2>Recent Projects</h2>';
        featured.forEach(function (p) {
            html += '<a href="#" class="block-link">' +
                '<div class="block-label">' + p.label + '</div>' +
                '<div class="block-title">' + p.name + '</div>' +
                '<div class="block-desc">' + p.desc + '</div>' +
            '</a>';
        });
        html += '<a href="projects.html" class="view-more">View all projects</a>';
        html += '</section>';
        container.innerHTML += html;
    }

    // Explorations
    if (d.EXPLORATIONS.length) {
        var html = '<section class="fade-in"><h2>Explorations</h2>';
        d.EXPLORATIONS.forEach(function (e) {
            html += '<a href="' + e.href + '" target="_blank" class="exploration-link">' +
                '<div class="exploration-title">' + e.name + '</div>' +
                '<div class="exploration-meta">' + e.meta + '</div>' +
                '<div class="exploration-desc">' + e.desc + '</div>' +
            '</a>';
        });
        html += '</section>';
        container.innerHTML += html;
    }

    // Recent Experience
    if (d.EXPERIENCE.length) {
        var html = '<section class="fade-in"><h2>Recent Experience</h2>';
        d.EXPERIENCE.forEach(function (e) {
            html += '<a href="' + e.href + '" target="_blank" class="block-link">' +
                '<div class="block-title">' + e.title + '</div>' +
                '<div class="block-company">' + e.company + '</div>' +
                '<div class="block-desc">' + e.desc + '</div>' +
            '</a>';
        });
        html += '</section>';
        container.innerHTML += html;
    }

    // Writing
    if (d.WRITING.length) {
        var html = '<section class="fade-in"><h2>Writing</h2>';
        d.WRITING.forEach(function (w) {
            html += '<a href="' + w.href + '" target="_blank" class="block-link">' +
                '<div class="block-label">' + w.label + '</div>' +
                '<div class="block-title">' + w.title + '</div>' +
                '<div class="block-desc">' + w.desc + '</div>' +
            '</a>';
        });
        html += '</section>';
        container.innerHTML += html;
    }

    // Education
    if (d.EDUCATION) {
        var e = d.EDUCATION;
        container.innerHTML += '<section class="fade-in"><h2>Education</h2>' +
            '<div class="edu-block">' +
                '<div class="edu-title">' + e.degree + ' · <span class="distinction">' + e.distinction + '</span></div>' +
                '<div class="edu-company">' + e.school + '</div>' +
                '<div class="edu-desc">' + e.desc + '</div>' +
            '</div>' +
        '</section>';
    }

    // Connect
    if (d.CONNECT.length) {
        var html = '<section class="fade-in"><h2>Connect</h2><div class="connect-links">';
        d.CONNECT.forEach(function (c) {
            html += '<a href="' + c.href + '">' + c.text + '</a>';
        });
        html += '</div></section>';
        container.innerHTML += html;
    }

    // Footer
    container.innerHTML += '<footer class="fade-in"><div class="footer-row">' +
        '<span class="footer-copyright">' + d.PERSONAL.copyright + '</span>' +
        '<span class="footer-tagline">' + d.PERSONAL.tagline + '</span>' +
    '</div></footer>';
});
