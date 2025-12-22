import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { DesignHero } from "@/components/pages/design/design-hero";
import { DesignGrid } from "@/components/pages/design/design-grid";
import { DesignProcess } from "@/components/pages/design/design-process";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Design — Saksham Tyagi",
  description:
    "UI/UX design case studies showcasing product design, branding, and interface work.",
};

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <DesignHero />
      <DesignGrid />
      <DesignProcess />
      <Footer />
    </main>
  );
}
