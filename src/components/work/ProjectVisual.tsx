import { Bot, CheckCircle2, Grid2X2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  project: Project;
  className?: string;
  compact?: boolean;
};

function ChatbotPreview() {
  const actions = ["Renew license", "Pay fees", "Request document"];
  return (
    <div className="absolute inset-x-[7%] bottom-[7%] top-[18%] overflow-hidden rounded-2xl border border-white/20 bg-[#fffdf8] shadow-[0_20px_50px_rgb(0_0_0/0.16)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 text-foreground">
        <span className="flex items-center gap-2 text-[10px] font-semibold"><Bot aria-hidden="true" className="size-4 text-primary" />AIx Assistant</span>
        <span className="text-[8px] text-primary">● Online</span>
      </div>
      <div className="grid gap-2 p-4 text-[9px]">
        <p className="mr-[35%] rounded-xl rounded-tl-sm bg-secondary px-3 py-2 text-[var(--text-secondary)]">Hello, how can I help you today?</p>
        <p className="ml-[38%] rounded-xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">I need to check a service request.</p>
        <div className="mt-1 flex gap-2 overflow-hidden">
          {actions.map((action) => <span key={action} className="whitespace-nowrap rounded-lg border border-border bg-[#faf6ee] px-2.5 py-2 text-[8px] text-foreground">{action}</span>)}
        </div>
      </div>
    </div>
  );
}

function ServicesPreview() {
  return (
    <div className="absolute inset-x-[7%] bottom-[7%] top-[18%] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_50px_rgb(23_20_18/0.12)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-[10px] font-semibold"><Grid2X2 aria-hidden="true" className="size-4 text-primary" />AI Service Hub</div>
      <div className="grid h-full grid-cols-[25%_1fr_0.75fr] text-[8px]">
        <div className="border-r border-border bg-secondary/50 p-3">
          {["Services", "Workflows", "Requests", "Knowledge"].map((item, index) => <p key={item} className={cn("mb-1 rounded-md px-2 py-2", index === 0 ? "bg-card text-primary" : "text-muted-foreground")}>{item}</p>)}
        </div>
        <div className="p-3">
          <p className="font-semibold">Service catalog</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {["Document AI", "Summarization", "Data analysis", "Translation"].map((item) => <div key={item} className="rounded-lg border border-border bg-[#faf6ee] p-2.5">{item}</div>)}
          </div>
        </div>
        <div className="border-l border-border p-3">
          <p className="font-semibold">Workflow</p>
          <div className="mt-2 grid gap-1.5 text-center">
            {["Request", "Policy check", "AI service", "Delivered"].map((item, index) => <div key={item} className={cn("rounded-lg border border-border px-2 py-1.5", index === 3 && "border-primary/20 bg-primary/[0.07] text-primary")}>{item}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightsPreview() {
  const bars = [44, 68, 52, 78, 62, 88, 72, 94];
  return (
    <div className="absolute inset-x-[6%] bottom-[7%] top-[18%] overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-[0_20px_50px_rgb(23_20_18/0.12)]">
      <div className="grid grid-cols-3 gap-2">
        {[["Interactions", "128k"], ["Resolution", "92.6%"], ["Response", "2.1s"]].map(([label, value]) => <div key={label} className="rounded-lg border border-border bg-[#faf6ee] p-2"><p className="text-[7px] text-muted-foreground">{label}</p><p className="font-display mt-1 text-base">{value}</p></div>)}
      </div>
      <div className="mt-2 grid grid-cols-[1.35fr_0.65fr] gap-2">
        <div className="rounded-lg border border-border p-3">
          <p className="text-[8px] font-semibold">Conversations over time</p>
          <div className="mt-4 flex h-16 items-end gap-2 border-b border-border">
            {bars.map((height, index) => <i key={index} className="flex-1 rounded-t-sm bg-primary/65" style={{ height: `${height}%` }} />)}
          </div>
        </div>
        <div className="rounded-lg border border-border p-3">
          <p className="text-[8px] font-semibold">Top intents</p>
          <div className="mt-3 grid gap-2">{[76, 58, 42, 30].map((width) => <i key={width} className="h-1.5 rounded-full bg-primary/20"><span className="block h-full rounded-full bg-primary" style={{ width: `${width}%` }} /></i>)}</div>
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="absolute inset-x-[12%] bottom-[4%] top-[13%] flex items-end justify-center gap-5">
      {[0, 1].map((item) => <div key={item} className={cn("h-full w-[30%] rounded-[20px] border-4 border-[#17221c] bg-card p-2 shadow-xl", item === 1 && "h-[88%]")}><div className="h-2 w-1/3 rounded-full bg-border"/><div className="mt-3 h-1/3 rounded-xl bg-secondary"/><div className="mt-3 grid gap-2">{[1,2,3].map((row)=><i key={row} className="h-2 rounded bg-primary/15"/>)}</div></div>)}
      <div className="hidden h-[72%] flex-1 rounded-2xl border border-border bg-card p-4 shadow-xl sm:block"><p className="text-[9px] font-semibold">City services</p><div className="mt-3 grid grid-cols-2 gap-2">{[1,2,3,4].map((item)=><i key={item} className="rounded-lg border border-border bg-secondary p-5"/>)}</div></div>
    </div>
  );
}

function WorkflowPreview({ operations = false }: { operations?: boolean }) {
  return (
    <div className="absolute inset-x-[8%] bottom-[7%] top-[18%] rounded-2xl border border-border bg-card p-4 shadow-[0_20px_50px_rgb(23_20_18/0.12)]">
      <div className="flex items-center justify-between"><p className="text-[9px] font-semibold">{operations ? "Operations overview" : "Delivery workflow"}</p><ShieldCheck aria-hidden="true" className="size-4 text-primary" /></div>
      <div className="mt-4 grid gap-2">
        {["Request received", operations ? "Order prepared" : "Project review", operations ? "Service completed" : "Approval", "Delivered"].map((item,index)=><div key={item} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-[8px]"><CheckCircle2 aria-hidden="true" className={cn("size-3", index < 3 ? "text-primary" : "text-muted-foreground")}/><span className="flex-1">{item}</span><i className="h-1.5 w-20 rounded-full bg-secondary"/></div>)}
      </div>
    </div>
  );
}

export function ProjectVisual({ project, className, compact = false }: ProjectVisualProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-[22px] border border-border bg-[var(--surface-soft)]", compact ? "h-48" : "h-64 sm:h-72", project.preview === "chatbot" && "bg-[var(--charcoal)]", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgb(184_137_77/0.16),transparent_40%)]" />
      <Badge className={cn("absolute left-4 top-4 z-10 border-[var(--bronze)]/20 bg-[var(--bronze-soft)] text-[#72542f]", project.preview === "chatbot" && "border-white/15 bg-white/10 text-[#f7f3ea]")}>{project.badge ?? project.category}</Badge>
      {project.preview === "chatbot" ? <ChatbotPreview /> : null}
      {project.preview === "services" ? <ServicesPreview /> : null}
      {project.preview === "insights" ? <InsightsPreview /> : null}
      {project.preview === "mobile" ? <MobilePreview /> : null}
      {project.preview === "workflow" ? <WorkflowPreview /> : null}
      {project.preview === "operations" ? <WorkflowPreview operations /> : null}
    </div>
  );
}
