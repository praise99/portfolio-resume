# Portfolio Website

A minimal, data-driven portfolio site with light/dark theme support.

## Structure

```
portfolio/
├── index.html          ← Home page
├── projects.html       ← Projects list page
├── css/
│   ├── home.css        ← Home page styles (editorial)
│   └── projects.css    ← Projects page styles (technical)
└── js/
    ├── data.js         ← ✏️  ALL CONTENT LIVES HERE
    ├── theme.js        ← Theme toggle (shared)
    ├── home.js         ← Home page renderer
    └── projects.js     ← Projects page renderer
```

## How to Update Content

**All content is in `js/data.js`.** Open it and edit the arrays/objects.

### Add a new project

Add an entry to the `PROJECTS` array:

```js
{
    name: "My New Project",
    label: "Backend",
    status: "lab",              // "lab" | "live" | "complete"
    tags: ["Go", "Redis"],
    desc: "A short description...",
    featured: true,             // true = shows on home page
    actions: [
        { text: "README.md", type: "readme" },
        { text: "View on GitHub", href: "https://github.com/..." }
    ],
    readme: '<h3>Overview</h3><p>...</p>'  // HTML for the README modal
}
```

### Add new writing

Add an entry to the `WRITING` array:

```js
{
    label: "Essay",
    title: "My New Essay",
    desc: "A short teaser...",
    href: "https://substack.com/..."
}
```

### Add experience

Add to the `EXPERIENCE` array:

```js
{
    title: "Software Engineer",
    company: "Company Name",
    desc: "What I did...",
    href: "https://company.com"
}
```

### Update connect links

Edit the `CONNECT` array in `data.js`.

## Running Locally

Just open `index.html` in a browser. No build step, no dependencies.

Or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

## Deployment

Works on any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages.

Just push the folder — no build step needed.
