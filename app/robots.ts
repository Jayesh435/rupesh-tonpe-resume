import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://rupesh-tonpe-portfolio.vercel.app/sitemap.xml",
  };
}
