import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { HeroDashboardMockup } from "./HeroDashboardMockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgb(184_137_77/0.09),transparent_30%),radial-gradient(circle_at_86%_10%,rgb(47_79_62/0.08),transparent_28%)]" />
      <Container className="relative grid gap-14 py-16 lg:min-h-[700px] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-12 lg:py-16">
        <Reveal>
          <h1 className="font-display max-w-[760px] text-[clamp(3.35rem,5.25vw,5.55rem)] leading-[0.98] tracking-[-0.055em] text-foreground">
            {siteConfig.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {siteConfig.description}
          </p>
          <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-primary/[0.07] px-4 py-2.5 text-sm text-primary">
            <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
            {siteConfig.availability}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/work" className="button-primary">
              View My Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Me
            </Link>
            <a href={siteConfig.cvPath} download className="inline-flex h-12 items-center gap-2 px-3 text-sm font-medium text-[var(--text-secondary)] underline decoration-[var(--bronze)]/60 underline-offset-8 hover:text-primary">
              <Download aria-hidden="true" className="size-4" />
              Download CV
            </a>
          </div>
        </Reveal>
        <Reveal>
          <HeroDashboardMockup />
        </Reveal>
      </Container>
    </section>
  );
}
