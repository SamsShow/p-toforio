"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, User } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { GeometricShape, CornerAccent } from "@/components/ui/shapes";

export function About() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 relative" id="about">
      <CornerAccent position="top-right" className="m-6 md:m-12 opacity-30" />

      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-foreground/60" />
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60">
              About
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Founder. Engineer. Builder.
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main content card */}
          <FadeInView delay={0.2}>
            <Card className="h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-5">
                <GeometricShape variant="circle" size="lg" animate={false} />
              </div>
              <div className="relative z-10">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  I build products that ship. Not demos. Not proofs of concept.
                  Real infrastructure that developers use every day.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Aptos Accelerator alum (AptosX402) leading DonaLabs where
                  we&apos;re building x402 — a micropayments protocol with 400+
                  weekly downloads. Before that, I shipped location-based
                  rewards platforms, optimized frontends to 95+ PageSpeed, and
                  led design systems from zero.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I care about craft. Clean code. Intentional interfaces.
                  Systems that scale.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4 group"
                >
                  Read full story
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </Card>
          </FadeInView>

          {/* Stats card */}
          <FadeInView delay={0.3} direction="left">
            <Card className="h-full bg-foreground text-background" hover={false}>
              <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="group">
                    <motion.p
                      className="font-mono text-4xl font-bold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      400+
                    </motion.p>
                    <p className="text-background/60 text-sm mt-1">
                      Weekly protocol downloads
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <motion.p
                      className="font-mono text-4xl font-bold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      95+
                    </motion.p>
                    <p className="text-background/60 text-sm mt-1">
                      PageSpeed scores
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <motion.p
                      className="font-mono text-4xl font-bold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      7+
                    </motion.p>
                    <p className="text-background/60 text-sm mt-1">
                      Hackathon wins
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <motion.p
                      className="font-mono text-4xl font-bold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      4+
                    </motion.p>
                    <p className="text-background/60 text-sm mt-1">
                      Web3 products shipped
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </Card>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
