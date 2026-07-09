import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Layers3, Target } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudySection } from "@/components/work/CaseStudySection";
import { ProjectTechBadges } from "@/components/work/ProjectTechBadges";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { RelatedProjects } from "@/components/work/RelatedProjects";
import { WorkCTA } from "@/components/work/WorkCTA";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: {
      absolute: `${project.title} | Ahmed Hamdi`,
    },
    description: project.description,
    openGraph: {
      title: `${project.title} — Ahmed Hamdi`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = [
    ...projects.filter(
      (item) => item.slug !== project.slug && item.category === project.category,
    ),
    ...projects.filter(
      (item) => item.slug !== project.slug && item.category !== project.category,
    ),
  ].slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(16,185,129,.09),transparent_35rem)]" />
        <Container className="relative py-12 sm:py-20">
          <Reveal>
            <CaseStudyHeader project={project} />
            <ProjectVisual
              project={project}
              className="mt-12 rounded-2xl border border-white/10"
            />
          </Reveal>
        </Container>
      </section>

      <Container className="max-w-[964px] py-4">
        <Reveal>
          <CaseStudySection title="Overview" eyebrow="The project">
            <p>{project.longDescription}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {project.highlights.map((highlight) => (
                <Card key={highlight} className="p-5">
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-5 text-emerald-400"
                  />
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {highlight}
                  </p>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="The problem" eyebrow="Context">
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection title="The solution" eyebrow="Approach">
            <p>{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection title="Key responsibilities" eyebrow="My role">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.responsibilities.map((responsibility) => (
                <Card key={responsibility} className="p-5">
                  <Layers3
                    aria-hidden="true"
                    className="size-5 text-emerald-400"
                  />
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {responsibility}
                  </p>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Impact and value" eyebrow="Outcome">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.impact.map((item) => (
                <Card key={item} className="p-5">
                  <Target
                    aria-hidden="true"
                    className="size-5 text-emerald-400"
                  />
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Technical stack" eyebrow="Technology">
            <p className="mb-6">
              Selected to support a maintainable, secure, and production-ready
              implementation.
            </p>
            <ProjectTechBadges technologies={project.tech} />
          </CaseStudySection>
        </Reveal>
      </Container>

      <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400">
                Keep exploring
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Related projects
              </h2>
            </div>
            <RelatedProjects projects={relatedProjects} />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-[964px]">
          <Reveal>
            <WorkCTA />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
