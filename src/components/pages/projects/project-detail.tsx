"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  Lightbulb,
  Wrench,
  Target,
  CheckCircle,
} from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, TextReveal } from "@/components/ui/motion";
import { GeometricShape, GridPattern, CornerAccent } from "@/components/ui/shapes";
import { type Project } from "@/lib/data";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
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
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Projects</span>
            </Link>
          </FadeInView>

          {/* Badge */}
          <FadeInView delay={0.1}>
            <span className="inline-block px-3 py-1 text-sm font-mono bg-foreground text-background mb-6">
              Web3 Project
            </span>
          </FadeInView>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            <TextReveal>{project.title}</TextReveal>
          </h1>

          <FadeInView delay={0.3}>
            <div className="h-[3px] w-24 bg-foreground mb-6" />
          </FadeInView>

          {/* Tagline */}
          <FadeInView delay={0.4}>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed mb-8">
              {project.tagline}
            </p>
          </FadeInView>

          {/* Quick metrics */}
          <FadeInView delay={0.5}>
            <div className="flex flex-wrap gap-4 mb-8">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="px-4 py-2 border-2 border-foreground font-medium"
                >
                  {metric}
                </span>
              ))}
            </div>
          </FadeInView>

          {/* Links */}
          <FadeInView delay={0.6}>
            <div className="flex gap-4">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Problem / Solution / Impact Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Problem */}
            <StaggerItem>
              <div className="relative">
                <div className="w-12 h-12 border-2 border-background flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-sm tracking-widest uppercase opacity-60 mb-3">
                  The Problem
                </h3>
                <p className="text-lg leading-relaxed opacity-80">
                  {project.problem}
                </p>
              </div>
            </StaggerItem>

            {/* Solution */}
            <StaggerItem>
              <div className="relative">
                <div className="w-12 h-12 border-2 border-background flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-sm tracking-widest uppercase opacity-60 mb-3">
                  The Solution
                </h3>
                <p className="text-lg leading-relaxed opacity-80">
                  {project.solution}
                </p>
              </div>
            </StaggerItem>

            {/* Impact */}
            <StaggerItem>
              <div className="relative">
                <div className="w-12 h-12 border-2 border-background flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-sm tracking-widest uppercase opacity-60 mb-3">
                  The Impact
                </h3>
                <p className="text-lg leading-relaxed opacity-80">
                  {project.impact}
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60 flex items-center gap-2">
              <GeometricShape variant="dots" size="sm" animate={false} />
              Technology
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-12">
              Built with
            </h2>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.techStack.map((tech) => (
              <StaggerItem key={tech}>
                <motion.div
                  className="border-2 border-foreground p-6 text-center group"
                  whileHover={{
                    y: -4,
                    boxShadow: "4px 4px 0px 0px rgb(var(--shadow-color))",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="w-6 h-6 mx-auto mb-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <p className="font-medium">{tech}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t-2 border-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Interested in working together?
            </h2>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
