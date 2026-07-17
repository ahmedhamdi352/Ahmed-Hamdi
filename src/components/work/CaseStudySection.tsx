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
    <section className={cn("grid gap-6 border-t border-border py-12 sm:grid-cols-[220px_1fr] sm:py-16", className)}>
      {eyebrow ? (
        <p className="section-label">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl tracking-[-0.025em] text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="text-base leading-8 text-[var(--text-secondary)]">{children}</div>
    </section>
  );
}
