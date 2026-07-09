import Link from "next/link";
import { Download } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/85 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Ahmed Hamdi home">
          <span className="font-mono text-2xl font-medium italic text-emerald-400">
            {siteConfig.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-white ${
                item.href === "/" ? "text-emerald-400" : "text-slate-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
          >
            Download CV
            <Download aria-hidden="true" className="size-4" />
          </a>
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
