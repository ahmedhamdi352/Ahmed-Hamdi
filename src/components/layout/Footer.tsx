import { Heart } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <span className="font-mono text-xl italic text-slate-300">
          {siteConfig.initials}
        </span>
        <p className="flex items-center gap-2 text-xs text-slate-500">
          Built with Next.js & Tailwind CSS
          <Heart aria-hidden="true" className="size-3.5 text-emerald-400" />
        </p>
      </Container>
    </footer>
  );
}
