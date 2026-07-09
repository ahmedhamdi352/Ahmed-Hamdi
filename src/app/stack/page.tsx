import type { Metadata } from "next";
import { CoreCapabilities } from "@/components/stack/CoreCapabilities";
import { EngineeringApproach } from "@/components/stack/EngineeringApproach";
import { StackCTA } from "@/components/stack/StackCTA";
import { StackHero } from "@/components/stack/StackHero";
import { StackUseCases } from "@/components/stack/StackUseCases";
import { TechnologyCategories } from "@/components/stack/TechnologyCategories";
import { ToolsWorkflow } from "@/components/stack/ToolsWorkflow";

export const metadata: Metadata = {
  title: {
    absolute: "Stack & Capabilities | Ahmed Hamdi",
  },
  description:
    "Explore the technologies, tools, and engineering capabilities Ahmed Hamdi uses to build frontend architectures, full-stack platforms, dashboards, AI-enabled products, and secure internal tools.",
};

export default function StackPage() {
  return (
    <>
      <StackHero />
      <CoreCapabilities />
      <TechnologyCategories />
      <EngineeringApproach />
      <StackUseCases />
      <ToolsWorkflow />
      <StackCTA />
    </>
  );
}
