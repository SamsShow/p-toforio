import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { CaseStudyDetail } from "@/components/pages/design/case-study-detail";
import { Footer } from "@/components/sections/footer";
import { designCaseStudies } from "@/lib/data";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return designCaseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = designCaseStudies.find((s) => s.id === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} — Saksham Tyagi`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = designCaseStudies.find((s) => s.id === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <CaseStudyDetail study={study} />
      <Footer />
    </main>
  );
}
