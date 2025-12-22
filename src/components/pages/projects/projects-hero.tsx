"use client";

import { motion } from "framer-motion";
import { Folder, ArrowDown, Filter } from "lucide-react";
import { FadeInView, TextReveal } from "@/components/ui/motion";
import { GeometricShape, GridPattern, CornerAccent } from "@/components/ui/shapes";

export function ProjectsHero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">
      <GridPattern />
      <CornerAccent position="bottom-left" className="m-6 md:m-12" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Floating shapes */}
        <motion.div
          className="absolute top-10 right-20 opacity-20"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <GeometricShape variant="cross" size="lg" animate={false} />
        </motion.div>

        <FadeInView>
          <div className="flex items-center gap-3 mb-6">
            <Folder className="w-5 h-5" />
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60">
              Projects
            </span>
          </div>
        </FadeInView>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
          <TextReveal>Things I&apos;ve</TextReveal>
          <br />
          <span className="text-foreground/40">
            <TextReveal>built.</TextReveal>
          </span>
        </h1>

        <FadeInView delay={0.4}>
          <div className="h-[3px] w-24 bg-foreground mb-8" />
        </FadeInView>

        <FadeInView delay={0.5}>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
            From hackathon winners to production infrastructure. Each project 
            solves a real problem with measurable outcomes.
          </p>
        </FadeInView>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex items-center gap-2 text-foreground/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
          <span className="font-mono text-xs tracking-wider">EXPLORE</span>
        </motion.div>
      </div>
    </section>
  );
}
