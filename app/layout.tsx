import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CustomCursor } from "@/components/custom-cursor";
import { StickyDockMenu } from "@/components/sticky-dock";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  metadataBase: new URL("https://rupesh-tonpe-portfolio.vercel.app"),
  title: "Rupesh Tonpe | Creative Director & AI Visual Designer",
  description: "Premium cinematic portfolio of Rupesh Tonpe — Graphic Designer, Video Editor, Creative Director and AI Creator.",
  openGraph: {
    title: "Rupesh Tonpe Portfolio",
    description: "Creative Director, Graphic Designer, Video Editor, Motion Designer, AI Creator.",
    type: "website",
  },
  keywords: ["Rupesh Tonpe", "Creative Director", "Graphic Designer", "Video Editor", "AI Creator", "Nagpur Maharashtra"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#070709] text-zinc-100 antialiased">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main className="min-h-[calc(100vh-140px)]">{children}</main>
        </PageTransition>
        <Footer />
        <StickyDockMenu />
      </body>
    </html>
  );
}
