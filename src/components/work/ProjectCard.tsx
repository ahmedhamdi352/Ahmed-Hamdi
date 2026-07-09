import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectTechBadges } from "./ProjectTechBadges";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30",
        featured && "lg:first:col-span-2",
      )}
    >
      <ProjectVisual project={project} compact={!featured} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs text-emerald-400">{project.subtitle}</p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        <div className="mt-5">
          <ProjectTechBadges technologies={project.tech} limit={5} />
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          View Case Study
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </Card>
  );
}
