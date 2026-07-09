import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function GradientBorder({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-xl border border-primary/30", className)} {...props} />;
}
