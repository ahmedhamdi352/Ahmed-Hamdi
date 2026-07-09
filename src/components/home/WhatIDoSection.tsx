import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Layers3,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { services, type ServiceIcon } from "@/data/services";

const icons: Record<ServiceIcon, typeof MonitorCog> = {
  frontend: MonitorCog,
  fullstack: Layers3,
  ai: BrainCircuit,
  enterprise: ShieldCheck,
};

export function WhatIDoSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="What I Do"
            description="From idea to production — I build solutions that scale."
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <Card
                  key={service.title}
                  className="group flex min-h-72 flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.045]"
                >
                  <Icon aria-hidden="true" className="size-7 text-emerald-400" strokeWidth={1.6} />
                  <h3 className="mt-6 text-base font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{service.description}</p>
                  <Link
                    href="/work"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-400"
                  >
                    Learn more
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
