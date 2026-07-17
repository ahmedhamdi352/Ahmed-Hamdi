import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="section-label">About</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:items-end lg:gap-16">
            <h1 className="font-display max-w-5xl text-6xl leading-[0.98] tracking-[-0.05em] text-foreground sm:text-8xl">Senior Full Stack Engineer focused on enterprise platforms and AI-enabled systems.</h1>
            <p className="border-l border-border pl-8 text-lg leading-9 text-[var(--text-secondary)]">
              I&apos;m Ahmed Hamdi, a Dubai-based Senior Full Stack Engineer with 8+ years of experience building production-grade web applications, internal platforms, dashboards, and AI-enabled systems. My work focuses on turning complex business workflows into secure, scalable, and maintainable software.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
