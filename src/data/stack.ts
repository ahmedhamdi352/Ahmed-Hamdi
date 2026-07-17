export type Technology = {
  name: string;
  icon: string;
  tone: string;
};

export type StackCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type Capability = {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
};

export type EngineeringApproach = {
  title: string;
  description: string;
};

export type WorkflowGroup = {
  title: string;
  items: string[];
};

export type StackUseCase = {
  title: string;
  description: string;
  href: string;
  stack: string[];
};

export const featuredTechnologies: Technology[] = [
  { name: "React", icon: "react", tone: "text-cyan-400" },
  { name: "Next.js", icon: "next", tone: "text-white" },
  { name: "TypeScript", icon: "typescript", tone: "text-blue-400" },
  { name: "Node.js", icon: "node", tone: "text-green-400" },
  { name: "Python", icon: "python", tone: "text-blue-300" },
  { name: "PostgreSQL", icon: "postgresql", tone: "text-blue-300" },
  { name: "Docker", icon: "docker", tone: "text-sky-400" },
  { name: "Git", icon: "git", tone: "text-orange-400" },
  { name: "GitLab CI/CD", icon: "cicd", tone: "text-slate-300" },
];

export const capabilities: Capability[] = [
  {
    id: "frontend-architecture",
    title: "Frontend Architecture",
    description:
      "Designing scalable, maintainable, and high-performance frontend systems using React, Next.js, TypeScript, reusable components, and clean UI patterns.",
    icon: "layout",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Product Development",
    description:
      "Building end-to-end web applications, APIs, dashboards, admin panels, and internal tools using modern JavaScript, Node.js, Python, and backend integrations.",
    icon: "layers",
    technologies: ["Node.js", "Express.js", "Python", "REST APIs", "PostgreSQL"],
  },
  {
    id: "ai-integration",
    title: "AI-Enabled Product Integration",
    description:
      "Connecting users and internal teams with AI services, chatbot interfaces, LLM-powered workflows, document processing flows, and automation features.",
    icon: "ai",
    technologies: ["AI Services", "LLM Features", "Chatbot UI", "Automation", "Analytics"],
  },
  {
    id: "enterprise-delivery",
    title: "Enterprise Delivery",
    description:
      "Delivering secure, reliable, and maintainable systems in enterprise and government environments through cross-functional collaboration and production-focused engineering.",
    icon: "shield",
    technologies: ["Secure Integrations", "RBAC", "Docker", "CI/CD", "Code Reviews"],
  },
];

export const stackCategories: StackCategory[] = [
  {
    id: "core",
    title: "Core Stack",
    description: "The technologies I use most often to deliver production systems.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "GitLab CI/CD",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces and architecture for complex, responsive product experiences.",
    items: [
      "Component architecture",
      "Responsive interfaces",
      "Dashboard UIs",
      "Design system patterns",
      "Performance optimization",
      "React Native",
    ],
  },
  {
    id: "backend-integrations",
    title: "Backend & Integrations",
    description: "Application services and secure integrations behind product workflows.",
    items: [
      "API design",
      "Authentication flows",
      "Backend integrations",
      "Node.js services",
      "Python services",
      "Database-driven applications",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Practical AI capabilities connected to real business workflows.",
    items: [
      "AI chatbot integrations",
      "LLM-powered workflows",
      "Prompt engineering",
      "Document processing",
      "Meeting intelligence",
      "Customer insights",
      "Workflow automation",
    ],
  },
  {
    id: "product-areas",
    title: "Product Areas",
    description: "The systems and product environments where I add the most value.",
    items: [
      "Internal platforms",
      "Admin portals",
      "Service hubs",
      "Back-office dashboards",
      "Enterprise applications",
      "Mobile-integrated web experiences",
    ],
  },
  {
    id: "engineering-practices",
    title: "Engineering Practices",
    description: "Team practices that keep delivery clear, maintainable, and production-focused.",
    items: [
      "Code Reviews",
      "Maintainable architecture",
      "Secure integration patterns",
      "CI/CD",
      "Agile delivery",
      "Production support",
    ],
  },
];

export const engineeringApproach: EngineeringApproach[] = [
  {
    title: "Start with the product problem",
    description:
      "I focus first on the user flow, business requirement, and operational context before choosing the technical solution.",
  },
  {
    title: "Design for maintainability",
    description:
      "I prefer reusable components, clear structure, typed interfaces, and simple patterns that other engineers can understand and extend.",
  },
  {
    title: "Integrate securely",
    description:
      "I work carefully around authentication, permissions, API contracts, and secure integration requirements, especially in enterprise environments.",
  },
  {
    title: "Optimize where it matters",
    description:
      "I focus on performance, usability, loading states, responsive behavior, and maintainable frontend architecture.",
  },
  {
    title: "Deliver with ownership",
    description:
      "I collaborate with product, backend, mobile, security, QA, and leadership teams to move features from requirements to production.",
  },
];

export const stackUseCases: StackUseCase[] = [
  {
    title: "AIx Chatbot Platform",
    description: "Multi-channel conversational UI connected to enterprise AI and operational services.",
    href: "/work/aix-chatbot-platform",
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "AI Service Integration", "Dashboards"],
  },
  {
    title: "AI Service Hub",
    description: "Secure internal access patterns for reusable, governed AI services.",
    href: "/work/ai-service-hub",
    stack: ["React", "Next.js", "Node.js", "Python", "Secure Workflows", "Service Integrations"],
  },
  {
    title: "Customer Insights Dashboard",
    description: "Reusable operational views for service monitoring, reporting, and decision support.",
    href: "/work/customer-insights-chatbot-back-office",
    stack: ["React", "TypeScript", "Dashboards", "REST APIs", "Analytics Views"],
  },
];

export const workflowGroups: WorkflowGroup[] = [
  {
    title: "Development",
    items: ["VS Code / Cursor", "Git", "GitLab", "npm / pnpm", "Chrome DevTools"],
  },
  {
    title: "Design Collaboration",
    items: ["Figma", "UI Reviews", "Responsive QA", "Component Handoff"],
  },
  {
    title: "Delivery",
    items: ["Docker", "CI/CD", "Jenkins", "Environment Variables", "Release Checks"],
  },
  {
    title: "Quality",
    items: ["Code Reviews", "Linting", "TypeScript Checks", "Testing Basics", "Production Builds"],
  },
];
