"use client";

import { motion } from "framer-motion";
import { ArrowDown, User, Code, Palette } from "lucide-react";
import { FadeInView, TextReveal } from "@/components/ui/motion";
import { GeometricShape, GridPattern, CornerAccent } from "@/components/ui/shapes";

export function AboutHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">
      <GridPattern />
      <CornerAccent position="top-left" className="m-6 md:m-12" />
      <CornerAccent position="bottom-right" className="m-6 md:m-12" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Floating shapes */}
        <motion.div
          className="absolute -top-10 right-0 md:right-20 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <GeometricShape variant="square" size="lg" animate={false} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 -left-10 opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <GeometricShape variant="circle" size="md" animate={false} />
        </motion.div>

        <FadeInView>
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5" />
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60">
              About Me
            </span>
          </div>
        </FadeInView>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
          <TextReveal>Builder.</TextReveal>
          <br />
          <TextReveal>Founder.</TextReveal>
          <br />
          <span className="text-foreground/40">
            <TextReveal>Engineer.</TextReveal>
          </span>
        </h1>

        <FadeInView delay={0.4}>
          <div className="h-[3px] w-24 bg-foreground mb-8" />
        </FadeInView>

        <FadeInView delay={0.5}>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
            I build products that matter. From Web3 infrastructure to pixel-perfect 
            interfaces, I focus on shipping real solutions that people actually use.
          </p>
        </FadeInView>

        <FadeInView delay={0.6} className="mt-12">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 px-4 py-2 border-2 border-foreground">
              <Code className="w-5 h-5" />
              <span className="font-mono text-sm">Full-Stack</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 border-2 border-foreground">
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-lg font-bold">W3</span>
              </div>
              <span className="font-mono text-sm">Web3</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 border-2 border-foreground">
              <Palette className="w-5 h-5" />
              <span className="font-mono text-sm">UI/UX</span>
            </div>
          </div>
        </FadeInView>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
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
          <span className="font-mono text-xs tracking-wider">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
