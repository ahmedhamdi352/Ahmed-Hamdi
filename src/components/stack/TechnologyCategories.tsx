import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const stackCategories = [
  { id: "frontend", title: "Frontend", description: "Interfaces and architecture for complex product experiences.", items: ["React", "Next.js", "TypeScript", "React Native", "Design Systems"] },
  { id: "backend", title: "Backend", description: "Services and secure integrations behind product workflows.", items: ["Node.js", "Python", "REST APIs", "Authentication", "PostgreSQL"] },
  { id: "ai", title: "AI & Automation", description: "Practical AI capabilities connected to real business workflows.", items: ["LLM Integrations", "AI Chatbots", "Workflow Automation", "Document Processing", "Analytics"] },
  { id: "delivery", title: "Delivery", description: "The practices that keep production delivery dependable.", items: ["Docker", "GitLab CI/CD", "Code Reviews", "Secure Integrations", "Production Support"] },
];

export function TechnologyCategories() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="font-display text-5xl tracking-[-0.04em] text-foreground sm:text-6xl">The tools I use to move from requirements to production.</h2>
            <p className="max-w-xl text-sm leading-7 text-[var(--text-secondary)] lg:justify-self-end">A modern, deliberately short stack for product interfaces, backend services, AI workflows, and dependable delivery.</p>
          </div>
          <div className="grid border-y border-border md:grid-cols-2 lg:grid-cols-4">
            {stackCategories.map((category, index) => (
              <section key={category.id} className="border-b border-border py-9 md:px-8 md:odd:border-r lg:min-h-96 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <p className="font-display text-2xl text-[var(--bronze)]">0{index + 1}</p>
                <div className="mt-3 h-0.5 w-10 bg-[var(--bronze)]" />
                <h2 className="font-display mt-7 text-3xl text-foreground">{category.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{category.description}</p>
                <ul className="mt-8 grid gap-3">
                  {category.items.map((item) => <li key={item} className="text-sm text-[var(--text-secondary)]">{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
