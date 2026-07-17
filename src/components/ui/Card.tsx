import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-border bg-card shadow-[0_20px_60px_rgb(23_20_18/0.08)]",
        className,
      )}
      {...props}
    />
  );
}
