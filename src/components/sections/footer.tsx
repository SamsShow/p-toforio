"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Send, ArrowUpRight } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GeometricShape, GridPattern } from "@/components/ui/shapes";
import { socialLinks, siteConfig } from "@/lib/data";

const links = [
  {
    label: "GitHub",
    href: socialLinks.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: socialLinks.twitter,
    icon: Twitter,
  },
  {
    label: "Email",
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-24 border-t-2 border-foreground relative overflow-hidden">
      <GridPattern className="opacity-[0.02]" />

      {/* Decorative corner shapes */}
      <GeometricShape
        variant="circle"
        className="absolute -top-16 -right-16 w-32 h-32 opacity-5"
      />
      <GeometricShape
        variant="square"
        className="absolute bottom-8 right-8 w-8 h-8 opacity-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInView>
          <div className="flex items-center gap-3 mb-4">
            <Send className="w-5 h-5 text-foreground/60" />
            <span className="font-mono text-sm tracking-widest uppercase text-foreground/60">
              Contact
            </span>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Let&apos;s build something.
          </h2>
        </FadeInView>

        {/* Links */}
        <StaggerContainer className="flex flex-wrap gap-6 mb-16" staggerDelay={0.1}>
          {links.map((link) => (
            <StaggerItem key={link.label}>
              <motion.a
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground/20 text-foreground/80 hover:text-foreground hover:border-foreground hover:shadow-brutal-sm transition-all duration-200 group"
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Copyright */}
        <FadeInView delay={0.4}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-foreground/20">
            <p className="font-mono text-xs text-foreground/40">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="font-mono text-xs text-foreground/40">
              Built with Next.js, Tailwind, and Framer Motion.
            </p>
          </div>
        </FadeInView>
      </div>
    </footer>
  );
}
