import { Boxes, PanelsTopLeft, Workflow } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { engineeringFocus } from "@/data/about";

const icons = [Boxes, PanelsTopLeft, Workflow];

export function AboutIntro() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="My Engineering Focus"
            description="I turn complex requirements into reliable, maintainable, and user-friendly software."
          />
          <p className="mb-10 max-w-4xl text-base leading-8 text-slate-300">
            I&apos;m a full-stack engineer with strong frontend architecture
            experience and a track record across enterprise platforms,
            AI-enabled products, internal dashboards, workflow systems, remote
            product teams, and business applications.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {engineeringFocus.map((item, index) => {
              const Icon = icons[index];
              return (
                <Card key={item.title} className="p-6 sm:p-7">
                  <Icon aria-hidden="true" className="size-6 text-emerald-400" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
