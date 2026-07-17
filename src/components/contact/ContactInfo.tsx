import { BriefcaseBusiness, Download, ExternalLink, Mail, MapPin, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/data/site";
import { contactInfo, type ContactInfoItem } from "@/data/contact";

const icons: Record<ContactInfoItem["id"], LucideIcon> = { email: Mail, linkedin: ExternalLink, location: MapPin, availability: BriefcaseBusiness };

export function ContactInfo() {
  return (
    <aside aria-label="Contact information" className="mt-10">
      <dl className="border-t border-border">
        {contactInfo.map((item) => {
          const Icon = icons[item.id];
          const body = <><Icon aria-hidden="true" className="mt-1 size-4 shrink-0 text-[var(--bronze)]" /><span><span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.label}</span><span className="mt-1 block break-words text-sm leading-6 text-foreground">{item.value}</span></span></>;
          return item.href ? (
            <div key={item.id} className="border-b border-border py-4"><a href={item.href} target={item.id === "linkedin" ? "_blank" : undefined} rel={item.id === "linkedin" ? "noreferrer" : undefined} className="flex gap-3 hover:text-primary">{body}</a></div>
          ) : <div key={item.id} className="flex gap-3 border-b border-border py-4">{body}</div>;
        })}
      </dl>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href={siteConfig.cvPath} download className="button-primary"><Download aria-hidden="true" className="size-4" />Download CV</a>
        <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="button-secondary">LinkedIn<ExternalLink aria-hidden="true" className="size-4" /></a>
      </div>
      <p className="mt-7 border-l-2 border-[var(--bronze)] pl-4 text-xs leading-6 text-[var(--text-secondary)]"><span className="font-semibold uppercase tracking-[0.14em] text-[var(--bronze)]">Note</span><br />For freelance projects, include the project goal, timeline, budget range, and current technical challenge.</p>
    </aside>
  );
}
