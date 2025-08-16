export type MediaFile = {
  src: string;
  type: "image" | "video";
  alt: string;
};

export type Project = {
  id: number;
  title: string;
  company?: string;
  role: string;
  duration: string;
  teamSize: number;
  domain: string;
  description: string;
  media: MediaFile[];
  projectKey?: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  featured: boolean;
  achievements: string[];
  skillsLearned: string[];
  startDate: string;
  status: "active" | "completed";
  endDate: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "LAAX — Ski Resort E-commerce & Bookings",
    company: "LAAX Resort",
    role: "Backend/Architecture Lead",
    duration: "1 year",
    teamSize: 3,
    domain: "Travel, E-commerce, Ticketing",
    description:
      "Built a comprehensive e-commerce platform for ski resort bookings, including ticketing, lessons, and guest services with AI-powered assistance.",

    media: [
      {
        src: "https://cdn.sanity.io/files/vh1j19fm/production/20488257130a0eae4f122564d8c6310acd161f08.mov",
        type: "video",
        alt: "LAAX Ski Resort Platform",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/1679bd42cff208aac730745fc562bc7e5cec731e-3420x1980.png",
        type: "image",
        alt: "LAAX E-commerce Interface",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/fc5876e8e8f70a9d2acf0578f587950db0532fe8-3420x1974.png",
        type: "image",
        alt: "LAAX Booking System",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/4d0b4696b9c4778bd69f5bc36709875695df0f6a-3420x1976.png",
        type: "image",
        alt: "LAAX E-commerce Interface",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/c3bdbd933e0ebbb105b6484b6f4b77e2605e33de-3420x1982.png",
        type: "image",
        alt: "LAAX Booking System",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/bcb6d9a220feceb86044cd189e3294ab29dea626-3420x1978.png",
        type: "image",
        alt: "LAAX E-commerce Interface",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/1cb89ffa95de7a7d05f58845a4acd257b0233676-3420x1982.png",
        type: "image",
        alt: "LAAX E-commerce Interface",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/16e2850a347cf6babb4a2b91309a1ecf622fb926-2272x880.png",
        type: "image",
        alt: "LAAX Booking System",
      },

      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/06440d765d4b7fb8eba1c68a46cc0ac72694baed-3384x1930.png",
        type: "image",
        alt: "LAAX Booking System",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/a99bb6842882d8aa516424ba7d2798712f384da2-1134x552.png",
        type: "image",
        alt: "LAAX Booking System",
      },
    ],
    projectKey: "laax",
    technologies: [
      "Next.js",
      "Vercel (serverless)",
      "MongoDB",
      "Sanity",
      "Auth0/Supabase",
      "Stripe",
      "Saferpay",
      "Apple/Google Wallet",
    ],
    category: "fullstack",
    liveUrl: "https://laax.com",
    featured: true,
    achievements: [
      "From-scratch e-commerce + guest checkout with payment integrations (Stripe, Saferpay)",
      "Guest-care admin: refunds, cancellations, order tracking",
      "AI assistant powered by Sanity (marketing updates → AI agent knowledge)",
      "Booking system for ski school lessons",
      "WAG (internal) + AXESS gates/ticketing integration",
      "Voucher/discount & upselling logic",
    ],
    skillsLearned: [
      "Designing serverless architectures with predictable latency",
      "Payments & refunds edge cases, idempotency, reconciliation",
      "Content as a system: CMS-driven AI (Sanity → agent context)",
      "Complex partner integrations (AXESS) and domain modeling for tickets/passes",
      "Secure auth patterns across modules (Auth0/Supabase)",
      "Ship-to-learn mindset: build admin tools to reduce ops load",
    ],
    startDate: "2024-09-01",
    status: "active",
    endDate: null,
  },
  {
    id: 2,
    title: "Ithake — Climate & Mobility App",
    company: "Ithake",
    role: "Full-stack Contributor",
    duration: "4 months",
    teamSize: 4,
    domain: "Sustainability, Consumer App, Analytics",
    description:
      "Built a comprehensive climate and mobility tracking application helping users monitor their carbon footprint through quiz flows and smart suggestions.",
    projectKey: "ithake",

    media: [
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/a743e49fac333bb9289fef03bb394a6837f34e57-3416x1976.png",
        type: "image",
        alt: "Ithake Climate App Dashboard",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/bf71ccaffa249ed26ea66b48c3c4b9dc4f1c7e27-1080x626.png",
        type: "image",
        alt: "Ithake Mobility Tracking",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/8625235118e0f3aa18142193accfba064b171307-1190x662.png",
        type: "image",
        alt: "Ithake Carbon Footprint",
      },
    ],
    technologies: [
      "React/Vite",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Clever Cloud",
      "Mixpanel",
      "Sentry",
      "React Native",
      "JWT",
    ],
    category: "fullstack",
    liveUrl: "https://ithake.com",
    featured: true,
    achievements: [
      "JWT auth across web + React Native platforms",
      "CO₂ quiz flow on mobile (data model + UX)",
      "Product analytics (Mixpanel) and error tracing (Sentry)",
      "Complex UI/UX interactions; event schema for AI suggestions",
    ],
    skillsLearned: [
      "Cross-platform auth, token lifecycles, refresh strategies",
      "Defining analytics events for measurable experiments",
      "Mobile/web design system consistency",
      "Observability in product loops (trace → fix → re-ship)",
    ],
    startDate: "2024-02-05",
    status: "completed",
    endDate: "2024-08-05",
  },
  {
    id: 4,
    title: "Janah — Impact Investment Dashboard",
    company: "Janah",
    role: "Lead (Product + Tech + Delivery)",
    duration: "1 month",
    teamSize: 1,
    domain: "Climate/Impact, B2B Dashboards",
    description:
      "Built a comprehensive impact investment dashboard to visualize climate and social impact metrics from field data collection for stakeholders and fund managers.",
    projectKey: "janah",

    media: [
      {
        src: "https://cdn.sanity.io/files/vh1j19fm/production/90f3eb3875975c162198c35f35fd2871fb3bdc22.mov",
        type: "video",
        alt: "Janah Platform Demo",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/eb7d5026a83da4a09a0e221b03768e0015988062-3420x1890.png",
        type: "image",
        alt: "Janah admin 1",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/5d538e66b1a9a8a68f8833c3d697ff17cc71a4db-3420x1890.png",
        type: "image",
        alt: "Janah admin 2",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/08b67a89053ff205327b5545f7e25234dc21e61a-3420x1900.png",
        type: "image",
        alt: "Janah admin 3",
      },
    ],
    technologies: [
      "Express.js",
      "MongoDB",
      "Vite",
      "Charts/Graphs",
      "Node.js",
      "JavaScript",
      "Data Visualization",
    ],
    category: "data",
    liveUrl: "https://www.janahcycle.org/",
    featured: false,
    achievements: [
      "Stakeholder dashboard: show impact metrics from field data",
      "Admin panel: manage actions, validate incoming submissions",
      "Data pipelines from field collection → aggregate → visualize",
    ],
    skillsLearned: [
      "End-to-end ownership: scope, delivery, stakeholder comms",
      "Data modeling for impact KPIs; avoiding vanity metrics",
      "Building explainable charts (source → transform → result)",
      "Pragmatic scoping under funding constraints",
    ],
    startDate: "2024-07-01",
    status: "completed",
    endDate: "2024-07-31",
  },
  {
    id: 5,
    title: "iM Global Partner — Data Aggregation & Scoring",
    projectKey: "im-globals",
    company: "iM Global Partner",
    role: "Full-stack + ML Glue",
    duration: "1-2 weeks",
    teamSize: 2,
    domain: "Asset Management, Data Ops",
    description:
      "Built a data aggregation and ML scoring system for asset management, combining headless scraping, AI classification, and data-dense dashboards for financial analysis.",

    media: [
      {
        src: "https://cdn.sanity.io/files/vh1j19fm/production/2ae2ce7b32a5e88d853e39b3d227b0998f606ad5.mov",
        type: "video",
        alt: "iM Global Partner Data Dashboard",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/86a36799cf5e0409361f96580c06b454f051617e-3420x1896.png",
        type: "image",
        alt: "iM Global Partner Analytics",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/fa9f2e24a0ceca5ef4965c9acfd0bec6ed842ef6-3420x1896.png",
        type: "image",
        alt: "iM Global Partner ML Scoring",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/3299110c196726291b21e8864e230bd6ad280411-3420x1896.png",
        type: "image",
        alt: "iM Global Partner Analytics",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/babcbad3192b35c58b8ba250811ea0d6bcaaa6b1-3420x1896.png",
        type: "image",
        alt: "iM Global Partner ML Scoring",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/02d449c8002e4ddc3ec1f5632d235c1d45293693-3420x1894.png",
        type: "image",
        alt: "iM Global Partner ML Scoring",
      },
    ],
    technologies: [
      "Puppeteer",
      "Python",
      "Flask",
      "React",
      "JavaScript",
      "Web Scraping",
      "Machine Learning",
      "Data Processing",
    ],
    category: "data",
    liveUrl: "https://www.imgp.com",
    featured: false,
    achievements: [
      "Headless scraping from multiple portals; normalization",
      "AI/ML scoring service (Flask) to group/classify items",
      "Data-dense UI with tables, sorting, filters per client needs",
    ],
    skillsLearned: [
      "Resilient scraping (selectors, captchas, throttling)",
      "Data quality checks, dedupe, schema mapping",
      "Service boundaries: JS frontend ↔ Python scoring API",
      "Handling PII and secure ops for financial contexts",
    ],
    startDate: "2024-06-01",
    status: "completed",
    endDate: "2024-08-05",
  },
  {
    id: 6,
    title: "Muse (LVMH pilot) — Vision App for Museums/Luxury",
    projectKey: "muse",
    company: "LVMH",
    role: "Mobile + CV Prototype",
    duration: "1 month",
    teamSize: 2,
    domain: "Culture/Retail, Computer Vision",
    description:
      "Built a React Native app with computer vision capabilities for recognizing artworks and objects in museums, providing contextual information for visitors.",

    media: [
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/3b82f71b02a5dd2075dcd44682ad2629f26e6b80-1338x684.png",
        type: "image",
        alt: "Muse Museum App Interface",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/9a3eeb041e875c389c66bf6f93931f5dc5e8b31e-1346x716.png",
        type: "image",
        alt: "Muse Object Recognition",
      },
    ],
    technologies: [
      "Expo",
      "React Native",
      "TestFlight",
      "Azure Custom Vision",
      "Computer Vision",
      "Mobile Development",
      "iOS",
    ],
    category: "mobile",
    featured: false,
    achievements: [
      "RN app that recognizes objects/artworks and shows context",
      "Dataset curation & preprocessing for Custom Vision",
      "Pilot implementation for Jardin du Luxembourg sculptures",
    ],
    skillsLearned: [
      "Collecting training data and handling edge cases",
      "Mobile camera pipeline & on-device UX for recognition",
      "Rapid TestFlight loops for stakeholder demos",
    ],
    startDate: "2024-03-03",
    status: "completed",
    endDate: "2024-04-01",
  },
  {
    id: 7,
    title: "Lingocircle — Kids' Language Learning",
    projectKey: "lingo-circle",
    company: "Lingocircle",
    role: "Full-stack Developer",
    duration: "1 week",
    teamSize: 1,
    domain: "EdTech",
    description:
      "Implemented authentication flows and transactional email system for a kids' language learning platform with age-appropriate UX design.",

    media: [
      {
        src: "https://cdn.sanity.io/files/vh1j19fm/production/b93cbcb634c57339fe0cd81a28dd83b1ad0d3fec.mov",
        type: "video",
        alt: "Lingocircle Kids Learning Platform",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/37b5d322844fd49f09123e336d412be5c540dea1-3404x1890.png",
        type: "image",
        alt: "Lingocircle Interactive Lessons",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/d479256b5fca59a42d556dc4c980fd5d3d4f8bf3-3420x1898.png",
        type: "image",
        alt: "Lingocircle Language Activities",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/50b9569cee6bcccba3855f2bb400f12afc080d4e-1694x1140.png",
        type: "image",
        alt: "Lingocircle Interactive Lessons",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/0d13cd41a04c0d29b3021c31341625fee0723232-3420x1406.png",
        type: "image",
        alt: "Lingocircle Language Activities",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/c35e5307e1faa0ddc5e673adadae1bf6b448babf-3420x1318.png",
        type: "image",
        alt: "Lingocircle Language Activities",
      },
    ],
    technologies: [
      "JWT",
      "Authentication",
      "Brevo",
      "Email API",
      "JavaScript",
      "Node.js",
    ],
    category: "fullstack",
    liveUrl: "https://lingocircle.com/",
    featured: false,
    achievements: ["Auth flows and transactional emails (welcome, reset)"],
    skillsLearned: [
      "Secure JWT patterns, password flows",
      "Age-appropriate copy and friction-light onboarding",
    ],
    startDate: "2024-05-05",
    status: "completed",
    endDate: "2024-05-12",
  },
  {
    id: 8,
    title: "Finotor — Invoice OCR & UI Consistency",
    company: "Finotor",
    role: "Frontend + Integrations",
    duration: "2 days",
    teamSize: 1,
    domain: "Fintech/Ops",
    description:
      "Built OCR invoice processing system with structured data extraction and implemented reusable UI components for consistent data visualization.",

    media: [
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/a29efa8514a9daae0d67f00b0a56a5a61bff46b6-2170x1316.png",
        type: "image",
        alt: "Finotor Invoice Processing",
      },
    ],
    technologies: [
      "Azure OCR",
      "React",
      "Vite",
      "OCR Processing",
      "UI Components",
      "Design System",
    ],
    category: "fintech",
    liveUrl: "https://finotor.com/",
    featured: false,
    achievements: [
      "OCR extraction from invoices to structured fields",
      "Reusable table component for consistent data views",
    ],
    skillsLearned: [
      "Mapping OCR output to domain models; confidence handling",
      "Design tokens and component reuse for speed",
    ],
    startDate: "2024-03-10",
    status: "completed",
    endDate: "2024-03-12",
  },
  {
    id: 9,
    title: "Finense — Senior-Friendly Fintech UI",
    projectKey: "finense",
    company: "Finense",
    role: "Frontend Developer",
    duration: "2 weeks",
    teamSize: 1,
    domain: "Fintech, Accessibility",
    description:
      "Designed and built accessible fintech onboarding interface specifically optimized for older users with focus on readability and ease of use.",

    media: [
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/2ab229fb7b974bfde815ec14ca48dc4950960b98-3420x1822.png",
        type: "image",
        alt: "Finense Senior-Friendly Interface",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Address Autocomplete",
      "Accessibility",
      "Form Validation",
      "UI/UX",
    ],
    category: "fintech",
    liveUrl: "https://www.finense.fr/",
    featured: false,
    achievements: ["Onboarding UI with custom inputs and address autocomplete"],
    skillsLearned: [
      "Accessibility & readable UI for older users",
      "Form validation and error recovery patterns",
    ],
    startDate: "2024-03-10",
    status: "completed",
    endDate: "2024-03-12",
  },
  {
    id: 10,
    title: "MedicoNET — AI Copilot for Doctors & Patient App",
    projectKey: "mediconet",
    company: "Personal Project",
    role: "Solo (Product + Tech)",
    duration: "Ongoing",
    teamSize: 1,
    domain: "Healthtech, Clinical Assist",
    description:
      "Building an AI-powered healthcare platform with doctor copilot for patient summaries and mobile app for patient data management with QR-based consent flows.",

    media: [
      {
        src: "https://cdn.sanity.io/files/vh1j19fm/production/4e2a0a92ff723dda194d3831ad1fb59ec2c46acc.mp4",
        type: "video",
        alt: "MedicoNET AI Copilot Interface",
      },
    ],
    technologies: [
      "Expo",
      "React Native",
      "Next.js",
      "Express.js",
      "MongoDB",
      "AI/ML",
      "Healthcare APIs",
      "QR Codes",
    ],
    category: "personal",
    featured: true,
    achievements: [
      "Doctor copilot concept: AI chat that surfaces concise patient summaries from prior notes/history",
      "Patient mobile app: view health data; QR-based consent flow to grant doctors scoped access",
      "Data model for patients, encounters, notes; API for read/write with audit-friendly events",
      "CMS-less content approach for real-time updates to patient-facing copy and flows",
    ],
    skillsLearned: [
      "Domain modeling for medical records and visit timelines",
      "Consent & access design (QR link tokens, TTL, revocation patterns)",
      "Prompt/response guardrails for clinical summarization (hallucination risk mitigation)",
      "Building a doctor<>patient handoff UX that reduces context-switching",
    ],
    startDate: "2025-03-01",
    status: "active",
    endDate: null,
  },
  {
    id: 11,
    title: "AI Assistant — Calendar · Tasks · Notes · Finance",
    projectKey: "ai-assistant",
    company: "Personal Project",
    role: "Solo Builder",
    duration: "Ongoing",
    teamSize: 1,
    domain: "Productivity, Personal Finance",
    description:
      "Developing a comprehensive personal productivity AI assistant with calendar sync, task management, note-taking, and finance tracking across multiple providers.",

    media: [
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/c9768c0f3e2dd0df8bf0779e486355730f81c6d4-3420x1640.png",
        type: "image",
        alt: "AI Assistant Dashboard",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/45f236e82cbd36d069ec5e3e378f0525ce45ef48-3420x1884.png",
        type: "image",
        alt: "AI Assistant Calendar Integration",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/45b62e974f0400702cb61dfe15259efb59b9043c-3420x1896.png",
        type: "image",
        alt: "AI Assistant Analytics",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/4399cf9667fdbe7b580402d8b81410e6e52ea3d7-3420x1890.png",
        type: "image",
        alt: "AI Assistant Dashboard",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/8c07c6b66d7681238d45dd36961e444b8caa2673-3420x1900.png",
        type: "image",
        alt: "AI Assistant Calendar Integration",
      },
      {
        src: "https://cdn.sanity.io/images/vh1j19fm/production/c13d2c5568229a5e881c0c04755fc15d9775f062-3420x1892.png",
        type: "image",
        alt: "AI Assistant Analytics",
      },
    ],
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Nylas API",
      "Google/Outlook/Apple",
      "OAuth",
      "Webhooks",
      "Background Jobs",
    ],
    category: "personal",
    featured: true,
    achievements: [
      "Calendar sync via Nylas (OAuth + webhooks) with two-way updates",
      "Tasks & notes models (recurrence, tags, quick-capture)",
      "Finance module scaffold for budgeting/transactions; categories + monthly envelopes",
      "Unified account layer across providers; background jobs for idempotent sync",
    ],
    skillsLearned: [
      "Multi-provider OAuth and webhook reliability (retries, dedupe keys)",
      "Source-of-truth strategy for cross-app sync; eventual consistency trade-offs",
      "Information architecture for self-management (linking events↔tasks↔notes↔spend)",
    ],
    startDate: "2025-05-05",
    status: "active",
    endDate: null,
  },
];

// Helper functions to filter projects
export const getPersonalProjects = () =>
  projects.filter((project) => project.category === "personal");

export const getProfessionalProjects = () =>
  projects.filter((project) => project.category !== "personal");

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: string) =>
  projects.filter((project) => project.category === category);

export const getActiveProjects = () =>
  projects.filter((project) => project.status === "active");

export const getCompletedProjects = () =>
  projects.filter((project) => project.status === "completed");

// Sort projects by date (most recent first)
export const sortProjectsByDate = (projectList: Project[]) =>
  [...projectList].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
