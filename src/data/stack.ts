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
  { name: "JavaScript", icon: "javascript", tone: "text-yellow-300" },
  { name: "Node.js", icon: "node", tone: "text-green-400" },
  { name: "Python", icon: "python", tone: "text-blue-300" },
  { name: "Tailwind CSS", icon: "tailwind", tone: "text-cyan-300" },
  { name: "PostgreSQL", icon: "postgresql", tone: "text-blue-300" },
  { name: "MongoDB", icon: "mongodb", tone: "text-green-400" },
  { name: "Docker", icon: "docker", tone: "text-sky-400" },
  { name: "Git", icon: "git", tone: "text-orange-400" },
  { name: "AWS", icon: "aws", tone: "text-amber-300" },
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
    id: "frontend",
    title: "Frontend",
    description: "Architecture and interfaces for responsive, maintainable product experiences.",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive UI",
      "Component Architecture",
      "Performance Optimization",
    ],
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    description: "Services and integrations that connect product interfaces to business workflows.",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "API Integration",
      "Authentication Flows",
      "Secure Backend Integration",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Practical AI-enabled product features rather than model research or infrastructure.",
    items: [
      "AI Service Integration",
      "LLM-Powered Features",
      "AI Chatbot Interfaces",
      "Document Processing",
      "Workflow Automation",
      "Analytics Dashboards",
    ],
  },
  {
    id: "data-storage",
    title: "Data & Storage",
    description: "Application data, reporting views, and dependable persistence patterns.",
    items: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Data Modeling Basics",
      "Reporting Views",
    ],
  },
  {
    id: "devops-delivery",
    title: "DevOps & Delivery",
    description: "Practical workflows supporting repeatable builds, releases, and environments.",
    items: [
      "Docker",
      "CI/CD",
      "Git",
      "GitLab",
      "Jenkins",
      "Secure Deployment Workflows",
      "Environment Configuration",
    ],
  },
  {
    id: "engineering-practices",
    title: "Engineering Practices",
    description: "Team practices that keep delivery clear, maintainable, and production-focused.",
    items: [
      "Code Reviews",
      "Unit Testing",
      "Agile/Scrum",
      "Reusable UI Patterns",
      "Cross-Functional Delivery",
      "Technical Mentoring",
      "Production Readiness",
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
