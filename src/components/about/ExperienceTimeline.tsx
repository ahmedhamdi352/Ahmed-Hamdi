import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="font-display mt-4 text-5xl leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl">From product delivery to secure AI platforms.</h2>
          </div>
          <ol className="border-t border-border">
            {experience.map((item, index) => (
              <li key={item.id} className="relative grid gap-5 border-b border-border py-8 sm:grid-cols-[170px_1fr]">
                <div>
                  <p className="font-display text-xl text-[var(--bronze)]">{item.period}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{item.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">{item.summary}</p>
                  {index === 0 ? (
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {[
                        "Enterprise AI platforms",
                        "AI chatbot experiences",
                        "Back-office dashboards",
                        "Internal AI service hub",
                        "Secure on-premise systems",
                      ].map((focus) => <li key={focus} className="text-sm text-[var(--text-secondary)]">— {focus}</li>)}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
