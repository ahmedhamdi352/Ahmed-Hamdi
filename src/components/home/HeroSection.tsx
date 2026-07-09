import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { HeroDashboardMockup } from "./HeroDashboardMockup";
import { MetricsBar } from "./MetricsBar";

const contactLinks = [
  { label: "LinkedIn", href: siteConfig.socialLinks.linkedin, icon: BriefcaseBusiness },
  { label: "Email", href: siteConfig.socialLinks.email, icon: Mail },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <Container className="relative grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:py-24">
        <Reveal>
          <Badge className="border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
            {siteConfig.role}
          </Badge>
          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl">
            I build{" "}
            <span className="text-emerald-400">AI-enabled</span> enterprise
            platforms.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              View My Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a
              href={siteConfig.cvPath}
              download
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.05]"
            >
              Download CV
              <Download aria-hidden="true" className="size-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.05]"
            >
              Let&apos;s Talk
              <MessageCircle aria-hidden="true" className="size-4 text-emerald-400" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.06] pt-6">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white"
              >
                <Icon aria-hidden="true" className="size-4" />
                {label}
              </a>
            ))}
            <span className="inline-flex items-center gap-2 text-xs text-slate-400">
              <MapPin aria-hidden="true" className="size-4" />
              {siteConfig.location}
            </span>
          </div>
        </Reveal>
        <Reveal className="lg:pt-6">
          <HeroDashboardMockup />
          <MetricsBar />
        </Reveal>
      </Container>
    </section>
  );
}
