import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export function MobileNav() {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 text-slate-300 marker:hidden hover:text-white">
        <Menu aria-hidden="true" className="size-5" />
        <span className="sr-only">Open navigation</span>
      </summary>
      <nav
        className="absolute right-0 top-12 z-20 flex min-w-56 flex-col gap-1 rounded-xl border border-white/10 bg-[#07111f] p-2 shadow-2xl"
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/[0.05] hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={siteConfig.cvPath}
          download
          className="mt-1 rounded-lg bg-emerald-500 px-3 py-2.5 text-sm font-medium text-slate-950"
        >
          Download CV
        </a>
      </nav>
    </details>
  );
}
