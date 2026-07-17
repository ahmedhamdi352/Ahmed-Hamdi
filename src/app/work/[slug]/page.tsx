import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudySection } from "@/components/work/CaseStudySection";
import { ProjectTechBadges } from "@/components/work/ProjectTechBadges";
import { WorkCTA } from "@/components/work/WorkCTA";
import { projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: { absolute: `${project.title} — Ahmed Hamdi` },
    description: project.description,
    openGraph: { title: `${project.title} — Ahmed Hamdi`, description: project.description, type: "article", url: `/work/${project.slug}` },
  };
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 border-b border-border pb-3 text-sm leading-6 text-[var(--text-secondary)]">
          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />{item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-border py-16 sm:py-24">
        <Container><Reveal><CaseStudyHeader project={project} /></Reveal></Container>
      </section>
      <Container className="max-w-[1100px] py-4 sm:py-10">
        <Reveal>
          <CaseStudySection title="Context"><p>{project.problem}</p></CaseStudySection>
          <CaseStudySection title="My Contribution"><DetailList items={project.responsibilities} /></CaseStudySection>
          <CaseStudySection title="Key Modules / Features"><DetailList items={project.modules ?? project.highlights} /></CaseStudySection>
          <CaseStudySection title="Technical Challenges"><DetailList items={project.challenges ?? project.highlights} /></CaseStudySection>
          <CaseStudySection title="Solution Approach"><p>{project.solution}</p></CaseStudySection>
          <CaseStudySection title="Impact"><DetailList items={project.impact} /></CaseStudySection>
          <CaseStudySection title="Tech Stack"><ProjectTechBadges technologies={project.tech} /></CaseStudySection>
        </Reveal>
      </Container>
      <section className="border-t border-white/10 bg-[var(--charcoal)] py-20 text-[#f7f3ea] sm:py-24">
        <Container><Reveal><WorkCTA caseStudy /></Reveal></Container>
      </section>
    </>
  );
}
