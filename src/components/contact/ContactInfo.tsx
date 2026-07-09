import {
  BriefcaseBusiness,
  ExternalLink,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { contactInfo, type ContactInfoItem } from "@/data/contact";

const icons: Record<ContactInfoItem["id"], LucideIcon> = {
  email: Mail,
  linkedin: ExternalLink,
  location: MapPin,
  availability: BriefcaseBusiness,
};

export function ContactInfo() {
  return (
    <aside aria-label="Contact information">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Contact information
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        Reach out directly or use the form. I&apos;ll respond as soon as I can.
      </p>
      <div className="mt-6 grid gap-4">
        {contactInfo.map((item) => {
          const Icon = icons[item.id];
          const content = (
            <>
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                <Icon aria-hidden="true" className="size-5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="mt-1 break-words text-sm leading-6 text-slate-200">
                  {item.value}
                </p>
              </div>
            </>
          );

          return item.href ? (
            <a
              key={item.id}
              href={item.href}
              target={item.id === "linkedin" ? "_blank" : undefined}
              rel={
                item.id === "linkedin" ? "noopener noreferrer" : undefined
              }
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-emerald-500/30"
            >
              {content}
            </a>
          ) : (
            <Card key={item.id} className="flex gap-4 p-5">
              {content}
            </Card>
          );
        })}
      </div>
    </aside>
  );
}
