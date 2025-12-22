"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  shadow?: "sm" | "default" | "lg";
}

export function Card({
  children,
  className,
  hover = true,
  shadow = "default",
}: CardProps) {
  const shadowClasses = {
    sm: "shadow-brutal-sm",
    default: "shadow-brutal",
    lg: "shadow-brutal-lg",
  };

  if (!hover) {
    return (
      <div
        className={cn(
          "border-2 border-foreground bg-background p-6",
          shadowClasses[shadow],
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "border-2 border-foreground bg-background p-6",
        shadowClasses[shadow],
        "transition-shadow duration-200",
        className
      )}
      whileHover={{
        y: -4,
        boxShadow:
          shadow === "lg"
            ? "10px 10px 0px 0px rgb(var(--shadow-color))"
            : "6px 6px 0px 0px rgb(var(--shadow-color))",
      }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
