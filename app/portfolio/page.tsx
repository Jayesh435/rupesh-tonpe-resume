import { ProjectGrid } from "@/components/project-grid";
import { getProjects } from "@/lib/data";

export const metadata = { title: "Portfolio | Rupesh Tonpe" };

export default async function PortfolioPage() {
  const projects = await getProjects({ publishedOnly: true });

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-semibold">Portfolio Works</h1>
      <p className="max-w-3xl text-zinc-300">Explore branding, motion graphics, social media, packaging, AI ads, UI/UX and video editing case studies.</p>
      <ProjectGrid initialProjects={projects as any} />
    </div>
  );
}
