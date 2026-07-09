import {
  BrainCircuit,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectTechBadges } from "@/components/work/ProjectTechBadges";
import { capabilities } from "@/data/stack";

const icons = {
  layout: PanelsTopLeft,
  layers: Layers3,
  ai: BrainCircuit,
  shield: ShieldCheck,
};

export function CoreCapabilities() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Core Engineering Capabilities"
            description="How I combine frontend depth, full-stack delivery, integrations, and enterprise product thinking."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = icons[capability.icon as keyof typeof icons];
              return (
                <Card key={capability.id} className="p-6 sm:p-8">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                    <Icon aria-hidden="true" className="size-5 text-emerald-400" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {capability.description}
                  </p>
                  <div className="mt-6">
                    <ProjectTechBadges technologies={capability.technologies} />
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
