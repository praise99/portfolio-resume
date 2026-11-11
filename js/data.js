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
    name: "Praise Adeoti",
    subtitle: "Frontend Engineer",
    intro:
      "Frontend engineer with 5+ years of experience building production web applications using React, Next.js, and TypeScript across fintech, AI, government, and SaaS. Currently building AI products at AskYourPDF, serving a 6M+ user base across its products. As a side project, I am the founding engineer of Collectiva, a cooperative management platform used by 20+ cooperatives and 1,000+ members that has processed $1.5M+ in transactions. Experienced in frontend architecture, performance optimization, product development, and leading frontend teams. Active contributor to open-source React and TypeScript projects.",
    copyright: "© " + new Date().getFullYear() + " Praise Adeoti",
    tagline: "",
  },

  // ── PROJECTS ─────────────────────────────────────────
  // status: "lab" | "live" | "complete"
  // actions: array of { text, href?, type? }
  //   type: "readme" opens modal, "link" opens URL (default)
  // featured: true = shows on home page
  // readme: HTML string for the modal content

  PROJECTS: [
    {
      name: "AskYourPDF",
      label: "Frontend Engineer",
      status: "live",
      tags: ["AI", "React", "Next.js", "Real-time"],
      desc: "AI-powered tools (chat, summarization, annotation, OCR, co-writing) with real-time collaboration, serving a 6M+ user base. Page loads 40% faster, API wait time 55% lower, 100 Lighthouse scores and user engagement up 25%.",
      featured: true,
      actions: [{ text: "View Product", href: "https://askyourpdf.com" }],
    },
    {
      name: "Detect.AI",
      label: "Frontend",
      status: "live",
      tags: ["AI", "React", "Classification"],
      desc: "AI-powered platform that identifies and analyzes AI-generated content with precision, delivered through an intuitive, user-friendly interface.",
      featured: false,
      actions: [{ text: "View Product", href: "https://detect.ai" }],
    },
    {
      name: "Simplicity.AI",
      label: "Frontend",
      status: "lab",
      tags: ["AI", "eCommerce", "Product Photos"],
      desc: "Transforms product photos into scroll-stopping images that sell. Simplifies workflows and boosts eCommerce productivity with AI-enhanced visuals—no costly photoshoots or complex editing.",
      featured: true,
      actions: [{ text: "View Product", href: "https://simplicity.ai" }],
    },
    {
      name: "Brightway Microfinance Bank",
      label: "Frontend Engineer / CTO",
      status: "live",
      tags: ["Fintech", "Digital Banking", "Product"],
      desc: "Directed design and rollout of digital banking solutions, modernizing onboarding and loan processing and streamlining operations to enhance security, accessibility, and customer trust.",
      featured: true,
      actions: [{ text: "View Website", href: "https://brightwaymfb.com" }],
    },
    {
      name: "Collectiva",
      label: "Founding Engineer · Side project",
      status: "live",
      tags: ["Fintech", "Cooperatives", "React", "Next.js"],
      desc: "Cooperative management platform covering members, contributions, savings, loans, payments and financial reporting, with configurable workflows for each cooperative. Used by 20+ cooperatives and 1,000+ members; $1.5M+ processed. React, Next.js and TypeScript frontend; C# / ASP.NET Core and SQL Server backend.",
      featured: false,
      actions: [{ text: "View Product", href: "https://usecollectiva.com" }],
    },
  ],

  // ── EXPLORATIONS ─────────────────────────────────────
  EXPLORATIONS: [
    {
      name: "Collectiva",
      meta: "Founding Engineer · Side project · 2025 – Present",
      desc: "Cooperative management platform for savings, loans, contributions and payments. 20+ cooperatives, 1,000+ members, $1.5M+ processed.",
      href: "https://usecollectiva.com",
    },
  ],

  // ── EXPERIENCE ───────────────────────────────────────
  EXPERIENCE: [
    {
      title: "Frontend Engineer",
      company: "AskYourPDF / ProtonLabs · Remote · Aug 2023 – Present",
      desc: "Build and ship AI-powered tools (AskYourPDF, CoWriter, Detect.AI, Simplicity.AI) for a 6M+ user base with React, Next.js, TypeScript and Tailwind CSS. Page loads 40% faster and API wait time 55% lower through SSR, lazy loading and rendering optimisations; 100 Lighthouse scores; user engagement up 25%. Built the Simplicity.AI MVP in 4 days.",
      href: "#",
    },
    {
      title: "Frontend Engineer / CTO",
      company: "Brightway Microfinance Bank · Jan 2025 – Apr 2026",
      desc: "Led frontend development for digital banking products (deposits, transfers, bills, airtime, loans) in React, Next.js, TypeScript and Redux, integrated with core banking and payment services, including a multi-step KYC flow. Platform grew to 10,000+ digital accounts.",
      href: "#",
    },
    {
      title: "Lead Frontend Engineer (Contract)",
      company: "Astraverse · Remote · Dec 2022 – Jul 2023",
      desc: "Immersive 3D e-commerce product experiences with WebGL/Three.js, integrated with the backend via GraphQL. User engagement +45%; Lighthouse scores 65 → 90+; feature development 30% faster after a scalability refactor.",
      href: "#",
    },
    {
      title: "Mid-level React Developer",
      company: "Metricks · Lagos · Jan 2022 – Dec 2022",
      desc: "Co-developed an affiliate analytics dashboard used by 10,000+ marketers. 15+ reusable UI components; referral tracking accuracy +35%. Code reviews and QA reduced frontend bugs by 40%.",
      href: "#",
    },
    {
      title: "Frontend Engineer → Team Lead (joined as intern)",
      company: "Encentral Solutions · Jan 2021 – Dec 2024",
      desc: "Led 9 frontend engineers and mentored 16 interns. Shipped 10+ government and enterprise projects, including NCC eServices, BPP CCSP and NDIC Liquidation, with React, AngularJS and TypeScript; built real-time chat with Socket.io.",
      href: "#",
    },
  ],

  // ── WRITING ──────────────────────────────────────────
  WRITING: [],

  // ── EDUCATION ────────────────────────────────────────
  EDUCATION: {
    degree: "BSc Computer Science (First Class)",
    distinction: "2017 – 2022",
    school: "University of Ibadan, Nigeria",
    desc: "Relevant Coursework: Software Analysis and Design, Software Development, Database Design and Development, Web Application Development",
  },

  // ── CONNECT ──────────────────────────────────────────
  CONNECT: [
    {
      text: "Email",
      href: "mailto:praiseadeoti99@gmail.com",
      target: "_blank",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/praise-adeoti-ab6b03190/",
      target: "_blank",
    },
    {
      text: "GitHub",
      href: "https://github.com/praise99",
      target: "_blank",
    },
  ],
};
