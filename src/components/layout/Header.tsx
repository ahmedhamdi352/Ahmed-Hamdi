"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgb(247_243_234/0.88)] backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-4" aria-label="Ahmed Hamdi home">
            <span className="font-display border-r border-border pr-4 text-[2rem] leading-none tracking-[-0.05em] text-foreground">
              {siteConfig.initials}
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg leading-none text-foreground">{siteConfig.name}</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{siteConfig.role}</span>
            </span>
          </Link>

          <nav className="hidden h-full items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative flex h-full items-center text-sm transition-colors hover:text-primary",
                    isActive
                      ? "text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary"
                      : "text-[var(--text-secondary)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_rgb(23_20_18/0.1)] hover:bg-primary-dark"
            >
              Let&apos;s Talk
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
          </nav>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
