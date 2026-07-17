"use server";

import { Resend } from "resend";
import { contactSchema, type ContactInput } from "@/lib/validations";

export type ContactActionResult = {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
};

export async function sendContactMessage(
  formData: FormData,
): Promise<ContactActionResult> {
  const rawInput = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    inquiryType: formData.get("inquiryType"),
    budget: formData.get("budget") || undefined,
    timeline: formData.get("timeline"),
    message: formData.get("message"),
    website: formData.get("website") || undefined,
  };

  if (typeof rawInput.website === "string" && rawInput.website) {
    return {
      success: true,
      message: "Thanks — I received your message and will get back to you soon.",
    };
  }

  const result = contactSchema.safeParse(rawInput);

  if (!result.success) {
    return {
      success: false,
      message: "Please review the highlighted fields and try again.",
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      success: false,
      message:
        "Email delivery is not configured yet. Please email me directly at ahmedhamdi352@gmail.com.",
    };
  }

  const { name, email, company, inquiryType, budget, timeline, message } = result.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New portfolio inquiry from ${name} - ${inquiryType}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Inquiry Type: ${inquiryType}`,
        `Budget / Package: ${budget || "Not provided"}`,
        `Timeline: ${timeline}`,
        "",
        "Message:",
        message,
        "",
        "Submitted from Ahmed Hamdi Portfolio",
      ].join("\n"),
    });

    if (error) {
      return {
        success: false,
        message:
          "Something went wrong. Please try again or email me directly.",
      };
    }

    return {
      success: true,
      message: "Thanks — I received your message and will get back to you soon.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again or email me directly.",
    };
  }
}
