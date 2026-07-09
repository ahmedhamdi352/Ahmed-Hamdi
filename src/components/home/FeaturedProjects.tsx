import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectTechBadges } from "@/components/work/ProjectTechBadges";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Featured Projects"
            description="A selection of projects that highlight my skills and impact."
            link={{ label: "View all projects", href: "/work" }}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
              >
                <ProjectVisual project={project} compact />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`Open ${project.title}`}
                      className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:border-emerald-500/30 hover:text-emerald-400"
                    >
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>
                  <p className="mt-2 min-h-18 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <ProjectTechBadges technologies={project.tech} limit={4} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 sm:hidden"
          >
            View all projects
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
