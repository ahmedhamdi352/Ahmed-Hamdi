import { ExternalLink, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="border-t border-white/[0.07] py-14 sm:py-16">
      <Container><Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div><h2 className="text-2xl font-semibold text-white">Prefer a direct message?</h2><p className="mt-2 text-sm text-slate-500">Email and LinkedIn are always open.</p></div>
        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.socialLinks.email} className="inline-flex h-11 items-center gap-2 rounded-md bg-emerald-400 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-300"><Mail aria-hidden="true" className="size-4" />Email Me</a>
          <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-medium text-white hover:border-white/30">LinkedIn<ExternalLink aria-hidden="true" className="size-4" /></a>
        </div>
      </Reveal></Container>
    </section>
  );
}
