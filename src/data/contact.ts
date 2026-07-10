export const inquiryTypes = [
  "Full-time opportunity",
  "Freelance project",
  "Consulting",
  "Technical leadership / architecture",
  "Other",
] as const;

export const budgetOptions = [
  "Not sure yet",
  "Freelance: Small project",
  "Freelance: Medium project",
  "Freelance: Large project",
  "Full-time role / monthly package",
  "Consulting / hourly rate",
] as const;

export type ContactInfoItem = {
  id: "email" | "linkedin" | "location" | "availability";
  label: string;
  value: string;
  href?: string;
};

export const contactInfo: ContactInfoItem[] = [
  {
    id: "email",
    label: "Email",
    value: "ahmedhamdi352@gmail.com",
    href: "mailto:ahmedhamdi352@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ahmed-hamdi-226359174",
    href: "https://www.linkedin.com/in/ahmed-hamdi-226359174/",
  },
  {
    id: "location",
    label: "Location",
    value: "Dubai, United Arab Emirates",
  },
  {
    id: "availability",
    label: "Availability",
    value: "Selected full-time, freelance, and consulting opportunities",
  },
];

export const contactPills = [
  "Dubai, UAE",
  "Available for selected opportunities",
  "Usually replies within 24 hours",
  "Remote / Hybrid / Dubai-based",
] as const;
