"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { DiagonalLines } from "@/components/ui/shapes";

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description:
      "Understanding users, market, and constraints through interviews, analytics, and competitive analysis.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Iterating from wireframes to high-fidelity prototypes with continuous feedback loops.",
  },
  {
    icon: Code,
    title: "Build",
    description:
      "Collaborating closely with engineering to ensure pixel-perfect implementation.",
  },
  {
    icon: Rocket,
    title: "Ship & Learn",
    description:
      "Launching fast, measuring impact, and iterating based on real user data.",
  },
];

export function DesignProcess() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-foreground text-background relative overflow-hidden">
      <DiagonalLines className="opacity-[0.02]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="font-mono text-sm tracking-widest uppercase opacity-60 mb-4 block">
              How I Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Design Process</h2>
          </div>
        </FadeInView>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {processSteps.map((step, index) => (
            <StaggerItem key={step.title}>
              <motion.div
                className="relative h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step number */}
                <div className="absolute -top-2 -left-2 font-mono text-5xl font-bold opacity-10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 border-2 border-background flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (except last) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-full ml-6 top-8 w-16 h-[2px] bg-background/25">
                    <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-2 h-2 bg-background/50 rotate-45" />
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tools section */}
        <FadeInView delay={0.4}>
          <div className="mt-20 pt-12 border-t border-background/20 text-center">
            <p className="font-mono text-sm uppercase tracking-widest opacity-60 mb-6">
              Tools I Use
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Figma", "Framer", "After Effects", "Principle", "Illustrator", "Maze", "Notion"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-background/30 text-sm font-mono hover:bg-background hover:text-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
