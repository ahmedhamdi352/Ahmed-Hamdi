export type ServiceIcon = "frontend" | "fullstack" | "ai" | "enterprise";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: "Frontend Architecture",
    description:
      "Scalable, maintainable, and high-performance web interfaces using React, Next.js, TypeScript, and modern frontend practices.",
    icon: "frontend",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end development of web applications, APIs, dashboards, and internal tools using Node.js, Python, and modern stacks.",
    icon: "fullstack",
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Integrating AI services, LLM workflows, chatbots, and automation tools to enhance user experience and business processes.",
    icon: "ai",
  },
  {
    title: "Enterprise Delivery",
    description:
      "Building secure, reliable, and scalable solutions for government and enterprise environments with a focus on quality and performance.",
    icon: "enterprise",
  },
];
