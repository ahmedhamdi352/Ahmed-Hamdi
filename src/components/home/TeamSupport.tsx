import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "React Native", "Design Systems"] },
  { title: "Backend", items: ["Node.js", "Python", "REST APIs", "Authentication", "PostgreSQL"] },
  { title: "AI & Automation", items: ["LLM Integrations", "AI Chatbots", "Workflow Automation", "Document Processing", "Analytics"] },
  { title: "Delivery", items: ["Docker", "GitLab CI/CD", "Code Reviews", "Secure Integrations", "Production Support"] },
];

export function TeamSupport() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-label">Technical focus</p>
              <h2 className="font-display mt-4 text-5xl tracking-[-0.04em] text-foreground sm:text-6xl">A focused stack for useful, durable systems.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[var(--text-secondary)] lg:justify-self-end">Technology choices follow the business workflow, delivery environment, and long-term maintenance needs—not a keyword inventory.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <section key={group.title} className="border-b border-border py-8 md:px-8 md:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <h3 className="font-display text-2xl text-foreground">{group.title}</h3>
                <ul className="mt-5 grid gap-3">
                  {group.items.map((item) => <li key={item} className="text-sm text-[var(--text-secondary)]">{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
