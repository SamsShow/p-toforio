import { cn } from "@/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function Button({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Variants
        variant === "default" &&
          "bg-foreground text-background border-2 border-foreground hover:bg-background hover:text-foreground",
        variant === "outline" &&
          "bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
        variant === "ghost" &&
          "bg-transparent text-foreground hover:bg-foreground/10",
        // Sizes
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "default" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
