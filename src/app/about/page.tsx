import { Navigation } from "@/components/navigation";
import { AboutHero } from "@/components/pages/about/about-hero";
import { AboutStory } from "@/components/pages/about/about-story";
import { AboutValues } from "@/components/pages/about/about-values";
import { AboutTimeline } from "@/components/pages/about/about-timeline";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "About — Saksham Tyagi",
  description: "The story behind the builder. Web3 founder, full-stack engineer, and design-driven developer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTimeline />
      <Footer />
    </main>
  );
}
