import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  project: Project;
  className?: string;
  compact?: boolean;
};

export function ProjectVisual({
  project,
  className,
  compact = false,
}: ProjectVisualProps) {
  const showCharts = project.preview === "insights";
  const showMobile = project.preview === "mobile";
  const showRows = ["workflow", "operations"].includes(project.preview);

  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-[#07111f]",
        compact ? "h-44" : "h-64 sm:h-72",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,.12),transparent_40%)]" />
      <Badge className="absolute left-5 top-5 z-10 border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
        {project.category}
      </Badge>
      <div
        className={cn(
          "absolute bottom-0 overflow-hidden rounded-t-xl border border-white/10 bg-[#0b1220] shadow-2xl",
          compact ? "inset-x-7 top-14" : "inset-x-8 top-16 sm:inset-x-12",
        )}
      >
        <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] px-3">
          <i className="size-1.5 rounded-full bg-red-400/60" />
          <i className="size-1.5 rounded-full bg-amber-400/60" />
          <i className="size-1.5 rounded-full bg-emerald-400/60" />
          <i className="ml-4 h-1.5 w-24 rounded-full bg-white/10" />
        </div>
        <div className="grid h-full grid-cols-[46px_1fr] sm:grid-cols-[58px_1fr]">
          <div className="border-r border-white/[0.06] bg-black/15 p-2.5">
            <div className="size-4 rounded bg-emerald-500/30" />
            <div className="mt-4 grid gap-2">
              {[1, 2, 3, 4].map((item) => (
                <i key={item} className="h-1 rounded bg-white/10" />
              ))}
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="h-2 w-24 rounded bg-white/15" />
            {showMobile ? (
              <div className="mt-3 flex gap-3">
                <div className="h-24 w-12 rounded-lg border border-white/10 bg-white/[0.03] p-1.5">
                  <i className="block h-5 rounded bg-emerald-500/20" />
                  <i className="mt-2 block h-1 rounded bg-white/10" />
                  <i className="mt-2 block h-8 rounded bg-white/[0.04]" />
                </div>
                <div className="grid flex-1 grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <i key={item} className="rounded border border-white/[0.06] bg-white/[0.025]" />
                  ))}
                </div>
              </div>
            ) : showRows ? (
              <div className="mt-3 grid gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded border border-white/[0.06] p-2">
                    <i className="size-4 rounded bg-emerald-500/20" />
                    <i className="h-1.5 flex-1 rounded bg-white/10" />
                    <i className="h-1.5 w-10 rounded bg-emerald-400/30" />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="rounded border border-white/[0.06] bg-white/[0.03] p-2">
                      <i className="block h-1 w-8 rounded bg-white/10" />
                      {showCharts ? (
                        <i className="mx-auto mt-3 block size-7 rounded-full border-4 border-emerald-400/50 border-r-blue-400/60" />
                      ) : (
                        <i className="mt-3 block h-2 w-12 rounded bg-emerald-400/40" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 h-8 rounded border border-white/[0.06] bg-white/[0.025] p-2">
                  <i className="block h-1 w-2/3 rounded bg-emerald-400/25" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
