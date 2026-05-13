"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-40px_rgba(233,69,96,0.65)]", className)}>
      {children}
    </div>
  );
}
