import { Navigation } from "@/components/navigation";
import { AchievementsHero } from "@/components/pages/achievements/achievements-hero";
import { AchievementsList } from "@/components/pages/achievements/achievements-list";
import { AchievementsStats } from "@/components/pages/achievements/achievements-stats";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Achievements — Saksham Tyagi",
  description: "Hackathon wins, milestones, and recognitions from building in Web3 and beyond.",
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AchievementsHero />
      <AchievementsStats />
      <AchievementsList />
      <Footer />
    </main>
  );
}
