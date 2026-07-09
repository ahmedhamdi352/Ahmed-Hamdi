import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { WorkCTA } from "@/components/work/WorkCTA";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Selected Work | Ahmed Hamdi",
  },
  description:
    "Enterprise platforms, AI-enabled products, dashboards, and full-stack systems delivered by Ahmed Hamdi.",
};

export default function WorkPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const remainingProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_10%,rgba(16,185,129,.1),transparent_35rem)]" />
        <Container className="relative py-16 sm:py-24">
          <Reveal className="max-w-4xl">
            <p className="font-mono text-sm text-emerald-400">Work & Case Studies</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">
              Selected Work
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A collection of enterprise platforms, AI-enabled products,
              dashboards, and full-stack systems I&apos;ve helped design, build,
              and deliver.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Let&apos;s Talk
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                href={siteConfig.cvPath}
                download
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
              >
                Download CV
                <Download aria-hidden="true" className="size-4" />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              title="Featured Projects"
              description="Production work across AI platforms, secure internal systems, and operational dashboards."
            />
            <ProjectGrid projects={featuredProjects} featured />
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              title="More Selected Work"
              description="Additional mobile, workflow, and full-stack systems."
            />
            <ProjectGrid projects={remainingProjects} />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <WorkCTA />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
