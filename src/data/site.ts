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
  headline: "I build AI-enabled enterprise platforms.",
  positioning:
    "Senior Full Stack Engineer building AI-enabled enterprise platforms, dashboards, and secure internal tools.",
  description:
    "I design and build secure, scalable, and high-performance web applications that solve real-world problems and drive meaningful impact.",
  email: "ahmedhamdi352@gmail.com",
  location: "Dubai, UAE",
  responseTime: "Usually within 24 hours",
  cvPath: "/files/Ahmed_Hamdi_Senior_FullStack_Engineer_CV.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ahmed-hamdi-226359174/",
    github: null,
    email: "mailto:ahmedhamdi352@gmail.com",
  },
} as const;

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Contact", href: "/contact" },
];

export const metrics: Metric[] = [
  { value: "6+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "AI", label: "& Enterprise Focused" },
];
