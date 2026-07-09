import {
  BriefcaseBusiness,
  Clock3,
  Laptop,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { contactPills } from "@/data/contact";

const icons = [MapPin, BriefcaseBusiness, Clock3, Laptop];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(16,185,129,.1),transparent_35rem)]" />
      <Container className="relative py-16 sm:py-24">
        <Reveal className="max-w-5xl">
          <p className="font-mono text-sm text-emerald-400">Let&apos;s talk.</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Have a role, project, or{" "}
            <span className="text-emerald-400">platform idea?</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I&apos;m open to selected full-time opportunities, freelance
            projects, and consulting work around frontend architecture,
            full-stack platforms, dashboards, and AI-enabled products.
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5 border-t border-white/[0.07] pt-6">
            {contactPills.map((pill, index) => {
              const Icon = icons[index];
              return (
                <Badge key={pill} className="gap-2 px-3 py-2">
                  <Icon aria-hidden="true" className="size-3.5 text-emerald-400" />
                  {pill}
                </Badge>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
