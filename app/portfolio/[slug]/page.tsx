import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { GlassCard } from "@/components/animated";
import { getProjectBySlug, getProjects } from "@/lib/data";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = (await getProjectBySlug(slug)) as any;
  if (!project) notFound();
  const related = ((await getProjects()) as any[]).filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{project.category}</p>
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <p className="text-zinc-300">{project.description}</p>
        <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {project.images.map((img: string, idx: number) => (
          <div key={img + idx} className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10">
            <Image src={img} alt={`${project.title} ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <GlassCard className="space-y-3 p-6">
          <h2 className="text-2xl font-semibold">Before / After</h2>
          <BeforeAfterSlider before={project.images[0] || project.coverImage} after={project.images[1] || project.coverImage} />
        </GlassCard>
        <GlassCard className="space-y-3 p-6">
          <h2 className="text-2xl font-semibold">Video Embed</h2>
          {project.videos.map((video: string) => (
            <div key={video} className="aspect-video overflow-hidden rounded-xl">
              <iframe className="h-full w-full" src={video} title={project.title} allowFullScreen />
            </div>
          ))}
        </GlassCard>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <GlassCard className="space-y-2 p-5"><h3 className="font-semibold">Process</h3><p className="text-sm text-zinc-300">{project.process}</p></GlassCard>
        <GlassCard className="space-y-2 p-5"><h3 className="font-semibold">Challenges</h3><p className="text-sm text-zinc-300">{project.challenges}</p></GlassCard>
        <GlassCard className="space-y-2 p-5"><h3 className="font-semibold">Results</h3><p className="text-sm text-zinc-300">{project.results}</p></GlassCard>
      </section>

      <GlassCard className="space-y-2 p-5">
        <h3 className="font-semibold">Client Testimonial</h3>
        <p className="text-zinc-300">“{project.testimonial}”</p>
      </GlassCard>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Related Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#E94560]">
              <p className="text-sm text-zinc-400">{item.category}</p>
              <p className="font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
