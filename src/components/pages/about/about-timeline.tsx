"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, LucideIcon } from "lucide-react";
import { FadeInView } from "@/components/ui/motion";
import { GeometricShape } from "@/components/ui/shapes";
import { timelineEvents } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  award: Award,
  graduation: GraduationCap,
};

export function AboutTimeline() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <span className="font-mono text-sm tracking-widest uppercase text-foreground/60 flex items-center gap-2">
            <GeometricShape variant="line" size="sm" animate={false} />
            Journey
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-16">
            The path so far
          </h2>
        </FadeInView>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/20 -translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = iconMap[event.icon];
              return (
                <FadeInView
                  key={index}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <div
                    className={`flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                      } pl-12 md:pl-0`}
                    >
                      <span className="font-mono text-sm text-foreground/60">{event.year}</span>
                      <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
                      <p className="text-foreground/70">{event.description}</p>
                    </div>

                    {/* Icon node */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-foreground bg-background flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Empty space for alignment */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeInView>
              );
            })}
          </div>

          {/* End dot */}
          <motion.div
            className="absolute left-0 md:left-1/2 -bottom-4 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
