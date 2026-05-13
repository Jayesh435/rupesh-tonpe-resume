import { experiences } from "@/lib/seed-data";
import { GlassCard } from "@/components/animated";

export const metadata = { title: "Experience | Rupesh Tonpe" };

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-semibold">Experience Timeline</h1>
      <div className="relative space-y-4 before:absolute before:left-2 before:top-0 before:h-full before:w-px before:bg-white/20">
        {experiences.map((exp) => (
          <GlassCard key={exp.company} className="relative ml-8 space-y-3 p-6">
            <span className="absolute -left-8 top-7 h-4 w-4 rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42]" />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{exp.duration}</p>
            <h2 className="text-2xl font-semibold">{exp.company}</h2>
            <p className="text-[#FF8C42]">{exp.role}</p>
            <p className="text-zinc-300">{exp.responsibilities}</p>
            <p className="text-sm text-zinc-400">Achievement: {exp.achievements}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
