import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export function MobileNav() {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-input bg-card text-foreground marker:hidden hover:bg-secondary">
        <Menu aria-hidden="true" className="size-5" />
        <span className="sr-only">Open navigation</span>
      </summary>
      <nav
        className="absolute right-0 top-14 z-20 flex min-w-64 flex-col gap-1 rounded-2xl border border-border bg-card p-2 shadow-[0_20px_60px_rgb(23_20_18/0.14)]"
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-xl px-4 py-3 text-sm text-[var(--text-secondary)] hover:bg-secondary hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={siteConfig.cvPath}
          download
          className="mt-1 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
        >
          Download CV
        </a>
      </nav>
    </details>
  );
}
