"use client";

import { motion } from "framer-motion";
import { Trophy, Star, DollarSign, GraduationCap, LucideIcon } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GeometricShape } from "@/components/ui/shapes";
import { achievements } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  dollar: DollarSign,
  star: Star,
  graduation: GraduationCap,
};

export function AchievementsList() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <span className="font-mono text-sm tracking-widest uppercase text-foreground/60 flex items-center gap-2">
            <GeometricShape variant="triangle" size="sm" animate={false} />
            Highlights
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-12">
            Notable achievements
          </h2>
        </FadeInView>

        <StaggerContainer className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <StaggerItem key={achievement.title}>
                <motion.div
                  className="border-2 border-foreground p-6 md:p-8 shadow-brutal group"
                  whileHover={{
                    y: -4,
                    boxShadow: "6px 6px 0px 0px rgb(var(--shadow-color))",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                      </div>

                      <p className="font-medium text-foreground/80 mb-3">
                        {achievement.project}
                      </p>

                      <p className="text-foreground/70 mb-4 leading-relaxed">
                        {achievement.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {achievement.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-mono border border-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Number */}
                    <span className="hidden lg:block font-mono text-6xl font-bold opacity-10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
