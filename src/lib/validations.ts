import { z } from "zod";
import { budgetOptions, inquiryTypes, timelineOptions } from "@/data/contact";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(100, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(150, "Company name is too long.").optional(),
  inquiryType: z.enum(inquiryTypes, {
    error: "Please select an inquiry type.",
  }),
  budget: z
    .union([z.enum(budgetOptions), z.literal("")])
    .optional(),
  timeline: z.enum(timelineOptions, {
    error: "Please select a timeline.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters.")
    .max(2000, "Message must be 2,000 characters or fewer."),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
