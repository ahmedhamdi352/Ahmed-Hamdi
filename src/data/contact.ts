export const inquiryTypes = [
  "Freelance Project",
  "Part-time Role",
  "Full-time Opportunity",
  "Consulting",
  "Collaboration",
] as const;

export const budgetOptions = [
  "Not sure yet",
  "Less than $1,000",
  "$1,000 - $3,000",
  "$3,000 - $7,000",
  "$7,000+",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1 - 3 months",
  "3+ months",
  "Flexible / exploring",
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
    value: "Freelance, part-time, consulting, and senior engineering roles",
  },
];

export const contactPills = [
  "Dubai, UAE",
  "Available for selected opportunities",
  "Usually replies within 24 hours",
  "Remote / Hybrid / Dubai-based",
] as const;
