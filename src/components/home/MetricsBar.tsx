import { Container } from "@/components/layout/Container";
import { metrics } from "@/data/site";

export function MetricsBar() {
  return (
    <section aria-label="Experience highlights" className="border-b border-border bg-card/55">
      <Container className="flex flex-wrap items-center justify-center py-7 lg:flex-nowrap lg:justify-between">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-baseline gap-2 px-4 py-2 text-center lg:flex-1 lg:justify-center lg:border-l lg:border-border lg:first:border-l-0"
          >
            <span className="font-display text-xl text-primary">{metric.value}</span>
            <span className="text-xs text-[var(--text-secondary)]">{metric.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
