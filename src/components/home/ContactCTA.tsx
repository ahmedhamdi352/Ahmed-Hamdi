import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Download,
  Mail,
  MapPin,
  MessagesSquare,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

const details = [
  { label: "Email", value: siteConfig.email, icon: Mail },
  { label: "Location", value: siteConfig.location, icon: MapPin },
  { label: "Response time", value: siteConfig.responseTime, icon: Clock3 },
];

export function ContactCTA() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/35 bg-[linear-gradient(120deg,rgba(34,197,94,.07),rgba(255,255,255,.02)_50%,transparent)] p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-emerald-500/[0.06] blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
              <div className="flex gap-5">
                <span className="hidden size-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/25 text-emerald-400 sm:flex">
                  <MessagesSquare aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Have a project in mind?</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Let&apos;s build something great together.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                    I&apos;m available for selected full-time opportunities, freelance
                    projects, and consulting work.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
                    >
                      Send Me a Message
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                    <a
                      href={siteConfig.cvPath}
                      download
                      className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
                    >
                      Download CV
                      <Download aria-hidden="true" className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
              <dl className="grid gap-5">
                {details.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="size-5 shrink-0 text-emerald-400" />
                    <div>
                      <dt className="text-xs text-slate-500">{label}</dt>
                      <dd className="mt-0.5 break-all text-sm text-slate-200">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
