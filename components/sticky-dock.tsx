"use client";

import { Home, Briefcase, UserRound, MessageSquare, Settings } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/portfolio", label: "Works", icon: Briefcase },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/contact", label: "Contact", icon: MessageSquare },
  { href: "/admin", label: "Admin", icon: Settings },
];

export function StickyDockMenu() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur-xl md:hidden">
      <div className="flex gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="rounded-full p-2 text-zinc-300 hover:bg-white/10 hover:text-white" aria-label={label}>
            <Icon size={18} />
          </Link>
        ))}
      </div>
    </div>
  );
}
