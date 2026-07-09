import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Ahmed Hamdi | Senior Full Stack Engineer",
  },
  description:
    "Contact Ahmed Hamdi for senior full-stack engineering opportunities, frontend architecture, AI-enabled platforms, dashboards, internal tools, and freelance projects.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <ContactInfo />
            <ContactForm />
          </Reveal>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
