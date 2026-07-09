import {
  Bot,
  Code2,
  Database,
  GitPullRequest,
  ServerCog,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { stackCategories } from "@/data/stack";

const icons = [Code2, ServerCog, Bot, Database, Wrench, GitPullRequest];

export function TechnologyCategories() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Technologies I Work With"
            description="Grouped by how they contribute to real product and platform delivery."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stackCategories.map((category, index) => {
              const Icon = icons[index];
              return (
                <Card key={category.id} className="p-6">
                  <div className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="size-5 text-emerald-400" />
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
