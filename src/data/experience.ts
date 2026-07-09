export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    id: "dubai-police-ai",
    company: "Dubai Police - Department of AI",
    role: "Senior Full Stack Engineer",
    period: "Jul 2025 - Present",
    location: "Dubai, UAE",
    summary:
      "Building secure enterprise AI platforms, chatbot systems, dashboards, and internal service workflows in a high-security government environment.",
    highlights: [
      "Deliver AI-enabled platforms and secure internal service experiences.",
      "Build reusable frontend architecture for dashboards and chatbot workflows.",
      "Collaborate with backend, security, product, and operational teams.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "AI Services"],
  },
  {
    id: "apps-wave",
    company: "Apps Wave",
    role: "Senior Frontend Developer",
    period: "Jan 2024 - Jun 2025",
    location: "Remote - Amman, Jordan",
    summary:
      "Delivered React, Next.js, and React Native interfaces for enterprise and public-facing platforms, including city services and project management products.",
    highlights: [
      "Delivered responsive web and mobile product experiences.",
      "Created reusable frontend patterns across complex product areas.",
      "Worked closely with design, product, and backend delivery teams.",
    ],
    technologies: ["React", "Next.js", "React Native", "TypeScript", "REST APIs"],
  },
  {
    id: "barq-systems",
    company: "Barq Systems",
    role: "Senior Full Stack Developer",
    period: "Jan 2022 - Jan 2024",
    location: "Cairo, Egypt",
    summary:
      "Delivered full-stack web applications, improved frontend architecture, mentored junior developers, and contributed to code quality and maintainability.",
    highlights: [
      "Built and maintained production full-stack applications.",
      "Improved frontend structure and shared engineering practices.",
      "Supported developers through reviews, debugging, and implementation guidance.",
    ],
    technologies: ["React", "JavaScript", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "terkwaz",
    company: "Terkwaz Business Solution",
    role: "Frontend Developer",
    period: "Sep 2020 - Jan 2022",
    location: "Remote - Amman, Jordan",
    summary:
      "Built responsive React web applications, translated UX/UI into production interfaces, and integrated frontend features with backend APIs.",
    highlights: [
      "Translated product designs into responsive production interfaces.",
      "Integrated frontend journeys with backend APIs and application state.",
      "Contributed reusable components and maintainable interface patterns.",
    ],
    technologies: ["React", "Redux", "JavaScript", "HTML", "CSS", "REST APIs"],
  },
  {
    id: "cuisine-company",
    company: "Cuisine Company",
    role: "Frontend / Full Stack Developer",
    period: "Jan 2018 - Sep 2020",
    location: "Cairo, Egypt",
    summary:
      "Built internal POS and restaurant operations workflows using React, Redux, Node.js, Python Django, PHP Laravel, and SQLite.",
    highlights: [
      "Built interfaces for sales, administration, and restaurant operations.",
      "Connected frontend modules to multiple backend workflows.",
      "Supported day-to-day internal tooling and evolving business requirements.",
    ],
    technologies: ["React", "Redux", "Node.js", "Django", "Laravel", "SQLite"],
  },
];
