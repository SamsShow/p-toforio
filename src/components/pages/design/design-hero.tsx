"use client";

import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";
import { FadeInView } from "@/components/ui/motion";
import { GridPattern, CornerAccent, GeometricShape } from "@/components/ui/shapes";

export function DesignHero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">
      <GridPattern />
      <CornerAccent position="top-left" className="m-6 md:m-12" />
      <CornerAccent position="bottom-right" className="m-6 md:m-12" />

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-32 right-20 opacity-10"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <GeometricShape variant="cross" size="lg" animate={false} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 opacity-5"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-48 h-48 border-2 border-foreground rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Label */}
        <FadeInView>
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-5 h-5 text-foreground/60" />
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60">
              UI/UX Design
            </span>
          </div>
        </FadeInView>

        {/* Main heading */}
        <div className="mb-8">
          <FadeInView>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Crafting experiences
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              that feel right.
            </h1>
          </FadeInView>
        </div>

        {/* Description */}
        <FadeInView delay={0.6}>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8">
            From Web3 dashboards to brand identities — design work that solves
            real problems and creates meaningful connections between products and people.
          </p>
        </FadeInView>

        {/* Stats row */}
        <FadeInView delay={0.8}>
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-foreground/40" />
              <div>
                <p className="font-mono text-2xl font-bold">4+</p>
                <p className="text-sm text-foreground/60">Case Studies</p>
              </div>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold">3</p>
              <p className="text-sm text-foreground/60">Years Experience</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold">20+</p>
              <p className="text-sm text-foreground/60">Projects Shipped</p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
