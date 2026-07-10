import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { workingPrinciples } from "@/data/about";

export function WorkingStyle() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="How I Work"
            description="Practical principles that guide architecture, collaboration, and delivery."
          />
          <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {workingPrinciples.map((principle, index) => (
              <li
                key={principle}
                className="flex min-h-32 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className="font-mono text-xs text-slate-600">{`0${index + 1}`}</span>
                  <Check aria-hidden="true" className="size-4 text-emerald-400" />
                </div>
                <p className="mt-6 text-sm font-medium leading-6 text-slate-200">
                  {principle}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
