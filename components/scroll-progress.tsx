"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return <motion.div className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-[#E94560] to-[#FF8C42]" style={{ scaleX }} />;
}
