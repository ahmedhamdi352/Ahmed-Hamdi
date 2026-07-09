import {
  Bell,
  Bot,
  LayoutDashboard,
  Search,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

const dashboardMetrics = [
  { label: "Total Users", value: "24.8K", change: "+12.6%" },
  { label: "Active Sessions", value: "4.7K", change: "+8.3%" },
  { label: "AI Interactions", value: "18.2K", change: "+16.7%" },
];

const services = [
  { name: "AI Chatbot", width: "88%" },
  { name: "Document AI", width: "72%" },
  { name: "Data Insights", width: "65%" },
  { name: "Service Hub", width: "54%" },
];

export function HeroDashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]/95 shadow-2xl shadow-emerald-950/20">
      <div className="grid min-h-[390px] grid-cols-[48px_1fr] sm:grid-cols-[58px_1fr]">
        <aside className="flex flex-col items-center border-r border-white/[0.06] bg-white/[0.025] py-5">
          <span className="font-mono text-xl font-medium italic text-emerald-400">AH</span>
          <div className="mt-8 flex flex-col gap-5 text-slate-500">
            <LayoutDashboard className="size-4 text-emerald-400" />
            <Users className="size-4" />
            <Bot className="size-4" />
            <ShieldCheck className="size-4" />
            <Settings className="size-4" />
          </div>
        </aside>
        <div className="min-w-0 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-white">Dashboard</span>
            <div className="flex items-center gap-2">
              <div className="hidden h-8 w-44 items-center gap-2 rounded-full bg-black/20 px-3 text-[9px] text-slate-500 sm:flex">
                <Search className="size-3" />
                Search anything...
              </div>
              <span className="flex size-8 items-center justify-center rounded-full border border-white/[0.06]">
                <Bell className="size-3 text-slate-400" />
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {dashboardMetrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-0 rounded-lg border border-white/[0.05] bg-white/[0.035] p-2.5 sm:p-3"
              >
                <p className="truncate text-[8px] text-slate-500 sm:text-[9px]">{metric.label}</p>
                <p className="mt-1 text-sm font-semibold text-white sm:text-base">{metric.value}</p>
                <p className="mt-1 text-[8px] text-emerald-400">{metric.change}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 grid gap-2 sm:grid-cols-[1.55fr_0.85fr]">
            <div className="rounded-lg border border-white/[0.05] bg-white/[0.025] p-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-slate-300">Analytics Overview</span>
                <span className="text-[8px] text-slate-600">7 days</span>
              </div>
              <svg
                viewBox="0 0 300 120"
                className="mt-3 h-32 w-full overflow-visible"
                role="img"
                aria-label="Rising analytics trend"
              >
                <defs>
                  <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity=".28" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[20, 50, 80, 110].map((y) => (
                  <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="white" strokeOpacity=".05" />
                ))}
                <path
                  d="M0 102 C25 92 28 56 54 70 S87 96 106 52 S139 92 160 74 S188 39 207 55 S238 78 255 43 S281 62 300 18 L300 120 L0 120 Z"
                  fill="url(#chart-fill)"
                />
                <path
                  d="M0 102 C25 92 28 56 54 70 S87 96 106 52 S139 92 160 74 S188 39 207 55 S238 78 255 43 S281 62 300 18"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <circle cx="300" cy="18" r="3" fill="#22c55e" />
              </svg>
            </div>
            <div className="grid gap-2">
              <div className="rounded-lg border border-white/[0.05] bg-white/[0.025] p-3">
                <p className="text-[9px] font-medium text-slate-300">System Status</p>
                <p className="mt-3 flex items-center gap-2 text-[8px] text-slate-400">
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(34,197,94,.5)]" />
                  All systems operational
                </p>
              </div>
              <div className="rounded-lg border border-white/[0.05] bg-white/[0.025] p-3">
                <p className="text-[9px] font-medium text-slate-300">Top Services</p>
                <div className="mt-3 grid gap-2.5">
                  {services.map((service) => (
                    <div key={service.name} className="grid grid-cols-[58px_1fr] items-center gap-2">
                      <span className="truncate text-[7px] text-slate-500">{service.name}</span>
                      <span className="h-0.5 rounded-full bg-white/10">
                        <span
                          className="block h-full rounded-full bg-emerald-400"
                          style={{ width: service.width }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
