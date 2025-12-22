"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "stagger";
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const variants = variant === "stagger" ? staggerContainer : fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
