import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function StackCTA() {
  return (
    <section className="border-t border-white/10 bg-[var(--charcoal)] py-20 text-[#f7f3ea] sm:py-24">
      <Container><Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div><p className="section-label">Next step</p><h2 className="font-display mt-4 text-5xl tracking-[-0.04em] sm:text-6xl">Have a project or role in mind?</h2></div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-[14px] bg-[#f7f3ea] px-6 text-sm font-semibold text-[#17221c] hover:bg-[#efe8da]">Contact Me<ArrowRight aria-hidden="true" className="size-4" /></Link>
          <Link href="/work" className="inline-flex h-12 items-center rounded-[14px] border border-white/20 px-6 text-sm font-medium hover:bg-white/[0.07]">View Work</Link>
          <a href={siteConfig.cvPath} download className="inline-flex h-12 items-center gap-2 px-3 text-sm text-[#b8b0a6] hover:text-[#f7f3ea]"><Download aria-hidden="true" className="size-4" />CV</a>
        </div>
      </Reveal></Container>
    </section>
  );
}
