import { Download, ExternalLink, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--charcoal)] py-10 text-[#f7f3ea]">
      <Container className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="flex items-center gap-4">
          <span className="font-display border-r border-white/20 pr-4 text-4xl">AH</span>
          <div>
            <p className="font-display text-xl">Ahmed Hamdi</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#b8b0a6]">Senior Full Stack &amp; AI Engineer</p>
          </div>
        </div>
        <nav aria-label="Footer links" className="flex items-center gap-5 text-sm text-[#b8b0a6]">
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Ahmed Hamdi on LinkedIn"
            className="hover:text-[#f7f3ea]"
          >
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
          <a href={siteConfig.socialLinks.email} aria-label="Email Ahmed Hamdi" className="hover:text-[#f7f3ea]">
            <Mail aria-hidden="true" className="size-4" />
          </a>
          <a href={siteConfig.cvPath} download className="inline-flex items-center gap-2 hover:text-[#f7f3ea]">
            <Download aria-hidden="true" className="size-4" />
            CV
          </a>
        </nav>
        <p className="border-t border-white/10 pt-5 text-xs text-[#b8b0a6] sm:col-span-2">
          © 2026 Ahmed Hamdi — Dubai, UAE · Available for consulting and senior engineering opportunities.
        </p>
      </Container>
    </footer>
  );
}
