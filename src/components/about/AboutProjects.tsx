import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

const selectedSlugs = [
  "aix-chatbot-platform",
  "ai-service-hub",
  "customer-insights-chatbot-back-office",
];

export function AboutProjects() {
  const selectedProjects = selectedSlugs.flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  });

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Selected Projects"
            description="Examples of enterprise AI, internal platform, and operational dashboard work."
            link={{ label: "View all work", href: "/work" }}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 sm:hidden"
          >
            View all work
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
