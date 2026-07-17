import {
  Bot,
  CheckCircle2,
  Grid2X2,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const workflowSteps = ["Trigger", "Understand", "Retrieve", "Generate", "Deliver"];
const services = ["Employee Onboarding", "IT Support", "Access Management"];

function PreviewHeader({ icon: Icon, title }: { icon: typeof Bot; title: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-border px-4 py-3">
      <Icon aria-hidden="true" className="size-4 text-primary" strokeWidth={1.7} />
      <p className="text-[11px] font-semibold text-foreground">{title}</p>
    </div>
  );
}

function WorkflowCard() {
  return (
    <div className="editorial-card overflow-hidden lg:absolute lg:left-0 lg:top-3 lg:w-[58%]">
      <PreviewHeader icon={Workflow} title="AI Workflow" />
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-4 p-4">
        <div className="grid gap-2">
          {workflowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-2 text-[9px] text-[var(--text-secondary)]">
              <span className={`flex size-4 items-center justify-center rounded-full border ${index < 4 ? "border-primary/30 bg-primary/[0.07] text-primary" : "border-border"}`}>
                {index < 4 ? <CheckCircle2 aria-hidden="true" className="size-2.5" /> : index + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
        <div className="grid content-center gap-2 text-center text-[8px] text-[var(--text-secondary)]">
          <div className="rounded-lg border border-border bg-[#faf6ee] px-2 py-2">Request received</div>
          <span aria-hidden="true" className="mx-auto h-3 w-px bg-primary/30" />
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-border bg-secondary px-2 py-2">Knowledge</div>
            <div className="rounded-lg border border-border bg-secondary px-2 py-2">Service API</div>
          </div>
          <span aria-hidden="true" className="mx-auto h-3 w-px bg-primary/30" />
          <div className="rounded-lg bg-primary px-2 py-2 text-primary-foreground">AI response</div>
        </div>
      </div>
    </div>
  );
}

function ServiceHubCard() {
  return (
    <div className="editorial-card overflow-hidden lg:absolute lg:right-0 lg:top-14 lg:w-[43%]">
      <PreviewHeader icon={Grid2X2} title="Service Hub" />
      <div className="p-3.5">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-[#faf6ee] px-3 py-2 text-[8px] text-muted-foreground">
          <Search aria-hidden="true" className="size-3" /> Search services
        </div>
        <div className="mt-2 grid gap-1.5">
          {services.map((service) => (
            <div key={service} className="flex items-center justify-between rounded-lg px-2 py-2 text-[9px] text-foreground hover:bg-secondary">
              {service}<span aria-hidden="true" className="text-[var(--bronze)]">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="editorial-card overflow-hidden lg:absolute lg:bottom-3 lg:left-[-8%] lg:w-[66%]">
      <PreviewHeader icon={Sparkles} title="Analytics Snapshot" />
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          {[["AI interactions", "12.8k"], ["Resolution rate", "94.6%"], ["Active services", "28"]].map(([label, value]) => (
            <div key={label}>
              <p className="text-[8px] text-muted-foreground">{label}</p>
              <p className="font-display mt-1 text-lg text-foreground">{value}</p>
            </div>
          ))}
        </div>
        <svg aria-label="AI interaction activity trending upward" className="mt-4 h-24 w-full" viewBox="0 0 360 90" role="img">
          <defs><linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2f4f3e" stopOpacity=".16"/><stop offset="1" stopColor="#2f4f3e" stopOpacity="0"/></linearGradient></defs>
          <path d="M0 73 C28 66 35 49 61 56 S99 68 120 45 S154 28 178 47 S219 58 239 35 S276 31 294 20 S327 24 360 8 V90 H0Z" fill="url(#hero-area)" />
          <path d="M0 73 C28 66 35 49 61 56 S99 68 120 45 S154 28 178 47 S219 58 239 35 S276 31 294 20 S327 24 360 8" fill="none" stroke="#2f4f3e" strokeWidth="2" />
          <path d="M0 89H360" stroke="#171412" strokeOpacity=".1" />
        </svg>
      </div>
    </div>
  );
}

function AccessCard() {
  return (
    <div className="editorial-card p-4 lg:absolute lg:right-0 lg:top-[330px] lg:w-[39%]">
      <div className="flex items-center gap-2 text-[11px] font-semibold"><ShieldCheck aria-hidden="true" className="size-4 text-primary" />Secure Access</div>
      <dl className="mt-3 grid gap-2 text-[8px]">
        <div className="flex justify-between"><dt className="text-muted-foreground">Role</dt><dd>Platform Manager</dd></div>
        <div className="flex justify-between"><dt className="text-muted-foreground">Permissions</dt><dd>12 granted</dd></div>
        <div className="flex justify-between"><dt className="text-muted-foreground">MFA</dt><dd className="text-primary">Enabled</dd></div>
      </dl>
    </div>
  );
}

function ChatCard() {
  return (
    <div className="editorial-card overflow-hidden lg:absolute lg:bottom-[-8px] lg:right-0 lg:w-[39%]">
      <div className="flex items-center justify-between border-b border-border px-3 py-2.5"><span className="flex items-center gap-2 text-[10px] font-semibold"><Bot aria-hidden="true" className="size-3.5 text-primary" />AI Assistant</span><span className="text-[8px] text-primary">● Online</span></div>
      <div className="grid gap-2 p-3 text-[8px] leading-4">
        <p className="mr-8 rounded-lg rounded-tl-sm bg-secondary px-2.5 py-2 text-[var(--text-secondary)]">How can I help today?</p>
        <p className="ml-7 rounded-lg rounded-tr-sm bg-primary px-2.5 py-2 text-primary-foreground">Show my pending service requests.</p>
      </div>
    </div>
  );
}

export function HeroDashboardMockup() {
  return (
    <div className="relative grid gap-4 sm:grid-cols-2 lg:block lg:min-h-[620px]">
      <WorkflowCard />
      <ServiceHubCard />
      <AnalyticsCard />
      <AccessCard />
      <ChatCard />
      <LockKeyhole aria-hidden="true" className="absolute -right-2 -top-3 hidden size-8 rounded-full border border-border bg-[var(--bronze-soft)] p-2 text-[var(--bronze)] shadow-sm lg:block" />
    </div>
  );
}
