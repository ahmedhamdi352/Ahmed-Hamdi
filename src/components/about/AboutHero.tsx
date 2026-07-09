import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Download,
  Layers3,
  MapPin,
  Timer,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPills } from "@/data/about";
import { siteConfig } from "@/data/site";

const pillIcons = [MapPin, Timer, Building2, Layers3];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(16,185,129,.1),transparent_35rem)]" />
      <Container className="relative py-16 sm:py-24">
        <Reveal className="max-w-5xl">
          <p className="font-mono text-sm text-emerald-400">About Ahmed</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Senior Full Stack Engineer focused on{" "}
            <span className="text-emerald-400">AI-enabled enterprise platforms.</span>
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            I build scalable frontend architectures, dashboards, internal
            platforms, and full-stack systems for enterprise and government
            environments. My work combines React, Next.js, TypeScript, Node.js,
            Python, secure integrations, and AI-enabled product features to
            deliver reliable software with real operational value.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              View My Work
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
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-lg border border-white/10 px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
            >
              Contact Me
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2.5 border-t border-white/[0.07] pt-6">
            {aboutPills.map((pill, index) => {
              const Icon = pillIcons[index];
              return (
                <Badge key={pill} className="gap-2 px-3 py-2">
                  <Icon aria-hidden="true" className="size-3.5 text-emerald-400" />
                  {pill}
                </Badge>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
