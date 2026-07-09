import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type WorkCTAProps = {
  compact?: boolean;
};

export function WorkCTA({ compact = false }: WorkCTAProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-emerald-500/30 bg-[linear-gradient(120deg,rgba(34,197,94,.08),rgba(255,255,255,.02)_55%,transparent)]",
        compact ? "p-6 sm:p-8" : "p-8 sm:p-10",
      )}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Have a similar project in mind?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
        I&apos;m available for selected full-time opportunities, freelance
        projects, and consulting work.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Contact Me
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
        {!compact ? (
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
          >
            Download CV
            <Download aria-hidden="true" className="size-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
