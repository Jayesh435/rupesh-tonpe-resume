import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://rupesh-tonpe-portfolio.vercel.app";
  const routes = ["", "/about", "/portfolio", "/services", "/experience", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const projects = await getProjects();
  const projectRoutes = projects.map((p: any) => ({ url: `${base}/portfolio/${p.slug}`, lastModified: new Date(p.date || Date.now()) }));

  return [...routes, ...projectRoutes];
}
