import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { ProjectDetail } from "@/components/pages/projects/project-detail";
import { Footer } from "@/components/sections/footer";
import { projects } from "@/lib/data";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Saksham Tyagi`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
