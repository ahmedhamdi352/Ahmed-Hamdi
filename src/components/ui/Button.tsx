import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center rounded-[14px] px-6 text-sm font-semibold transition-[background-color,transform,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(23_20_18/0.12)] hover:-translate-y-0.5 hover:bg-primary-dark",
        outline: "border border-input bg-card text-foreground hover:-translate-y-0.5 hover:bg-card-hover",
        ghost: "text-foreground hover:bg-card-hover",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
