import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectTechBadges } from "./ProjectTechBadges";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header>
      <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-primary">
        <ArrowLeft aria-hidden="true" className="size-4" /> Back to work
      </Link>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
        <div>
          <p className="section-label">{project.badge ?? project.category}</p>
          <h1 className="font-display mt-5 max-w-4xl text-6xl leading-none tracking-[-0.05em] text-foreground sm:text-8xl">{project.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">{project.longDescription}</p>
        </div>
        <dl className="border-t border-border text-sm">
          {[
            ["Category", project.category],
            ["Role", project.role],
            ["Year", project.year],
          ].map(([label, value]) => value ? (
            <div key={label} className="grid grid-cols-[100px_1fr] gap-4 border-b border-border py-3">
              <dt className="text-muted-foreground">{label}</dt><dd className="text-foreground">{value}</dd>
            </div>
          ) : null)}
          <div className="border-b border-border py-4">
            <dt className="mb-3 text-muted-foreground">Tech stack</dt>
            <dd><ProjectTechBadges technologies={project.tech} /></dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
