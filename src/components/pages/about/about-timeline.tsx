"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { FadeInView } from "@/components/ui/motion";
import { GeometricShape } from "@/components/ui/shapes";

const timelineEvents = [
  {
    year: "2024",
    title: "Co-founded DonaLabs",
    description: "Aptos Accelerator alum (AptosX402). Building x402 micropayments protocol with 400+ weekly downloads.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024",
    title: "Hackathon Wins",
    description: "Won at Aptos Hackathon with HypeFlow AI. ETHGlobal finalist with EnerXchange.",
    icon: Award,
    type: "achievement",
  },
  {
    year: "2023",
    title: "Full Stack at Rewardsy",
    description: "Built location-based rewards platform handling 10K+ daily transactions.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    description: "Stealth startup. Delivered 95+ PageSpeed scores and pixel-perfect implementations.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2022",
    title: "Lead UI/UX Designer",
    description: "IKnowSpots. Built design system from scratch, improved conversion by 25%.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2021",
    title: "Started Coding Journey",
    description: "Fell in love with building. First projects in React and Node.js.",
    icon: GraduationCap,
    type: "education",
  },
];

export function AboutTimeline() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <span className="font-mono text-sm tracking-widest uppercase text-foreground/60 flex items-center gap-2">
            <GeometricShape variant="line" size="sm" animate={false} />
            Journey
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-16">
            The path so far
          </h2>
        </FadeInView>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/20 -translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <FadeInView
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    } pl-12 md:pl-0`}
                  >
                    <span className="font-mono text-sm text-foreground/60">{event.year}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
                    <p className="text-foreground/70">{event.description}</p>
                  </div>

                  {/* Icon node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-foreground bg-background flex items-center justify-center">
                    <event.icon className="w-5 h-5" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              </FadeInView>
            ))}
          </div>

          {/* End dot */}
          <motion.div
            className="absolute left-0 md:left-1/2 -bottom-4 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
