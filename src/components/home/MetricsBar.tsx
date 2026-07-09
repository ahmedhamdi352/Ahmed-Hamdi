import { BrainCircuit, BriefcaseBusiness, CalendarClock } from "lucide-react";
import { metrics } from "@/data/site";

const metricIcons = [CalendarClock, BriefcaseBusiness, BrainCircuit];

export function MetricsBar() {
  return (
    <div className="relative -mt-px grid grid-cols-1 divide-y divide-white/[0.06] rounded-b-2xl border border-emerald-500/25 bg-[#07111f] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {metrics.map((metric, index) => {
        const Icon = metricIcons[index];
        return (
          <div key={metric.label} className="flex items-center gap-3 px-4 py-3.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/25 text-emerald-400">
              <Icon aria-hidden="true" className="size-4" />
            </span>
            <p className="text-xs font-medium text-slate-200">
              <strong className="mr-1 text-sm text-white">{metric.value}</strong>
              {metric.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
