import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  "Start with the business workflow",
  "Design the system before the UI",
  "Build reusable foundations",
  "Keep security and maintainability in the loop",
  "Ship production-ready work",
];

export function WorkingStyle() {
  return (
    <section className="border-y border-border bg-[var(--surface-soft)] py-24 sm:py-28">
      <Container>
        <Reveal className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div>
            <p className="section-label">Approach</p>
            <h2 className="font-display mt-4 text-5xl leading-tight tracking-[-0.04em] text-foreground">How I think about engineering.</h2>
          </div>
          <ol className="border-t border-border">
            {principles.map((principle, index) => (
              <li key={principle} className="flex items-center gap-5 border-b border-border py-6 text-base text-foreground">
                <span className="font-display text-2xl text-[var(--bronze)]">0{index + 1}</span>
                <span className="flex-1">{principle}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
