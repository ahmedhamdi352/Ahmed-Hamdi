import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectTechBadges } from "@/components/work/ProjectTechBadges";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { projects } from "@/data/projects";

const badges: Record<string, string> = {
  "aix-chatbot-platform": "Government AI Platform",
  "ai-service-hub": "Secure Internal AI Hub",
  "customer-insights-chatbot-back-office": "Analytics & Operations Dashboard",
};

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="border-y border-border bg-[#fffaf1] py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Selected work</p>
              <h2 className="font-display mt-4 text-5xl tracking-[-0.04em] text-foreground sm:text-6xl">Platforms built for real operations.</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark">
              View all work <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:gap-8">
            {featured.map((project, index) => (
              <article key={project.slug} className="grid gap-8 border-t border-border py-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl text-[var(--bronze)]">0{index + 1}</span>
                    <span aria-hidden="true" className="h-px w-12 bg-[var(--bronze)]/70" />
                  </div>
                  <p className="section-label mt-6 text-primary!">{badges[project.slug]}</p>
                  <h3 className="font-display mt-3 text-4xl leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">{project.description}</p>
                  <ul className="mt-5 grid gap-2">
                    {project.responsibilities.slice(0, 3).map((item) => <li key={item} className="flex gap-3 text-xs leading-5 text-[var(--text-secondary)]"><span aria-hidden="true" className="mt-2 size-1 rounded-full bg-primary" />{item}</li>)}
                  </ul>
                  <div className="mt-6"><ProjectTechBadges technologies={project.tech} limit={5} /></div>
                  <Link href={`/work/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark">
                    View case study <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
                <div className={index % 2 ? "lg:order-1" : ""}>
                  <ProjectVisual project={project} className="h-72 sm:h-80" />
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
