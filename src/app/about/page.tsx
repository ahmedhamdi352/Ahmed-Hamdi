import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { WorkingStyle } from "@/components/about/WorkingStyle";

export const metadata: Metadata = {
  title: {
    absolute: "About — Ahmed Hamdi",
  },
  description:
    "Learn more about Ahmed Hamdi, a Senior Full Stack Engineer in Dubai building AI-enabled enterprise platforms, frontend architectures, dashboards, and secure internal tools.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ExperienceTimeline />
      <WorkingStyle />
      <AboutCTA />
    </>
  );
}
