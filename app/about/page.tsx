import Link from "next/link";
import { FadeIn, GlassCard } from "@/components/animated";
import { experiences } from "@/lib/seed-data";

export const metadata = { title: "About | Rupesh Tonpe" };

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6">
      <FadeIn className="space-y-4">
        <h1 className="text-4xl font-semibold">About Rupesh Tonpe</h1>
        <p className="max-w-4xl text-zinc-300">
          I am a Creative Director, Graphic Designer, Video Editor, Motion Designer, and AI Creator based in Nagpur, Maharashtra with 5+ years crafting premium visual identities and performance-led creative experiences.
        </p>
        <Link href="/assets/rupesh-tonpe-resume.pdf" className="inline-flex rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-6 py-3 font-semibold">Download Resume</Link>
      </FadeIn>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["5+ Years", "150+ Projects", "40+ Clients", "3 Awards"].map((stat) => (
          <GlassCard key={stat} className="p-5 text-center text-lg font-semibold">{stat}</GlassCard>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creative Philosophy</h2>
        <GlassCard className="p-6 text-zinc-300">
          Every frame should feel intentional. I blend design thinking, storytelling, and AI acceleration to create visuals that are cinematic, conversion-focused, and culturally relevant.
        </GlassCard>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tools & Skills</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {["Photoshop","Illustrator","InDesign","After Effects","Premiere Pro","Lightroom","Figma","XD","Higgsfield.ai","Gemini","ElevenLabs"].map((tool) => (
            <div key={tool} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-zinc-300">{tool}</div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience Timeline</h2>
        <div className="space-y-3 border-l border-white/10 pl-4">
          {experiences.map((exp) => (
            <GlassCard key={exp.company} className="space-y-2 p-5">
              <p className="text-xs uppercase text-zinc-400">{exp.duration}</p>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-sm text-[#FF8C42]">{exp.role}</p>
              <p className="text-zinc-300">{exp.responsibilities}</p>
              <p className="text-sm text-zinc-400">Achievement: {exp.achievements}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
