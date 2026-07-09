import { Check, Code2, Palette, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { workflowGroups } from "@/data/stack";

const icons = [Code2, Palette, Rocket, ShieldCheck];

export function ToolsWorkflow() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Tools & Workflow"
            description="A practical toolkit for collaborative development, delivery, and quality."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowGroups.map((group, index) => {
              const Icon = icons[index];
              return (
                <Card key={group.title} className="p-6">
                  <Icon aria-hidden="true" className="size-5 text-emerald-400" />
                  <h3 className="mt-4 text-base font-semibold text-white">{group.title}</h3>
                  <ul className="mt-5 grid gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
