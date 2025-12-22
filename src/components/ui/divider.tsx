"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { lineExpand } from "@/lib/animations";

interface DividerProps {
  className?: string;
  animated?: boolean;
}

export function Divider({ className, animated = false }: DividerProps) {
  if (!animated) {
    return (
      <div className={cn("h-[2px] w-full bg-foreground", className)} />
    );
  }

  return (
    <motion.div
      className={cn("h-[2px] w-full bg-foreground origin-left", className)}
      initial="hidden"
      animate="visible"
      variants={lineExpand}
    />
  );
}
