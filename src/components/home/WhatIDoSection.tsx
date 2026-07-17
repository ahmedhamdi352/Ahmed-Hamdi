import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function WhatIDoSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="grid gap-14 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <div className="lg:pt-16">
            <p className="section-label">Services</p>
            <h2 className="font-display mt-5 max-w-md text-5xl leading-[1.04] tracking-[-0.04em] text-foreground sm:text-6xl">Engineering support for complex products and platforms.</h2>
            <div className="mt-8 h-px w-16 bg-[var(--bronze)]" />
            <p className="mt-7 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">I partner with product teams and enterprises to design and build reliable systems that solve real operational problems.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className={`editorial-card p-7 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#fffaf1] hover:shadow-[0_24px_70px_rgb(23_20_18/0.1)] sm:p-8 ${index % 2 ? "sm:translate-y-8" : ""}`}>
                <span className="font-display text-2xl text-primary">0{index + 1}</span>
                <div className="mt-3 h-0.5 w-11 bg-[var(--bronze)]" />
                <h3 className="font-display mt-6 text-3xl leading-tight text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{service.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
