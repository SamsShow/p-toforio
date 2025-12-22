"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GeometricShape } from "@/components/ui/shapes";

export function AboutStory() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Story */}
          <div>
            <FadeInView>
              <span className="font-mono text-sm tracking-widest uppercase text-foreground/60 flex items-center gap-2">
                <GeometricShape variant="dots" size="sm" animate={false} />
                My Story
              </span>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-8">
                From curiosity to building at scale
              </h2>
            </FadeInView>

            <StaggerContainer className="space-y-6 text-foreground/80 leading-relaxed">
              <StaggerItem>
                <p>
                  My journey started with a simple question: <em>How do things work?</em> 
                  That curiosity led me from tinkering with websites as a teenager to 
                  building Web3 infrastructure used by developers worldwide.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p>
                  I don&apos;t just write code—I ship products. There&apos;s a difference. 
                  Anyone can build a demo. I focus on creating solutions that solve real 
                  problems, handle real traffic, and make real impact.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p>
                  Today, as co-founder of DonaLabs and an Aptos Accelerator alum (AptosX402), 
                  I&apos;m building the next generation of Web3 developer tools. Our x402 
                  protocol already has 400+ weekly downloads and growing.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p>
                  But Web3 is only half the story. I&apos;ve shipped location-based reward 
                  platforms, scaled frontends to 10K+ daily transactions, and led design 
                  systems from zero. I believe great products live at the intersection 
                  of engineering excellence and design craft.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right column - Quote & Stats */}
          <div className="lg:sticky lg:top-32">
            <FadeInView direction="left">
              <div className="border-2 border-foreground p-8 shadow-brutal relative">
                <Quote className="w-10 h-10 text-foreground/20 absolute -top-5 -left-5 bg-background" />
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  &ldquo;I care about craft. Clean code. Intentional interfaces. 
                  Systems that scale.&rdquo;
                </blockquote>
                <div className="h-[2px] w-16 bg-foreground mb-4" />
                <p className="font-mono text-sm text-foreground/60">Personal philosophy</p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <FadeInView delay={0.2}>
                <div className="border-2 border-foreground p-6 text-center">
                  <p className="font-mono text-4xl font-bold">3+</p>
                  <p className="text-sm text-foreground/60 mt-2">Years Building</p>
                </div>
              </FadeInView>
              <FadeInView delay={0.3}>
                <div className="border-2 border-foreground p-6 text-center">
                  <p className="font-mono text-4xl font-bold">10+</p>
                  <p className="text-sm text-foreground/60 mt-2">Products Shipped</p>
                </div>
              </FadeInView>
              <FadeInView delay={0.4}>
                <div className="border-2 border-foreground p-6 text-center">
                  <p className="font-mono text-4xl font-bold">400+</p>
                  <p className="text-sm text-foreground/60 mt-2">Weekly Downloads</p>
                </div>
              </FadeInView>
              <FadeInView delay={0.5}>
                <div className="border-2 border-foreground p-6 text-center">
                  <p className="font-mono text-4xl font-bold">7+</p>
                  <p className="text-sm text-foreground/60 mt-2">Hackathon Wins</p>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
