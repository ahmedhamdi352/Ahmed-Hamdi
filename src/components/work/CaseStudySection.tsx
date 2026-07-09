import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CaseStudySectionProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  title,
  eyebrow,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <section className={cn("border-t border-white/[0.07] py-12 sm:py-16", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 text-base leading-8 text-slate-300">{children}</div>
    </section>
  );
}
