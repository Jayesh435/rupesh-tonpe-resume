import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/api-guard";
import { getContactMessages, getProjects, getServices, getTestimonials } from "@/lib/data";

export async function GET(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const [projects, services, testimonials, contacts] = await Promise.all([
    getProjects({ publishedOnly: false }),
    getServices(),
    getTestimonials(),
    getContactMessages(),
  ]);

  return NextResponse.json({
    projects: projects.length,
    services: services.length,
    testimonials: testimonials.length,
    contacts: contacts.length,
  });
}
