// Central configuration for all dynamic data in the portfolio

export const personalInfo = {
  name: "Frensi Muso",
  title: "Software Engineer",
  tagline:
    "A passionate Software Engineer based in Paris, France, crafting digital experiences with modern technologies",
  location: {
    city: "Paris",
    country: "France",
    full: "Paris, France",
  },
  nationality: "Albanian",
  contact: {
    email: "frensimuso2000@gmail.com",
    phone: "+33753024373",
    phoneFormatted: "+33 7 53 02 43 73",
  },
  social: {
    github: "https://github.com/frensimuso",
    linkedin: "www.linkedin.com/in/frensi-muso-bb8aab28b",
    portfolio: "https://frensimuso.com",
  },
  profileImage:
    "https://cdn.sanity.io/images/vh1j19fm/production/abc63890bd0282557148d0497af2ce7a169960a0-1334x1600.jpg",
  availability: {
    status: "available", // "available" | "busy" | "unavailable"
    message: "Currently Available",
    description: "Open to new opportunities and collaborations",
  },
};

export const heroSection = {
  greeting: "👋 Hello, I'm",
  skills: ["React", "Node.js", "TypeScript", "Next.js", "Python", "AWS"],
  cta: {
    primary: {
      text: "View My Work",
      href: "#projects",
    },
    secondary: {
      text: "Get In Touch",
      href: "#contact",
    },
  },
};

export const contactSection = {
  title: "Let's Connect",
  description:
    "I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and development.",
  cards: [
    {
      id: "email",
      title: "Email",
      description: "Drop me a line anytime",
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      color: "from-emerald-600 to-teal-600",
    },
    {
      id: "phone",
      title: "Phone",
      description: "Let's have a conversation",
      value: personalInfo.contact.phoneFormatted,
      href: `tel:${personalInfo.contact.phone}`,
      color: "from-gray-600 to-gray-700",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Connect professionally",
      value: "View Profile",
      href: personalInfo.social.linkedin,
      color: "from-blue-600 to-blue-700",
    },
  ],
};

export const skillsSection = {
  title: "Skills & Expertise",
  description:
    "A comprehensive overview of my technical skills and proficiency levels across different domains.",
  learningSection: {
    title: "Always Learning & Growing",
    description:
      "I'm constantly expanding my skill set and staying up-to-date with the latest technologies. Currently exploring advanced topics in AI/ML, cloud architecture, and emerging web technologies.",
    currentlyLearning: "Currently Learning: Advanced AI Integration",
  },
};

export const projectsSection = {
  title: "My Projects",
  description:
    "A showcase of my work across different domains and technologies.",
  timeline: {
    title: "Professional Timeline",
    description:
      "A chronological journey through my professional projects and client work",
  },
  personal: {
    title: "Personal Projects",
    description:
      "Side projects and experimental work showcasing creativity and technical exploration",
  },
};

export const siteMetadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.tagline,
  url: personalInfo.social.portfolio,
  author: personalInfo.name,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Python",
    "Paris",
    "France",
  ],
};

// Navigation links
export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// Footer data
export const footerData = {
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  quickLinks: navigation,
  social: [
    {
      name: "GitHub",
      href: personalInfo.social.github,
      external: true,
    },
    {
      name: "LinkedIn",
      href: personalInfo.social.linkedin,
      external: true,
    },
  ],
};
