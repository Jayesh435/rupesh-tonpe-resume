"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden={true}
      className="pointer-events-none fixed z-[100] hidden h-5 w-5 rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
