"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Code, Palette } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GeometricShape } from "@/components/ui/shapes";
import { experiences, type Experience } from "@/lib/data";

const typeIcons = {
  web3: Code,
  web2: Building2,
  design: Palette,
};

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const typeColors = {
    web3: "bg-foreground text-background",
    web2: "border border-foreground text-foreground bg-transparent",
    design: "border border-foreground text-foreground bg-transparent",
  };

  const typeLabels = {
    web3: "Web3",
    web2: "Web2",
    design: "Design",
  };

  const Icon = typeIcons[experience.type];

  return (
    <motion.div
      className="border-2 border-foreground shadow-brutal p-6 group relative overflow-hidden"
      whileHover={{
        y: -4,
        boxShadow: "6px 6px 0px 0px rgb(var(--shadow-color))",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Background number */}
      <span className="absolute top-4 right-4 font-mono text-6xl font-bold opacity-5">
        0{index + 1}
      </span>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold">{experience.role}</h3>
              <span
                className={`px-2 py-0.5 text-xs font-mono ${typeColors[experience.type]}`}
              >
                {typeLabels[experience.type]}
              </span>
            </div>
            <p className="text-foreground/80 font-medium">{experience.company}</p>
          </div>
          <p className="font-mono text-sm text-foreground/60 shrink-0">
            {experience.period}
          </p>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.highlights.map((highlight, idx) => (
            <motion.li
              key={idx}
              className="text-foreground/70 text-sm flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-foreground/40 mt-1">→</span>
              {highlight}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 relative" id="experience">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-foreground/60" />
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60">
              Experience
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Where I&apos;ve shipped.
          </h2>
        </FadeInView>

        {/* Experience cards */}
        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {experiences.map((experience, index) => (
            <StaggerItem key={experience.id}>
              <ExperienceCard experience={experience} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
