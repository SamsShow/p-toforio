"use client";

import { motion } from "framer-motion";
import { Download, Zap, Trophy, Users, LucideIcon } from "lucide-react";
import { FadeInView } from "@/components/ui/motion";
import { stats } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  download: Download,
  trophy: Trophy,
  zap: Zap,
  users: Users,
};

export function AchievementsStats() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 border-y-2 border-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <FadeInView key={stat.label} delay={index * 0.1}>
                <motion.div
                  className="text-center group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <motion.p
                    className="font-mono text-4xl md:text-5xl font-bold mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="font-medium mb-1">{stat.label}</p>
                  <p className="text-sm text-foreground/60">{stat.description}</p>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
