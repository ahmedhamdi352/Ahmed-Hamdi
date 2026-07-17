import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectTechBadges } from "./ProjectTechBadges";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="group grid gap-8 border-b border-border py-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-14">
      <div className={index % 2 ? "lg:order-2" : ""}>
        <div className="flex items-center gap-4"><span className="font-display text-2xl text-[var(--bronze)]">{String(index + 1).padStart(2, "0")}</span><span className="h-px w-12 bg-[var(--bronze)]/70" /></div>
        <p className="section-label mt-6 text-primary!">{project.badge ?? project.category}</p>
        <h2 className="font-display mt-3 text-4xl leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">{project.title}</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">{project.description}</p>
        <p className="mt-5 text-xs text-muted-foreground">My role <span className="ml-2 text-foreground">{project.role}</span></p>
        <div className="mt-5"><ProjectTechBadges technologies={project.tech} limit={5} /></div>
        <Link href={`/work/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark">
          View case study
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <ProjectVisual project={project} className={index % 2 ? "lg:order-1" : ""} />
    </article>
  );
}
