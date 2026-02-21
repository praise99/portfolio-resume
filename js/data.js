/*
 * ============================================
 *  SITE DATA — Edit this file to update content
 * ============================================
 *
 *  To add a new project:     Add an entry to PROJECTS array
 *  To add a new writing:     Add an entry to WRITING array
 *  To add experience:        Add an entry to EXPERIENCE array
 *  To add an exploration:    Add an entry to EXPLORATIONS array
 *  To update education:      Edit EDUCATION object
 *  To update connect links:  Edit CONNECT array
 *  To update personal info:  Edit PERSONAL object
 */

var SITE_DATA = {

    PERSONAL: {
        name: "Nkwachi Nwachukwu",
        subtitle: "Software Engineer",
        intro: "I'm Nkwachi — curious by nature, restless by design. I write poems and short essays, play tennis badly but enthusiastically, and go down philosophical rabbit holes I didn't plan on. I play football on weekends with more confidence than skill, and I'm always reading something I probably should have read years ago.",
        copyright: "© 2025 Nkwachi Nwamaghinna",
        tagline: "Designed by conversation — built entirely by prompting Claude, zero lines of code written by me."
    },

    // ── PROJECTS ─────────────────────────────────────────
    // status: "lab" | "live" | "complete"
    // actions: array of { text, href?, type? }
    //   type: "readme" opens modal, "link" opens URL (default)
    // featured: true = shows on home page
    // readme: HTML string for the modal content

    PROJECTS: [
        {
            name: "Go CLI Tools",
            label: "Systems Programming",
            status: "lab",
            tags: ["Go", "CLI", "Concurrency", "Systems"],
            desc: "A collection of CLI applications built in Go — a todo manager and a chat translation proxy. Exploring concurrency patterns, CLI design, and systems-level programming.",
            featured: true,
            actions: [
                { text: "README.md", type: "readme" },
                { text: "View on GitHub", href: "#" }
            ],
            readme: '<h3>Overview</h3><p>A set of command-line tools built as part of learning Go and systems programming. The project focuses on building practical tools while exploring Go\'s concurrency model and standard library.</p><h3>Tools</h3><ul><li><code>todo</code> — A task manager with file-based persistence and priority sorting</li><li><code>translate-proxy</code> — A chat proxy that translates messages between languages in real-time</li></ul><h3>What I Learned</h3><p>Goroutines and channels for concurrent operations, building robust CLI interfaces, file I/O and data serialisation in Go, and writing testable, idiomatic Go code.</p><h3>Running Locally</h3><pre>git clone https://github.com/nkwachi/go-cli-tools.git\ncd go-cli-tools\ngo build -o todo ./cmd/todo\n./todo --help</pre>'
        },
        {
            name: "Video Streaming Application",
            label: "Infrastructure",
            status: "lab",
            tags: ["Go", "Video", "Streaming", "HLS"],
            desc: "A learning project exploring video infrastructure — streaming protocols, transcoding pipelines, and real-time media delivery.",
            featured: true,
            actions: [
                { text: "README.md", type: "readme" },
                { text: "View on GitHub", href: "#" }
            ],
            readme: '<h3>Overview</h3><p>Building a video streaming application from scratch to understand how video infrastructure works under the hood — from upload and transcoding to adaptive bitrate delivery.</p><h3>Goals</h3><ul><li>Understand HLS and DASH streaming protocols</li><li>Build a transcoding pipeline for multiple resolutions</li><li>Implement adaptive bitrate streaming</li><li>Explore CDN delivery patterns</li></ul><h3>Architecture</h3><p>The application uses a Go backend for video ingestion and transcoding, with HLS segment generation for adaptive streaming. The player handles quality switching based on network conditions.</p>'
        },
        {
            name: "SME Architecture Framework",
            label: "Research",
            status: "complete",
            tags: ["Research", "System Design", "Digital Transformation", "Healthcare"],
            desc: "MSc dissertation — a comprehensive system architecture framework for UK SMEs undergoing digital transformation, using UB Healthcare as a case study.",
            featured: true,
            actions: [
                { text: "View Artefact", href: "#" }
            ]
        },
        {
            name: "Collectiva",
            label: "Startup · Co-founder",
            status: "live",
            tags: ["Flutter", "Dart", "Fintech", "Cooperatives"],
            desc: "Cooperative management software serving 5 cooperatives with 200+ users across Nigeria. Tackling financial inclusion through better tooling for community-based finance.",
            featured: false,
            actions: [
                { text: "View Product", href: "https://usecollectiva.com" }
            ]
        }
    ],

    // ── EXPLORATIONS ─────────────────────────────────────
    EXPLORATIONS: [
        {
            name: "Collectiva",
            meta: "Co-founder · Cooperative Management",
            desc: "Co-founded and building cooperative management software serving 5 cooperatives with 200+ users across Nigeria. Tackling financial inclusion through better tooling for community-based finance.",
            href: "https://usecollectiva.com"
        }
    ],

    // ── EXPERIENCE ───────────────────────────────────────
    EXPERIENCE: [
        {
            title: "Software Engineer",
            company: "Nestcoin",
            desc: "Built Virtual Cards and Virtual Accounts features for Onboard Wallet, serving 10,000+ users. Developed core fintech infrastructure in a high-growth startup environment.",
            href: "https://www.onboard.xyz/"
        },
        {
            title: "Software Engineer",
            company: "Spotflow",
            desc: "Developed payment SDKs and infrastructure, enabling seamless payment integration for multiple platforms.",
            href: "https://www.spotflow.one/"
        }
    ],

    // ── WRITING ──────────────────────────────────────────
    WRITING: [
        {
            label: "Poem",
            title: "Free",
            desc: "A short poem on liberation — the kind that starts with realising you were never bound.",
            href: "https://heynkwachi.substack.com/p/free"
        },
        {
            label: "Essay",
            title: "Nkwachi's Paradox of Life",
            desc: "On meaning, purpose, and whether life is pointless — and why the answer depends entirely on you.",
            href: "https://nkwachi.medium.com/nkwachis-paradox-of-life-23a640a34708"
        },
        {
            label: "Essay",
            title: "Poco a Poco",
            desc: "Little by little, bit by bit. On patience, grandmother's folktales, and the tortoise who won the race.",
            href: "https://heynkwachi.substack.com/p/poco-a-poco"
        }
    ],

    // ── EDUCATION ────────────────────────────────────────
    EDUCATION: {
        degree: "MSc Computer Science",
        distinction: "Distinction",
        school: "Birmingham City University",
        desc: 'Dissertation: "A System Architecture Framework for UK SMEs" — comprehensive framework for digital transformation using UB Healthcare as case study.'
    },

    // ── CONNECT ──────────────────────────────────────────
    CONNECT: [
        { text: "Email", href: "mailto:your.email@example.com" },
        { text: "LinkedIn", href: "#" },
        { text: "GitHub", href: "#" },
        { text: "Twitter", href: "#" }
    ]
};
