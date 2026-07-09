import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectTechBadges } from "@/components/work/ProjectTechBadges";
import { stackUseCases } from "@/data/stack";

export function StackUseCases() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Where This Stack Shows Up"
            description="Selected examples of these capabilities applied to production platform work."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {stackUseCases.map((useCase) => (
              <Card key={useCase.href} className="group flex flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {useCase.description}
                </p>
                <div className="mt-5">
                  <ProjectTechBadges technologies={useCase.stack} />
                </div>
                <Link
                  href={useCase.href}
                  className="mt-6 text-sm font-medium text-emerald-400 hover:text-emerald-300"
                >
                  View Case Study
                  <span className="sr-only">: {useCase.title}</span>
                </Link>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
