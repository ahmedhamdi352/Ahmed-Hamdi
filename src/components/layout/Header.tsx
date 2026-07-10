"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-transparent py-4 backdrop-blur-xl">
      <Container>
        {/* Bordered floating nav card */}
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#030712]/80 px-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Ahmed Hamdi home">
            <span className="relative flex flex-col items-center">
              <span className="font-mono text-2xl font-medium italic leading-none text-emerald-400">
                {siteConfig.initials}
              </span>
              {/* Green active dot */}
              <span className="mt-1 size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition-colors hover:text-white ${
                    isActive ? "text-emerald-400" : "text-slate-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={siteConfig.cvPath}
              download
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-medium text-white hover:border-emerald-500/30 hover:bg-white/[0.04]"
            >
              Download CV
              <Download aria-hidden="true" className="size-3.5" />
            </a>
          </nav>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
