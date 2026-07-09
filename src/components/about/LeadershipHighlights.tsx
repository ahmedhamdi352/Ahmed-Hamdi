import { BrainCircuit, Code2, GitPullRequest, UsersRound } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { leadershipHighlights } from "@/data/about";

const icons = [Code2, GitPullRequest, UsersRound, BrainCircuit];

export function LeadershipHighlights() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="How I Create Impact"
            description="Senior-level ownership through architecture, collaboration, mentoring, and practical delivery."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {leadershipHighlights.map((item, index) => {
              const Icon = icons[index];
              return (
                <Card key={item.title} className="p-6 sm:p-7">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                    <Icon aria-hidden="true" className="size-5 text-emerald-400" />
                  </div>
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
