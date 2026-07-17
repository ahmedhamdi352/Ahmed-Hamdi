export type NavigationItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export const siteConfig = {
  name: "Ahmed Hamdi",
  initials: "AH",
  role: "Senior Full Stack Engineer",
  headline: "Building AI-enabled platforms for teams that need clarity, speed, and control.",
  positioning:
    "Senior Full Stack Engineer building AI-enabled enterprise platforms, dashboards, and secure internal tools.",
  description:
    "Senior Full Stack Engineer based in Dubai, working across enterprise web platforms, AI chatbot experiences, internal service hubs, and data-heavy dashboards.",
  email: "ahmedhamdi352@gmail.com",
  location: "Dubai, UAE",
  responseTime: "Usually within 24 hours",
  availability: "Available for freelance, part-time & consulting projects",
  url: "https://ahmed-hamdi.vercel.app",
  cvPath: "/files/Ahmed_Hamdi_Senior_Full_Stack_Engineer_CV.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ahmed-hamdi-226359174/",
    github: null,
    email: "mailto:ahmedhamdi352@gmail.com",
  },
} as const;

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Contact", href: "/contact" },
];

export const metrics: Metric[] = [
  { value: "8+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "Enterprise", label: "AI Platforms" },
  { value: "Dubai", label: "Based" },
  { value: "Remote", label: "Friendly" },
];
