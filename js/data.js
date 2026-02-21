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
      "Frontend Engineer with over 4 years of experience designing and developing scalable web applications and AI-powered platforms using React, Next.js, and TypeScript. Proven track record of delivering high-performance solutions adopted by millions of users globally, including AI products at AskYourPDF reaching over 6M users. Skilled in building scalable frontend systems, enhancing user engagement, and leading technical initiatives that drive measurable business impact.",
    copyright: "© " + new Date().getFullYear() + " Praise Adeoti",
    tagline:
      "Designed by conversation — built entirely by prompting Claude, zero lines of code written by me.",
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
      desc: "AI-powered tools (chat, summarization, annotation, OCR, co-writing) with real-time collaboration. Contributed to 28% user retention boost and scaling to over 6 million users globally.",
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
      label: "CTO",
      status: "live",
      tags: ["Fintech", "Digital Banking", "Product"],
      desc: "Directed design and rollout of digital banking solutions, modernizing onboarding and loan processing and streamlining operations to enhance security, accessibility, and customer trust.",
      featured: true,
      actions: [{ text: "View Website", href: "https://brightwaymfb.com" }],
    },
    {
      name: "Collectiva",
      label: "Co-Founder & CEO",
      status: "live",
      tags: ["Fintech", "Cooperatives", "Digital Banking", "React"],
      desc: "Digital cooperative banking platform enabling members to access loans, savings, and bulk credit distribution. Leading product strategy, technical development, and growth. In beta: 9 cooperatives, 300+ users, over 500M Naira in transactions, advancing financial inclusion across Nigeria.",
      featured: false,
      actions: [{ text: "View Product", href: "https://usecollectiva.com" }],
    },
  ],

  // ── EXPLORATIONS ─────────────────────────────────────
  EXPLORATIONS: [
    {
      name: "Collectiva",
      meta: "Co-Founder & CEO · Digital Cooperative Banking",
      desc: "Digital cooperative banking for loans, savings, and bulk credit. Beta: 9 cooperatives, 300+ users, 500M+ Naira processed. Leading product, tech, and growth.",
      href: "https://usecollectiva.com",
    },
  ],

  // ── EXPERIENCE ───────────────────────────────────────
  EXPERIENCE: [
    {
      title: "Frontend Engineer",
      company: "AskYourPDF (Remote)",
      desc: "Build and ship AI-powered tools (AskYourPDF, CoWriter, Detect.AI, Legal AI, Simplicity.AI) serving 6M+ users. Real-time collaboration in React.js—28% retention boost. Reduced core document load time by 40%; UI/UX improvements drove 22% increase in mobile usage. React, Next.js, Angular, Tailwind.",
      href: "#",
    },
    {
      title: "Lead Frontend Engineer (Contract)",
      company: "Astraverse",
      desc: "Immersive 3D product experiences with WebGL/Three.js—45% engagement increase. Refactored frontend for scalability, 30% faster feature development. Launched 4 e-commerce campaigns with reusable components; Lighthouse scores 65 → 90+.",
      href: "#",
    },
    {
      title: "Mid-level React Developer",
      company: "Metricks",
      desc: "Co-developed affiliate analytics dashboard for 10,000+ marketers. 15+ reusable UI components; referral tracking accuracy +35%. Code reviews and QA reduced frontend bugs by 40%.",
      href: "#",
    },
    {
      title: "Angular Frontend Engineer (Intern → Team Lead)",
      company: "Encentral Solutions",
      desc: "Promoted to Team Lead in 3 years. Enterprise dashboards with Angular, Angular Material, Semantic UI—100% cross-browser. Delivered for NCC, NDIC, NAQS, BPP. Mentored team; code quality and workflow cuts reduced delivery by 25%, client issues by 40%.",
      href: "#",
    },
  ],

  // ── WRITING ──────────────────────────────────────────
  WRITING: [],

  // ── EDUCATION ────────────────────────────────────────
  EDUCATION: {
    degree: "B.Sc. (Hons) Petroleum Engineering",
    distinction: "Aug 2016 – Jan 2023",
    school: "University of Ibadan, Nigeria",
    desc: "Transitioned into software engineering in 2020 through certifications, bootcamps, and hands-on internships (Google Developer Certificate, CS50, Tech Bootcamps).",
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
