"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Folder, ArrowUpRight } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ProjectCard } from "./project-card";
import { GeometricShape, DiagonalLines } from "@/components/ui/shapes";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-foreground text-background relative overflow-hidden" id="projects">
      <DiagonalLines className="opacity-[0.02]" />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 right-20 opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-32 h-32 border-2 border-background" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInView>
          <div className="flex items-center gap-3 mb-4">
            <Folder className="w-5 h-5 opacity-60" />
            <span className="font-mono text-sm tracking-widest uppercase opacity-60">
              Projects
            </span>
          </div>
        </FadeInView>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <FadeInView delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What I&apos;ve built.
              </h2>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="opacity-70 max-w-xl">
                Web3 products with real users, real metrics, and real outcomes.
                Click to expand.
              </p>
            </FadeInView>
          </div>

          <FadeInView delay={0.3}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-background font-medium hover:bg-background hover:text-foreground transition-colors group"
            >
              View All
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </FadeInView>
        </div>

        {/* Project cards */}
        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} inverted />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
