"use client";

import { Zap, Target, Layers, Lightbulb } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GeometricShape, DiagonalLines } from "@/components/ui/shapes";

const values = [
  {
    icon: Target,
    title: "Ship, Don't Demo",
    description:
      "I build products for real users, not just prototypes. Every line of code should serve a purpose and make it to production.",
  },
  {
    icon: Layers,
    title: "Systems Thinking",
    description:
      "Good architecture outlives features. I design systems that scale, maintain themselves, and make the next developer's job easier.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "Speed is a feature. From 95+ PageSpeed scores to gas-optimized smart contracts, I sweat the details that users feel.",
  },
  {
    icon: Lightbulb,
    title: "Design-Driven",
    description:
      "Code is craft. I believe engineering and design aren't separate disciplines—the best products emerge when both are excellent.",
  },
];

export function AboutValues() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-foreground text-background relative overflow-hidden">
      <DiagonalLines className="opacity-[0.03]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-start justify-between mb-16">
          <div>
            <FadeInView>
              <span className="font-mono text-sm tracking-widest uppercase opacity-60 flex items-center gap-2">
                <GeometricShape variant="cross" size="sm" animate={false} className="[&>div]:bg-background" />
                Principles
              </span>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
                What I believe in
              </h2>
            </FadeInView>
          </div>

          <FadeInView delay={0.2} className="hidden md:block">
            <GeometricShape variant="square" size="lg" animate={false} className="border-background opacity-20" />
          </FadeInView>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <StaggerItem key={value.title}>
              <div className="group border-2 border-background/20 p-8 hover:border-background transition-colors duration-300 relative overflow-hidden">
                {/* Number */}
                <span className="absolute top-4 right-4 font-mono text-6xl font-bold opacity-10">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 border-2 border-background flex items-center justify-center mb-6 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="opacity-70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
