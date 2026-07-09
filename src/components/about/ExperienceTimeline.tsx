import { MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectTechBadges } from "@/components/work/ProjectTechBadges";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Experience"
            description="A progression from business applications to enterprise, government, and AI-enabled platform delivery."
          />
          <ol className="relative mt-10 grid gap-5 md:ml-3 md:border-l md:border-emerald-500/20 md:pl-10">
            {experience.map((item) => (
              <li key={item.id} className="relative">
                <span className="absolute -left-[47px] top-8 hidden size-3 rounded-full border-2 border-[#030712] bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,.12)] md:block" />
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs text-emerald-400">{item.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{item.company}</h3>
                      <p className="mt-1 text-sm font-medium text-slate-200">{item.role}</p>
                    </div>
                    <p className="flex shrink-0 items-center gap-2 text-xs text-slate-500">
                      <MapPin aria-hidden="true" className="size-3.5" />
                      {item.location}
                    </p>
                  </div>
                  <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-300 lg:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2.5 size-1 shrink-0 rounded-full bg-emerald-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <ProjectTechBadges technologies={item.technologies} />
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
