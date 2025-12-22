"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";
import { GeometricShape, GridPattern, CornerAccent } from "@/components/ui/shapes";
import { Cover } from "@/components/ui/cover";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden">
      <GridPattern />
      <CornerAccent position="top-left" className="m-6 md:m-12" />
      <CornerAccent position="bottom-right" className="m-6 md:m-12" />

      {/* Floating shapes */}
      <motion.div
        className="absolute bottom-32 left-10 opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <GeometricShape variant="circle" size="md" animate={false} />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-12">
          {/* Main content */}
          <motion.div
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.3 },
              },
            }}
          >
            {/* Name */}
            <motion.p
              className="font-mono text-sm tracking-widest uppercase mb-4 text-foreground/60 flex items-center gap-3"
              variants={fadeUp}
            >
              <GeometricShape variant="dots" size="sm" animate={false} />
              Saksham Tyagi
            </motion.p>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
              variants={fadeUp}
            >
              Building Web3
              <br />
              infrastructure &
              <br />
              <Cover className="text-foreground/40">premium interfaces.</Cover>
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              className="h-[3px] w-32 bg-foreground origin-left mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Positioning statement */}
            <motion.p
              className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed mb-8"
              variants={fadeUp}
            >
              Founder-engineer shipping real products. Co-founder at DonaLabs,
              Aptos Accelerator alum (AptosX402). Crafting developer tools and
              pixel-perfect experiences.
            </motion.p>

            {/* Quick links */}
            <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground font-medium hover:bg-foreground hover:text-background transition-colors group"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-4 py-2 text-foreground/70 font-medium hover:text-foreground transition-colors"
              >
                About Me
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-16 flex items-center gap-2 text-foreground/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
              <span className="font-mono text-xs tracking-wider">SCROLL</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
