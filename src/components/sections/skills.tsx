"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GeometricShape, DiagonalLines } from "@/components/ui/shapes";
import { skills } from "@/lib/data";

const categoryIcons = {
  "Web3": "triangle",
  "Frontend": "square",
  "Tooling": "circle",
} as const;

export function Skills() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden" id="skills">
      <DiagonalLines className="opacity-[0.02]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInView>
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-5 h-5 text-foreground/60" />
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60">
              Skills
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            What I work with.
          </h2>
        </FadeInView>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, catIndex) => (
            <FadeInView
              key={category.title}
              delay={catIndex * 0.15}
              direction={catIndex === 0 ? "right" : catIndex === 2 ? "left" : "up"}
            >
              <div className="border-2 border-foreground p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <GeometricShape
                    variant={categoryIcons[category.title as keyof typeof categoryIcons] || "square"}
                    size="sm"
                    animate={false}
                  />
                  <h3 className="font-mono text-sm tracking-widest uppercase">
                    {category.title}
                  </h3>
                </div>
                <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill}>
                      <motion.div
                        className="flex items-center gap-3 py-2 border-b border-foreground/10 group cursor-default"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="w-4 h-4 text-foreground/30 group-hover:text-foreground transition-colors" />
                        <span className="text-foreground/80 text-sm group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
