"use client";

import { motion } from "framer-motion";
import { Trophy, Star, DollarSign, GraduationCap } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GeometricShape } from "@/components/ui/shapes";

const achievements = [
  {
    icon: Trophy,
    title: "Aptos WinterSchool Winner",
    project: "AptosX402",
    description:
      "Built an AI-powered sentiment trading agent on Aptos using the x402 micropayments stack.",
    year: "",
    tags: ["2nd Place", "Aptos", "AI/Sentiment", "Prize $5K"],
  },
  {
    icon: Trophy,
    title: "Aptos Assembly S2",
    project: "AptosX402",
    description:
      "Selected into the Aptos Assembly Season 2 program.",
    year: "",
    tags: ["Aptos Assembly", "Cohort"],
  },
  {
    icon: Trophy,
    title: "Move AI Hackathon",
    project: "HypeFlow AI",
    description:
      "Awarded $4,000 for an autonomous AI trading agent on Aptos that optimizes DeFi portfolio management.",
    year: "",
    tags: ["3rd Place", "Aptos", "AI"],
  },
  {
    icon: DollarSign,
    title: "MSME Indeathon 4.0 Grant",
    project: "EnerXchange",
    description:
      "Secured $14,000 to accelerate deployment of a decentralized energy trading platform across microgrids.",
    year: "",
    tags: ["Grant", "Energy", "Chainlink"],
  },
  {
    icon: DollarSign,
    title: "Aptos Foundation Grant",
    project: "HypeFlow AI",
    description:
      "Received $900 to advance AI-driven trading and integrate algorithms with Aptos blockchain infrastructure.",
    year: "",
    tags: ["Grant", "Aptos"],
  },
  {
    icon: Trophy,
    title: "QuickNode BuildOn Hackathon",
    project: "GasSaverX",
    description:
      "Won $2,000 in PYUSD integrating PayPal PYUSD payments and blockchain analytics for GasSaverX.",
    year: "",
    tags: ["3rd Place", "Payments", "QuickNode"],
  },
  {
    icon: Trophy,
    title: "ideaTON by TON Society",
    project: "TONfi",
    description:
      "Earned 2nd place with a $180 prize for promoting financial innovation in the TON ecosystem.",
    year: "",
    tags: ["2nd Place", "TON", "DeFi"],
  },
  {
    icon: Trophy,
    title: "GFG HackFest",
    project: "Sustainability DApp",
    description:
      "Recognized with a $200 prize for a Web3 project focused on sustainable development.",
    year: "",
    tags: ["2nd Place", "Sustainability", "Web3"],
  },
  {
    icon: Trophy,
    title: "Aurora Hack The Spectrum",
    project: "Deva the Devcon Unicorn",
    description:
      "Won the Potential Project Award with an $80 prize as a solo contestant building on Aurora.",
    year: "",
    tags: ["Award", "Aurora", "Solo"],
  },
  {
    icon: Star,
    title: "IIT Delhi UX Hackathon",
    project: "UX Case Challenge",
    description:
      "Placed in the Top 10 among 170 teams in a rigorous two-round UX hackathon at IIT Delhi.",
    year: "",
    tags: ["Top 10", "UX", "Design"],
  },
  {
    icon: GraduationCap,
    title: "Ethereum Developer Degree",
    project: "LearnWeb3 Program",
    description:
      "Completed the comprehensive Ethereum Developer Degree, demonstrating proficiency in blockchain development.",
    year: "",
    tags: ["Certification", "Ethereum", "Web3"],
  },
];

export function AchievementsList() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <span className="font-mono text-sm tracking-widest uppercase text-foreground/60 flex items-center gap-2">
            <GeometricShape variant="triangle" size="sm" animate={false} />
            Highlights
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-12">
            Notable achievements
          </h2>
        </FadeInView>

        <StaggerContainer className="space-y-6">
          {achievements.map((achievement, index) => (
            <StaggerItem key={achievement.title}>
              <motion.div
                className="border-2 border-foreground p-6 md:p-8 shadow-brutal group"
                whileHover={{
                  y: -4,
                  boxShadow: "6px 6px 0px 0px rgb(var(--shadow-color))",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <achievement.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                    </div>

                    <p className="font-medium text-foreground/80 mb-3">
                      {achievement.project}
                    </p>

                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono border border-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Number */}
                  <span className="hidden lg:block font-mono text-6xl font-bold opacity-10">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
