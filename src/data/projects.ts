export type ProjectCategory =
  | "AI Platform"
  | "Enterprise Platform"
  | "Dashboard"
  | "Mobile/Web"
  | "Workflow System";

export type ProjectPreview =
  | "chatbot"
  | "services"
  | "insights"
  | "mobile"
  | "workflow"
  | "operations";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  role: string;
  company?: string;
  year?: string;
  featured: boolean;
  image?: string;
  tech: string[];
  problem: string;
  solution: string;
  responsibilities: string[];
  impact: string[];
  highlights: string[];
  preview: ProjectPreview;
};

export const projects: Project[] = [
  {
    slug: "aix-chatbot-platform",
    title: "AIx Chatbot Platform",
    subtitle: "Conversational AI across web and mobile channels",
    category: "AI Platform",
    description:
      "Enterprise chatbot platform connecting users with AI services and governed operational workflows.",
    longDescription:
      "A production-focused conversational platform designed to provide consistent AI-assisted services across public web and mobile experiences while connecting operational teams to the supporting workflows.",
    role: "Senior Full Stack Engineer",
    company: "Dubai Police — Department of AI",
    year: "2025 — Present",
    featured: true,
    tech: ["React", "TypeScript", "Node.js", "REST APIs", "AI Integration"],
    problem:
      "Delivering conversational services across multiple channels required a consistent interface, dependable service integration, and visibility for the teams responsible for operating the platform.",
    solution:
      "Built reusable conversational UI patterns, integrated backend AI services, and connected the customer experience to operational dashboards and governed support workflows.",
    responsibilities: [
      "Designed reusable conversational components for web and mobile experiences.",
      "Integrated frontend flows with backend AI and enterprise service APIs.",
      "Connected chatbot journeys to operational and reporting workflows.",
      "Supported production readiness, maintainability, and cross-team delivery.",
    ],
    impact: [
      "Created a consistent foundation for AI-assisted experiences across channels.",
      "Improved operational visibility around chatbot services and user journeys.",
      "Enabled the platform to evolve through reusable, maintainable UI patterns.",
    ],
    highlights: [
      "Multi-channel conversational experience",
      "Enterprise AI service integration",
      "Production-oriented delivery",
    ],
    preview: "chatbot",
  },
  {
    slug: "ai-service-hub",
    title: "AI Service Hub",
    subtitle: "Secure access to reusable internal AI capabilities",
    category: "Enterprise Platform",
    description:
      "Secure on-premises platform enabling internal teams to discover and access governed AI services.",
    longDescription:
      "An internal platform that organizes reusable AI capabilities into a clear, role-aware experience, helping teams understand available services and use them through secure integration patterns.",
    role: "Senior Full Stack Engineer",
    company: "Dubai Police — Department of AI",
    year: "2025 — Present",
    featured: true,
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "RBAC"],
    problem:
      "Internal AI capabilities were difficult to discover and needed a consistent, secure access model suitable for an on-premises enterprise environment.",
    solution:
      "Created a service-hub experience with governed workflows, reusable access patterns, role-aware presentation, and secure connections to internal services.",
    responsibilities: [
      "Shaped the frontend architecture and reusable service catalogue patterns.",
      "Implemented role-aware experiences and governed request workflows.",
      "Integrated secure internal APIs and service metadata.",
      "Collaborated on maintainable platform conventions for future services.",
    ],
    impact: [
      "Made internal AI services easier to discover and understand.",
      "Established repeatable patterns for adding and governing new capabilities.",
      "Supported secure adoption without fragmenting the user experience.",
    ],
    highlights: [
      "On-premises deployment",
      "Role-aware service access",
      "Reusable internal platform patterns",
    ],
    preview: "services",
  },
  {
    slug: "customer-insights-chatbot-back-office",
    title: "Customer Insights & Chatbot Back Office",
    subtitle: "Operational visibility for AI services and customer journeys",
    category: "Dashboard",
    description:
      "Operational dashboards for chatbot analytics, customer insights, service monitoring, and reporting.",
    longDescription:
      "A suite of reusable dashboard views that turns service and interaction data into clear operational context for teams monitoring chatbot performance and customer journeys.",
    role: "Senior Full Stack Engineer",
    company: "Dubai Police — Department of AI",
    year: "2025 — Present",
    featured: true,
    tech: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "Data Visualization"],
    problem:
      "Operational teams needed a coherent way to monitor services, review customer interaction signals, and prepare reports without navigating disconnected data views.",
    solution:
      "Delivered a modular back-office interface with reusable data views, clear states, API-driven reporting, and consistent patterns for monitoring and analysis.",
    responsibilities: [
      "Designed reusable dashboard layouts, filters, tables, and insight views.",
      "Integrated multiple APIs into dependable operational interfaces.",
      "Handled loading, empty, error, and permission-aware states.",
      "Improved consistency across reporting and service-monitoring workflows.",
    ],
    impact: [
      "Centralized operational context for chatbot and customer-service teams.",
      "Made recurring monitoring and reporting workflows clearer.",
      "Reduced UI fragmentation through shared data-view patterns.",
    ],
    highlights: [
      "Reusable analytics views",
      "Operational decision support",
      "Service and journey monitoring",
    ],
    preview: "insights",
  },
  {
    slug: "misk-city-digital-products",
    title: "Misk City Digital Products",
    subtitle: "Connected city services across mobile and web",
    category: "Mobile/Web",
    description:
      "React Native mobile and React web products for city services, events, and community features.",
    longDescription:
      "Public-facing digital products designed to help residents and visitors access city information, discover events, and engage with community services through consistent mobile and web experiences.",
    role: "Senior Frontend Developer",
    company: "Apps Wave",
    year: "2024 — 2025",
    featured: false,
    tech: ["React Native", "React", "TypeScript", "REST APIs", "Design Systems"],
    problem:
      "City services and community experiences needed to feel coherent across mobile and web while supporting different device behaviours and evolving API integrations.",
    solution:
      "Built shared interface patterns, reliable API-connected journeys, and platform-appropriate experiences while maintaining visual and interaction consistency.",
    responsibilities: [
      "Delivered React Native features and responsive React web experiences.",
      "Created reusable UI patterns shared across product areas.",
      "Integrated service, content, event, and community APIs.",
      "Worked closely with design and backend teams on delivery quality.",
    ],
    impact: [
      "Supported a consistent public-facing experience across platforms.",
      "Improved maintainability through reusable interface patterns.",
      "Enabled new service and community journeys to be delivered efficiently.",
    ],
    highlights: [
      "Mobile and web consistency",
      "Public-facing service UX",
      "Reusable cross-product patterns",
    ],
    preview: "mobile",
  },
  {
    slug: "pif-cobuilderops",
    title: "PIF CoBuilderOps",
    subtitle: "Clearer project delivery and collaboration workflows",
    category: "Workflow System",
    description:
      "Project management platform for task tracking, progress visibility, resources, and collaboration.",
    longDescription:
      "A workflow-focused platform that helps delivery teams coordinate project activity, understand progress, allocate resources, and collaborate through a clear operational interface.",
    role: "Senior Frontend Developer",
    company: "Apps Wave",
    year: "2024 — 2025",
    featured: false,
    tech: ["React", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    problem:
      "Complex project information and collaboration workflows needed to remain understandable and responsive as task, team, and resource data grew.",
    solution:
      "Developed focused workflow views, performant data interactions, and reusable frontend patterns that kept core project activity clear and maintainable.",
    responsibilities: [
      "Built task, progress, resource, and collaboration interfaces.",
      "Improved rendering and interaction patterns for data-heavy screens.",
      "Standardized common workflow components and UI states.",
      "Partnered with product teams to simplify complex user journeys.",
    ],
    impact: [
      "Made project status and ownership easier to understand.",
      "Improved consistency across recurring delivery workflows.",
      "Created a maintainable foundation for continued product growth.",
    ],
    highlights: [
      "Data-heavy workflow UX",
      "Frontend performance",
      "Project visibility and collaboration",
    ],
    preview: "workflow",
  },
  {
    slug: "pos-restaurant-operations-system",
    title: "POS & Restaurant Operations System",
    subtitle: "Full-stack tools for daily restaurant operations",
    category: "Enterprise Platform",
    description:
      "Internal POS and operations system supporting sales, administration, and restaurant workflows.",
    longDescription:
      "A full-stack operational system built around the practical needs of restaurant teams, connecting point-of-sale interfaces with administrative modules and supporting backend workflows.",
    role: "Senior Full Stack Developer",
    company: "Barq Systems",
    year: "2022 — 2024",
    featured: false,
    tech: ["React", "Node.js", "REST APIs", "PostgreSQL", "JavaScript"],
    problem:
      "Daily sales and administrative processes relied on multiple operational steps that needed to work together clearly and reliably for different staff roles.",
    solution:
      "Implemented connected frontend modules and backend workflows for sales, administration, and operational support with an emphasis on clarity and dependable day-to-day use.",
    responsibilities: [
      "Built POS and administration interfaces for core restaurant workflows.",
      "Developed and integrated backend services supporting operational modules.",
      "Handled role-specific views, validations, and process states.",
      "Supported delivery, maintenance, and mentoring across the frontend team.",
    ],
    impact: [
      "Connected important sales and administrative workflows in one system.",
      "Improved clarity for staff completing recurring operational tasks.",
      "Provided a maintainable base for extending restaurant operations.",
    ],
    highlights: [
      "Full-stack operational workflows",
      "Role-focused internal interfaces",
      "Sales and administration modules",
    ],
    preview: "operations",
  },
];
