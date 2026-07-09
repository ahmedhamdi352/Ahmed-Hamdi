import Link from "next/link";
import { ArrowLeft, Building2, CalendarDays, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import { ProjectTechBadges } from "./ProjectTechBadges";

export function CaseStudyHeader({ project }: { project: Project }) {
  const details = [
    { label: "Role", value: project.role, icon: UserRound },
    { label: "Company", value: project.company, icon: Building2 },
    { label: "Year", value: project.year, icon: CalendarDays },
  ].filter((item) => item.value);

  return (
    <header>
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to work
      </Link>
      <div className="mt-10">
        <Badge className="border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
          {project.category}
        </Badge>
        <p className="mt-6 font-mono text-sm text-emerald-400">
          {project.subtitle}
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {project.description}
        </p>
      </div>
      <dl className="mt-10 grid gap-4 border-y border-white/[0.08] py-6 sm:grid-cols-3">
        {details.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon aria-hidden="true" className="mt-0.5 size-4 text-emerald-400" />
            <div>
              <dt className="text-xs text-slate-500">{label}</dt>
              <dd className="mt-1 text-sm text-slate-200">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
      <div className="mt-6">
        <ProjectTechBadges technologies={project.tech} />
      </div>
    </header>
  );
}
