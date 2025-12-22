import { Navigation } from "@/components/navigation";
import { ProjectsHero } from "@/components/pages/projects/projects-hero";
import { ProjectsGrid } from "@/components/pages/projects/projects-grid";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Projects — Saksham Tyagi",
  description: "Web3 products, DeFi protocols, and full-stack applications. Real projects with real impact.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
