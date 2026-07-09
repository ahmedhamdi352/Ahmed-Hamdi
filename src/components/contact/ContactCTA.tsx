import { ExternalLink, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-emerald-500/30 bg-[linear-gradient(120deg,rgba(34,197,94,.08),rgba(255,255,255,.02)_55%,transparent)] p-7 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Prefer email or LinkedIn?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              You can also reach me directly through email or LinkedIn if
              that&apos;s easier.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={siteConfig.socialLinks.email}
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                <Mail aria-hidden="true" className="size-4" />
                Email Me
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
              >
                Connect on LinkedIn
                <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
