import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WorkCTA({ caseStudy = false }: { caseStudy?: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
      <div>
        <p className="section-label">Next step</p>
        <h2 className="font-display mt-4 text-5xl tracking-[-0.035em] sm:text-6xl">
          {caseStudy ? "Need something similar?" : "Have a project or role in mind?"}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#b8b0a6]">Let&apos;s discuss the business goal, delivery constraints, and the engineering support your team needs.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-[14px] bg-[#f7f3ea] px-6 text-sm font-semibold text-[#17221c] hover:bg-[#efe8da]">
          Contact Me <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
        {caseStudy ? (
          <Link href="/work" className="inline-flex h-12 items-center rounded-[14px] border border-white/20 px-6 text-sm font-medium hover:bg-white/[0.07]">View More Work</Link>
        ) : (
          <a href={siteConfig.cvPath} download className="inline-flex h-12 items-center gap-2 rounded-[14px] border border-white/20 px-6 text-sm font-medium hover:bg-white/[0.07]"><Download aria-hidden="true" className="size-4" />Download CV</a>
        )}
      </div>
    </div>
  );
}
