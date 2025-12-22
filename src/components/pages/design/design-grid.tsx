"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Layers, Palette, Monitor, Smartphone } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { designCaseStudies, type DesignCaseStudy } from "@/lib/data";

const categoryIcons = {
  product: Layers,
  branding: Palette,
  web: Monitor,
  mobile: Smartphone,
};

const categoryLabels = {
  product: "Product Design",
  branding: "Branding",
  web: "Web Design",
  mobile: "Mobile App",
};

interface CaseStudyCardProps {
  study: DesignCaseStudy;
  index: number;
}

function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const Icon = categoryIcons[study.category];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`group relative ${isEven ? "" : "md:mt-24"}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/design/${study.id}`}>
        {/* Card */}
        <div className="relative border-2 border-foreground bg-background overflow-hidden">
          {/* Placeholder image area */}
          <div className="aspect-[4/3] bg-foreground/5 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id={`grid-${study.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill={`url(#grid-${study.id})`} />
              </svg>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-background border-2 border-foreground">
              <Icon className="w-4 h-4" />
              <span className="font-mono text-xs uppercase">{categoryLabels[study.category]}</span>
            </div>

            {/* Year badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-foreground text-background">
              <span className="font-mono text-xs">{study.year}</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </motion.div>
            </div>

            {/* Large background text */}
            <div className="absolute bottom-4 right-4 font-mono text-6xl font-bold text-foreground/5">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">
              {study.title}
            </h3>
            <p className="text-foreground/60 mb-4">{study.tagline}</p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {study.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs font-mono border border-foreground/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Shadow */}
        <div className="absolute inset-0 border-2 border-foreground bg-foreground translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}

export function DesignGrid() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Case Studies</h2>
              <p className="text-foreground/60">
                Selected work showcasing process and outcomes
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 md:gap-12" staggerDelay={0.15}>
          {designCaseStudies.map((study, index) => (
            <StaggerItem key={study.id}>
              <CaseStudyCard study={study} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
