"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  inverted?: boolean;
}

export function ProjectCard({ project, inverted = false }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define color classes based on inverted prop
  const borderColor = inverted ? "border-background" : "border-foreground";
  const bgColor = inverted ? "bg-foreground" : "bg-background";
  const textColor = inverted ? "text-background" : "text-foreground";
  const textMuted = inverted ? "text-background/70" : "text-foreground/70";
  const textMuted60 = inverted ? "text-background/60" : "text-foreground/60";
  const textMuted80 = inverted ? "text-background/80" : "text-foreground/80";
  const shadowStyle = inverted
    ? "shadow-[4px_4px_0px_0px_rgb(var(--background))]"
    : "shadow-brutal";
  const shadowHoverStyle = inverted
    ? "6px 6px 0px 0px rgb(var(--background))"
    : "6px 6px 0px 0px rgb(var(--shadow-color))";

  return (
    <motion.div
      className={cn(
        "border-2",
        borderColor,
        bgColor,
        shadowStyle,
        "transition-shadow duration-200",
        "overflow-hidden"
      )}
      whileHover={
        !isExpanded
          ? {
              y: -4,
              boxShadow: shadowHoverStyle,
            }
          : {}
      }
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset",
          inverted ? "focus-visible:ring-background" : "focus-visible:ring-foreground"
        )}
        aria-expanded={isExpanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className={cn("text-xl font-bold", textColor)}>{project.title}</h3>
              <span
                className={cn(
                  "px-2 py-0.5 text-xs font-mono",
                  inverted ? "bg-background text-foreground" : "bg-foreground text-background"
                )}
              >
                Web3
              </span>
            </div>
            <p className={textMuted}>{project.tagline}</p>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="shrink-0 mt-1"
          >
            <ChevronDown className={cn("w-5 h-5", textMuted60)} />
          </motion.div>
        </div>

        {/* Tech stack - Always visible */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={cn(
                "px-2 py-0.5 text-xs font-mono border",
                borderColor,
                textColor
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className={cn("px-6 pb-6 border-t-2 pt-6", inverted ? "border-background/20" : "border-foreground/20")}>
              {/* Problem → Solution → Impact */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className={cn("font-mono text-xs uppercase tracking-wider mb-1", textMuted60)}>
                    Problem
                  </p>
                  <p className={cn("text-sm", textMuted80)}>{project.problem}</p>
                </div>
                <div>
                  <p className={cn("font-mono text-xs uppercase tracking-wider mb-1", textMuted60)}>
                    Solution
                  </p>
                  <p className={cn("text-sm", textMuted80)}>{project.solution}</p>
                </div>
                <div>
                  <p className={cn("font-mono text-xs uppercase tracking-wider mb-1", textMuted60)}>
                    Impact
                  </p>
                  <p className={cn("text-sm", textMuted80)}>{project.impact}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium",
                      inverted ? "bg-background text-foreground" : "bg-foreground text-background"
                    )}
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && (
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4", textColor)}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4", textColor)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
