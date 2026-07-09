import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Download,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

const pills = [
  { label: "Frontend Architecture", icon: PanelsTopLeft },
  { label: "Full-Stack Delivery", icon: Layers3 },
  { label: "AI-Enabled Products", icon: Bot },
  { label: "Enterprise Systems", icon: ShieldCheck },
];

export function StackHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(16,185,129,.1),transparent_35rem)]" />
      <Container className="relative py-16 sm:py-24">
        <Reveal className="max-w-5xl">
          <p className="font-mono text-sm text-emerald-400">Stack & Capabilities</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            The tools I use to build{" "}
            <span className="text-emerald-400">scalable, production-ready platforms.</span>
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A practical overview of the technologies, frameworks, and engineering
            practices I use to build frontend architectures, full-stack
            applications, dashboards, internal platforms, and AI-enabled product
            experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              View My Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-lg border border-white/10 px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
            >
              Contact Me
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
          <div className="mt-10 flex flex-wrap gap-2.5 border-t border-white/[0.07] pt-6">
            {pills.map(({ label, icon: Icon }) => (
              <Badge key={label} className="gap-2 px-3 py-2">
                <Icon aria-hidden="true" className="size-3.5 text-emerald-400" />
                {label}
              </Badge>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
