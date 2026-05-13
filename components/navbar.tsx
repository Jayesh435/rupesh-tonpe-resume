"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/portfolio", "Portfolio"],
  ["/services", "Services"],
  ["/experience", "Experience"],
  ["/contact", "Contact"],
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          Rupesh Tonpe
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link key={href} href={href} className="relative px-4 py-2 text-sm text-zinc-200">
                {active && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#E94560]/30 to-[#FF8C42]/30"
                  />
                )}
                {label}
              </Link>
            );
          })}
          <Link href="/admin/login" className={cn("rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-[#E94560]")}>Admin</Link>
        </div>
      </nav>
    </header>
  );
}
