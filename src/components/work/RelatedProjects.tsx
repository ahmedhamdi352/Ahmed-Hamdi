import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
