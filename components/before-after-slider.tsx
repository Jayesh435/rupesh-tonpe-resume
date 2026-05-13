"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10">
        <Image src={before} alt="Before" fill className="object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="relative h-full w-[100vw] max-w-none">
            <Image src={after} alt="After" fill className="object-cover" />
          </div>
        </div>
      </div>
      <input type="range" min={0} max={100} value={position} onChange={(e) => setPosition(Number(e.target.value))} className="w-full accent-[#E94560]" />
    </div>
  );
}
