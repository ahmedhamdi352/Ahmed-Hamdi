export type AboutCard = {
  title: string;
  description: string;
};

export const aboutPills = [
  "Dubai, UAE",
  "6+ Years Experience",
  "Enterprise & AI Platforms",
  "Frontend Architecture",
] as const;

export const engineeringFocus: AboutCard[] = [
  {
    title: "Product-Oriented Engineering",
    description:
      "I focus on building software that solves real operational problems, not just shipping screens.",
  },
  {
    title: "Scalable Frontend Systems",
    description:
      "I design maintainable React and Next.js applications with reusable patterns, clean architecture, and strong user experience.",
  },
  {
    title: "Enterprise Delivery",
    description:
      "I work comfortably with security, backend, product, mobile, QA, and leadership teams to deliver production-ready systems.",
  },
];

export const leadershipHighlights: AboutCard[] = [
  {
    title: "Architecture & Standards",
    description:
      "Contribute to frontend architecture decisions, reusable UI patterns, maintainable code structures, and delivery standards across product features.",
  },
  {
    title: "Cross-Functional Delivery",
    description:
      "Work closely with product, backend, mobile, security, QA, and business teams to move complex requirements from idea to production.",
  },
  {
    title: "Technical Mentoring",
    description:
      "Support developers through code reviews, implementation guidance, debugging, and maintainable engineering practices.",
  },
  {
    title: "AI-Enabled Product Delivery",
    description:
      "Build interfaces and workflows that connect users, internal teams, and backend AI services through secure and practical product experiences.",
  },
];

export const workingPrinciples = [
  "Build for maintainability",
  "Keep user experience clear",
  "Collaborate early with backend and security",
  "Prefer simple scalable architecture over unnecessary complexity",
  "Deliver production-ready features with ownership",
] as const;
