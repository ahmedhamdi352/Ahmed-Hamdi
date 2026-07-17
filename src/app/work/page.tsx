import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { WorkCTA } from "@/components/work/WorkCTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: { absolute: "Selected Work — Ahmed Hamdi" },
  description: "Enterprise platforms, AI-enabled systems, dashboards, mobile apps, and internal tools delivered by Ahmed Hamdi.",
  openGraph: {
    title: "Selected Work — Ahmed Hamdi",
    description: "Enterprise platforms, AI-enabled systems, dashboards, mobile apps, and internal tools delivered by Ahmed Hamdi.",
    url: "/work",
  },
};

const order = [
  "aix-chatbot-platform",
  "ai-service-hub",
  "customer-insights-chatbot-back-office",
  "pif-cobuilderops",
  "misk-city-digital-products",
  "pos-restaurant-operations-system",
];

export default function WorkPage() {
  const orderedProjects = order.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-4xl">
            <p className="section-label">Work / Case studies</p>
            <h1 className="font-display mt-5 text-6xl leading-none tracking-[-0.05em] text-foreground sm:text-8xl">Selected Work</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
              A collection of enterprise platforms, AI-enabled systems, dashboards, mobile apps, and internal tools I contributed to across government, enterprise, and product environments.
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal><ProjectGrid projects={orderedProjects} /></Reveal>
        </Container>
      </section>
      <section className="border-t border-white/10 bg-[var(--charcoal)] py-20 text-[#f7f3ea] sm:py-24">
        <Container><Reveal><WorkCTA /></Reveal></Container>
      </section>
    </>
  );
}
