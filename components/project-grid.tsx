"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { GlassCard } from "./animated";

export function ProjectGrid({ initialProjects }: { initialProjects: Project[] }) {
  const [active, setActive] = useState<string>("All");
  const [visible, setVisible] = useState(6);
  const [modal, setModal] = useState<Project | null>(null);
  const categories = useMemo(() => ["All", ...Array.from(new Set(initialProjects.map((p) => p.category)))], [initialProjects]);

  const filtered = initialProjects.filter((p) => active === "All" || p.category === active);
  const shown = filtered.slice(0, visible);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setVisible(6);
            }}
            className={`rounded-full px-4 py-2 text-sm ${active === cat ? "bg-gradient-to-r from-[#E94560] to-[#FF8C42] text-white" : "bg-white/10 text-zinc-300"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {shown.map((project) => (
          <GlassCard key={project._id} className="mb-6 break-inside-avoid overflow-hidden p-2 transition hover:scale-[1.01]">
            <button onClick={() => setModal(project)} className="w-full text-left">
              <div className="relative h-60 w-full overflow-hidden rounded-xl">
                <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
              </div>
            </button>
            <div className="space-y-2 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{project.category}</p>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-zinc-300">{project.description}</p>
              <Link href={`/portfolio/${project.slug}`} className="text-sm text-[#FF8C42] hover:text-[#E94560]">
                View case study →
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="text-center">
          <button onClick={() => setVisible((v) => v + 3)} className="rounded-full border border-white/20 px-6 py-2 text-white hover:border-[#E94560]">
            Load More
          </button>
        </div>
      )}

      {modal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" onClick={() => setModal(null)}>
          <GlassCard className="max-h-[90vh] w-full max-w-4xl overflow-y-auto p-4" onClick={(event) => event.stopPropagation()}>
            <div className="relative h-80 w-full">
              <Image src={modal.coverImage} alt={modal.title} fill className="rounded-xl object-cover" />
            </div>
            <div className="space-y-3 p-4">
              <h4 className="text-2xl font-semibold text-white">{modal.title}</h4>
              <p className="text-zinc-300">{modal.description}</p>
              <div className="flex flex-wrap gap-2">
                {modal.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200">#{tag}</span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
