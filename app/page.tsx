import Link from "next/link";
import Image from "next/image";
import { FadeIn, GlassCard } from "@/components/animated";
import { getProjects, getServices, getSettings, getTestimonials } from "@/lib/data";

export default async function HomePage() {
  const [projects, services, testimonials, settings] = await Promise.all([getProjects(), getServices(), getTestimonials(), getSettings()]);
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-4 py-10 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,69,96,0.18),transparent_45%)]" />
        <FadeIn className="relative z-10 max-w-4xl space-y-5">
          <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">● Available for select projects</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-7xl">{settings?.homeHeadline}</h1>
          <p className="max-w-2xl text-lg text-zinc-300">{settings?.homeSubheadline}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/portfolio" className="rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-6 py-3 font-semibold">View Works</Link>
            <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold">Let&apos;s Collaborate</Link>
          </div>
          <div className="flex gap-4 text-sm text-zinc-300">
            <a href="https://www.instagram.com/rupeshtonpe/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.behance.net/rupeshtonpe" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://www.linkedin.com/in/rupesh-tonpe/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </FadeIn>
      </section>

      <section className="overflow-hidden whitespace-nowrap rounded-2xl border border-white/10 bg-black/40 py-4">
        <div className="marquee-track flex gap-12 text-sm uppercase tracking-[0.2em] text-zinc-300">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 px-8">
              <span>Creative Direction</span><span>AI Ads</span><span>Branding</span><span>Motion Graphics</span><span>Video Editing</span><span>UI/UX</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Trusted by forward-thinking brands</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {["MyAyur", "VisualineSpace", "AMH", "Pallavi Goenka", "Digi Direct"].map((logo) => (
            <GlassCard key={logo} className="p-5 text-center text-zinc-300">{logo}</GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Featured Works</h2>
          <Link href="/portfolio" className="text-[#FF8C42]">Explore all →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, idx) => (
            <FadeIn key={project._id} delay={idx * 0.08}>
              <GlassCard className="overflow-hidden p-2">
                <div className="relative h-64 w-full overflow-hidden rounded-xl">
                  <Image src={project.coverImage} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="space-y-2 p-4">
                  <p className="text-xs uppercase text-zinc-400">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-zinc-300">{project.description}</p>
                  <Link href={`/portfolio/${project.slug}`} className="text-sm text-[#E94560]">View project</Link>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[{ n: "5+", t: "Years Experience" }, { n: "150+", t: "Projects Delivered" }, { n: "40+", t: "Happy Clients" }].map((item) => (
          <GlassCard key={item.t} className="p-6 text-center">
            <p className="text-4xl font-bold text-[#FF8C42]">{item.n}</p>
            <p className="mt-2 text-zinc-300">{item.t}</p>
          </GlassCard>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <GlassCard className="space-y-4 p-6">
          <h3 className="text-2xl font-semibold">Showreel Preview</h3>
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/9No-FiEInLA" title="Reel" allowFullScreen />
          </div>
        </GlassCard>
        <GlassCard className="space-y-4 p-6">
          <h3 className="text-2xl font-semibold">AI Toolkit</h3>
          <ul className="space-y-2 text-zinc-300">
            <li>Higgsfield.ai</li>
            <li>Gemini</li>
            <li>ElevenLabs</li>
          </ul>
        </GlassCard>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold">Skills Showcase</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {["Photoshop","Illustrator","InDesign","After Effects","Premiere Pro","Lightroom","XD","Figma","UI/UX","Branding","Motion Graphics","Social Media Design","Packaging","Ad Scripting"].map((skill) => (
            <div key={skill} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">{skill}</div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold">Services Snapshot</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <GlassCard key={service._id} className="space-y-3 p-5">
              <h3 className="font-semibold">{service.name}</h3>
              <p className="text-sm text-zinc-300">{service.description}</p>
              <p className="text-sm text-[#FF8C42]">From {service.pricingFrom}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t._id} className="space-y-3 p-5">
              <p className="text-zinc-200">“{t.quote}”</p>
              <p className="text-sm text-zinc-400">{t.name} · {t.role}, {t.company}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
