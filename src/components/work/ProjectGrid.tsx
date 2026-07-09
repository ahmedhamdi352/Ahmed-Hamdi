import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  featured?: boolean;
};

export function ProjectGrid({
  projects,
  featured = false,
}: ProjectGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5",
        featured ? "lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          featured={featured}
        />
      ))}
    </div>
  );
}
