"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  Palette,
  Monitor,
  Smartphone,
  Lightbulb,
  Target,
  CheckCircle,
  Wrench,
} from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GridPattern, CornerAccent, DiagonalLines } from "@/components/ui/shapes";
import { type DesignCaseStudy } from "@/lib/data";

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

interface CaseStudyDetailProps {
  study: DesignCaseStudy;
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const CategoryIcon = categoryIcons[study.category];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">
        <GridPattern />
        <CornerAccent position="top-left" className="m-6 md:m-12" />
        <CornerAccent position="bottom-right" className="m-6 md:m-12" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Back link */}
          <FadeInView>
            <Link
              href="/design"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Design</span>
            </Link>
          </FadeInView>

          {/* Category & Year */}
          <FadeInView delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono bg-foreground text-background">
                <CategoryIcon className="w-4 h-4" />
                {categoryLabels[study.category]}
              </span>
              <span className="font-mono text-sm text-foreground/60">{study.year}</span>
            </div>
          </FadeInView>

          {/* Title */}
          <FadeInView delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {study.title}
            </h1>
          </FadeInView>

          {/* Tagline */}
          <FadeInView delay={0.3}>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mb-8">
              {study.tagline}
            </p>
          </FadeInView>

          {/* Meta info */}
          <FadeInView delay={0.4}>
            <div className="flex flex-wrap gap-8">
              {study.client && (
                <div>
                  <p className="font-mono text-xs uppercase text-foreground/40 mb-1">Client</p>
                  <p className="font-medium">{study.client}</p>
                </div>
              )}
              <div>
                <p className="font-mono text-xs uppercase text-foreground/40 mb-1">Tools</p>
                <p className="font-medium">{study.tools.join(", ")}</p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <div className="aspect-[16/9] border-2 border-foreground bg-foreground/5 relative overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="hero-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                      <path d="M 5 0 L 0 0 0 5" fill="none" stroke="currentColor" strokeWidth="0.25" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#hero-grid)" />
                </svg>
              </div>

              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-mono text-foreground/30 text-sm">Project Preview</p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-foreground/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-foreground/20" />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t-2 border-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeInView>
              <div>
                <h2 className="font-mono text-sm uppercase tracking-widest text-foreground/60 mb-4">
                  Overview
                </h2>
              </div>
            </FadeInView>
            <FadeInView delay={0.1} className="md:col-span-2">
              <p className="text-lg leading-relaxed text-foreground/80">
                {study.overview}
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Challenge, Approach, Outcome */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-foreground text-background relative overflow-hidden">
        <DiagonalLines className="opacity-[0.02]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <StaggerContainer className="grid md:grid-cols-3 gap-12" staggerDelay={0.15}>
            {/* Challenge */}
            <StaggerItem>
              <motion.div
                className="relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border-2 border-background flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">Challenge</h3>
                </div>
                <p className="text-background/70 leading-relaxed">
                  {study.challenge}
                </p>
              </motion.div>
            </StaggerItem>

            {/* Approach */}
            <StaggerItem>
              <motion.div
                className="relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border-2 border-background flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">Approach</h3>
                </div>
                <p className="text-background/70 leading-relaxed">
                  {study.approach}
                </p>
              </motion.div>
            </StaggerItem>

            {/* Outcome */}
            <StaggerItem>
              <motion.div
                className="relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border-2 border-background flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">Outcome</h3>
                </div>
                <p className="text-background/70 leading-relaxed">
                  {study.outcome}
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Tools Used */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t-2 border-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="font-mono text-sm uppercase tracking-widest text-foreground/60 mb-8">
              Tools & Technologies
            </h2>
          </FadeInView>

          <StaggerContainer className="flex flex-wrap gap-4" staggerDelay={0.05}>
            {study.tools.map((tool) => (
              <StaggerItem key={tool}>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 border-2 border-foreground"
                  whileHover={{ x: 2, y: -2, boxShadow: "4px 4px 0 0 rgb(var(--foreground))" }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">{tool}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t-2 border-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Like what you see?
            </h2>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">
              I&apos;m always excited to discuss new design challenges and opportunities.
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/design"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                View More Work
              </Link>
              <Link
                href="https://t.me/samscasm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
