import { type MediaFile } from "@/lib/mediaLoader";

export type Project = {
  id: number;
  title: string;
  company?: string;
  role: string;
  duration: string;
  teamSize: number;
  domain: string;
  description: string;
  images: string[];
  media?: MediaFile[];
  projectKey?: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
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
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1572949645841-094f9bcadef8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600&h=400&fit=crop",
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
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1569163139394-de44337e1b8d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
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
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
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
