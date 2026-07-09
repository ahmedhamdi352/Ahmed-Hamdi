import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutProjects } from "@/components/about/AboutProjects";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { LeadershipHighlights } from "@/components/about/LeadershipHighlights";
import { WorkingStyle } from "@/components/about/WorkingStyle";

export const metadata: Metadata = {
  title: {
    absolute: "About Ahmed Hamdi | Senior Full Stack Engineer",
  },
  description:
    "Learn more about Ahmed Hamdi, a Senior Full Stack Engineer in Dubai building AI-enabled enterprise platforms, frontend architectures, dashboards, and secure internal tools.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <ExperienceTimeline />
      <LeadershipHighlights />
      <WorkingStyle />
      <AboutProjects />
      <AboutCTA />
    </>
  );
}
