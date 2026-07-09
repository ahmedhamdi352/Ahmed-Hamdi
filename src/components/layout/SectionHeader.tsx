import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  description?: string;
  link?: { label: string; href: string };
  centered?: boolean;
};

export function SectionHeader({
  title,
  description,
  link,
  centered = false,
}: SectionHeaderProps) {
  return (
    <header
      className={
        centered
          ? "mx-auto mb-10 max-w-2xl text-center"
          : "mb-8 flex items-end justify-between gap-6"
      }
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
        ) : null}
      </div>
      {link ? (
        <Link
          href={link.href}
          className="hidden shrink-0 items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 sm:inline-flex"
        >
          {link.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      ) : null}
    </header>
  );
}
