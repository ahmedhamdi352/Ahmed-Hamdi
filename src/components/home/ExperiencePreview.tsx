import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

function getMark(company: string) {
  return company
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function ExperiencePreview() {
  const previewExperience = experience.slice(0, 3);

  return (
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Experience"
            description="Where I’ve worked and the impact I’ve delivered."
            link={{ label: "View full experience", href: "/about" }}
          />
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-0">
            {previewExperience.map((item, index) => (
              <article
                key={item.id}
                className={`relative flex gap-4 lg:px-8 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/[0.06]"}`}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 font-mono text-xs font-semibold text-emerald-300">
                  {getMark(item.company)}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.company}</h3>
                  <p className="mt-2 text-sm text-slate-200">{item.role}</p>
                  <p className="mt-1 font-mono text-xs text-slate-500">{item.period}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 sm:hidden"
          >
            View full experience
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
