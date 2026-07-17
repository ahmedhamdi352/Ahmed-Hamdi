import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Contact — Ahmed Hamdi",
  },
  description:
    "Contact Ahmed Hamdi for senior full-stack engineering opportunities, frontend architecture, AI-enabled platforms, dashboards, internal tools, and freelance projects.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
            <div><ContactHero /><ContactInfo /></div>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
