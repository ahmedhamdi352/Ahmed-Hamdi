import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { TechStackPreview } from "@/components/home/TechStackPreview";
import { WhatIDoSection } from "@/components/home/WhatIDoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <FeaturedProjects />
      <ExperiencePreview />
      <TechStackPreview />
      <ContactCTA />
    </>
  );
}
