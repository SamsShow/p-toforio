"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { projects } from "@/lib/data";

export function ProjectsGrid() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <motion.article
                  className="group border-2 border-foreground shadow-brutal h-full flex flex-col"
                  whileHover={{
                    y: -8,
                    boxShadow: "8px 8px 0px 0px rgb(var(--shadow-color))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project header with number */}
                  <div className="p-6 border-b-2 border-foreground flex items-center justify-between">
                    <span className="font-mono text-sm text-foreground/60">
                      Project 0{index + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 text-xs font-mono bg-foreground text-background">
                        Web3
                      </span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.tagline}</p>

                    {/* Mini metrics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span
                          key={metric}
                          className="px-2 py-1 text-xs font-mono border border-foreground/30"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="mt-auto pt-4 border-t border-foreground/20">
                      <p className="text-xs font-mono text-foreground/60 mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-sm text-foreground/80"
                          >
                            {tech}
                            {project.techStack.indexOf(tech) < Math.min(3, project.techStack.length - 1) && (
                              <span className="text-foreground/40 ml-2">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View more hint */}
        <FadeInView delay={0.5} className="mt-12 text-center">
          <p className="text-foreground/60 font-mono text-sm">
            Click any project to see full case study
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
