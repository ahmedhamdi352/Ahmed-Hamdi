import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function AboutCTA() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-emerald-500/30 bg-[linear-gradient(120deg,rgba(34,197,94,.08),rgba(255,255,255,.02)_55%,transparent)] p-7 sm:p-10">
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Looking for a senior engineer who can own delivery?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              I&apos;m open to selected full-time opportunities, freelance
              projects, and consulting work around frontend architecture,
              full-stack platforms, dashboards, and AI-enabled products.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Contact Me
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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
