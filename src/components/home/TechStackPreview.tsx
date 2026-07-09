import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Cloud,
  Code2,
  ContainerIcon,
  Database,
  FileCode2,
  GitBranch,
  Hexagon,
  Server,
  Wind,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { featuredTechnologies } from "@/data/stack";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Code2> = {
  react: Hexagon,
  next: Code2,
  typescript: FileCode2,
  javascript: Braces,
  node: Server,
  python: Code2,
  tailwind: Wind,
  postgresql: Database,
  mongodb: Database,
  docker: ContainerIcon,
  git: GitBranch,
  aws: Cloud,
};

export function TechStackPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Tech Stack"
            description="Technologies and tools I work with."
            link={{ label: "View all tools", href: "/stack" }}
          />
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
            {featuredTechnologies.map((technology) => {
              const Icon = icons[technology.icon];
              return (
                <div
                  key={technology.name}
                  className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-2 transition-colors hover:border-emerald-500/30"
                >
                  <Icon
                    aria-hidden="true"
                    className={cn("size-6", technology.tone)}
                    strokeWidth={1.7}
                  />
                  <span className="text-center text-[11px] font-medium text-slate-300">
                    {technology.name}
                  </span>
                </div>
              );
            })}
          </div>
          <Link
            href="/stack"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 sm:hidden"
          >
            View all tools
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
