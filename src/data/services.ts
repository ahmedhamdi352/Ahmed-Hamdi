export type ServiceIcon = "frontend" | "fullstack" | "ai" | "enterprise";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: "AI Chatbots & Assistants",
    description:
      "Chatbot interfaces, AI response flows, backend integrations, and operational visibility for internal or customer-facing platforms.",
    icon: "frontend",
  },
  {
    title: "Enterprise Dashboards",
    description:
      "Analytics dashboards, admin portals, reporting workflows, and back-office tools for data-heavy teams.",
    icon: "fullstack",
  },
  {
    title: "Internal Platforms",
    description:
      "Service hubs, workflow automation tools, role-aware portals, and secure enterprise web applications.",
    icon: "ai",
  },
  {
    title: "Full Stack Delivery",
    description:
      "Frontend architecture, backend APIs, authentication, integrations, deployment workflows, and production support.",
    icon: "enterprise",
  },
];
