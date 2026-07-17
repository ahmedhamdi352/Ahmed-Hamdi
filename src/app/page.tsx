import { ContactCTA } from "@/components/home/ContactCTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsBar } from "@/components/home/MetricsBar";
import { TeamSupport } from "@/components/home/TeamSupport";
import { WhatIDoSection } from "@/components/home/WhatIDoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <WhatIDoSection />
      <FeaturedProjects />
      <TeamSupport />
      <ContactCTA />
    </>
  );
}
