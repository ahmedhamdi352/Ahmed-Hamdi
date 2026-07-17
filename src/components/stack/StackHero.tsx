import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function StackHero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container><Reveal className="max-w-5xl">
        <p className="section-label">Technical focus</p>
        <h1 className="font-display mt-5 text-6xl leading-[0.98] tracking-[-0.05em] text-foreground sm:text-8xl">A focused stack for building reliable, maintainable platforms.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">Tools, product capabilities, and engineering practices selected for secure enterprise delivery—not a keyword inventory.</p>
      </Reveal></Container>
    </section>
  );
}
