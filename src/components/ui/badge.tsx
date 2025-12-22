import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-mono tracking-tight",
        variant === "default" && "bg-foreground text-background",
        variant === "outline" && "border border-foreground text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
