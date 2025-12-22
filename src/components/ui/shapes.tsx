"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GeometricShapeProps {
  className?: string;
  variant?: "square" | "circle" | "triangle" | "cross" | "line" | "dots";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export function GeometricShape({
  className,
  variant = "square",
  size = "md",
  animate = true,
}: GeometricShapeProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const baseAnimation = animate
    ? {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
      }
    : {};

  const shapes = {
    square: (
      <motion.div
        className={cn(
          sizes[size],
          "border-2 border-foreground",
          className
        )}
        {...baseAnimation}
      />
    ),
    circle: (
      <motion.div
        className={cn(
          sizes[size],
          "border-2 border-foreground rounded-full",
          className
        )}
        {...baseAnimation}
      />
    ),
    triangle: (
      <motion.div
        className={cn(
          "w-0 h-0",
          size === "sm" && "border-l-[16px] border-r-[16px] border-b-[28px]",
          size === "md" && "border-l-[32px] border-r-[32px] border-b-[56px]",
          size === "lg" && "border-l-[48px] border-r-[48px] border-b-[84px]",
          "border-l-transparent border-r-transparent border-b-foreground",
          className
        )}
        {...baseAnimation}
      />
    ),
    cross: (
      <motion.div className={cn(sizes[size], "relative", className)} {...baseAnimation}>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-foreground -translate-x-1/2" />
      </motion.div>
    ),
    line: (
      <motion.div
        className={cn(
          size === "sm" && "w-16 h-0.5",
          size === "md" && "w-32 h-0.5",
          size === "lg" && "w-48 h-0.5",
          "bg-foreground",
          className
        )}
        {...baseAnimation}
      />
    ),
    dots: (
      <motion.div className={cn("flex gap-2", className)} {...baseAnimation}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-full bg-foreground",
              size === "sm" && "w-2 h-2",
              size === "md" && "w-3 h-3",
              size === "lg" && "w-4 h-4"
            )}
          />
        ))}
      </motion.div>
    ),
  };

  return shapes[variant];
}

interface FloatingShapeProps {
  className?: string;
  children?: React.ReactNode;
}

export function FloatingShape({ className, children }: FloatingShapeProps) {
  return (
    <motion.div
      className={cn("absolute pointer-events-none", className)}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface GridPatternProps {
  className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-[0.03]",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgb(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, rgb(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

interface CornerAccentProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export function CornerAccent({ position, className }: CornerAccentProps) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <motion.div
      className={cn("absolute w-16 h-16", positions[position], className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-foreground" />
      <div className="absolute top-0 left-0 h-full w-0.5 bg-foreground" />
    </motion.div>
  );
}

interface DiagonalLinesProps {
  className?: string;
}

export function DiagonalLines({ className }: DiagonalLinesProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-[0.02]",
        className
      )}
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgb(var(--foreground)),
          rgb(var(--foreground)) 1px,
          transparent 1px,
          transparent 20px
        )`,
      }}
    />
  );
}
