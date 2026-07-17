import type { Metadata } from "next";
import { StackCTA } from "@/components/stack/StackCTA";
import { StackHero } from "@/components/stack/StackHero";
import { TechnologyCategories } from "@/components/stack/TechnologyCategories";

export const metadata: Metadata = {
  title: {
    absolute: "Technical Stack — Ahmed Hamdi",
  },
  description:
    "Explore the technologies, tools, and engineering capabilities Ahmed Hamdi uses to build frontend architectures, full-stack platforms, dashboards, AI-enabled products, and secure internal tools.",
};

export default function StackPage() {
  return (
    <>
      <StackHero />
      <TechnologyCategories />
      <StackCTA />
    </>
  );
}
