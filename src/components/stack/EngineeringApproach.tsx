import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { engineeringApproach } from "@/data/stack";

export function EngineeringApproach() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="How I Apply This Stack"
            description="Technology choices follow the product, operational, and delivery context."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {engineeringApproach.map((item, index) => (
              <Card key={item.title} className="flex flex-col p-5 lg:min-h-64">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                  <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-400" />
                </div>
                <h3 className="mt-8 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
