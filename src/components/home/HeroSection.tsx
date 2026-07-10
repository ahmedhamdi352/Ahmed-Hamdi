import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Shield, Users, Zap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { HeroDashboardMockup } from "./HeroDashboardMockup";

const features = [
  {
    icon: Shield,
    label: "Secure by Design",
    subtitle: "Security-first mindset",
  },
  {
    icon: Zap,
    label: "High Performance",
    subtitle: "Built for scale",
  },
  {
    icon: Users,
    label: "User Focused",
    subtitle: "Impact that matters",
  },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      {/* Background image */}
      <Image
        src="/images/hero/bg-hero.png"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover object-center"
        aria-hidden="true"
      />
      {/* Dark scrim */}
      <div className="pointer-events-none absolute inset-0 bg-[#030712]/60" />
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <Container className="relative grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:py-24">
        <Reveal>
          <Badge className="gap-1.5 border-emerald-500/30 bg-emerald-500/[0.08] font-mono text-[11px] uppercase tracking-widest text-emerald-300">
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-emerald-400" />
            Senior Full-Stack Engineer
          </Badge>

          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl">
            I build{" "}
            <span className="text-emerald-400">AI-enabled</span> enterprise
            platforms.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            {siteConfig.description}
          </p>

          {/* Feature items */}
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
            {features.map(({ icon: Icon, label, subtitle }) => (
              <div key={label} className="flex items-start gap-2.5">
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-emerald-400"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs leading-5 text-slate-400">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-emerald-500 px-6 text-base font-semibold text-white hover:bg-emerald-400"
            >
              View My Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6 text-base font-medium text-white hover:border-white/40 hover:bg-white/[0.05]"
            >
              Contact Me
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="lg:pt-6">
          <HeroDashboardMockup />
        </Reveal>
      </Container>

      {/* Scroll to explore */}
      <div className="relative pb-8 pt-2 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
          Scroll to explore
        </p>
        <div className="mx-auto mt-3 flex size-8 items-center justify-center rounded-full border border-white/10 text-slate-500">
          <ArrowDown aria-hidden="true" className="size-4" />
        </div>
      </div>
    </section>
  );
}
