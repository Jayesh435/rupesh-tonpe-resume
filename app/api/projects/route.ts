import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { ProjectModel } from "@/lib/models/Project";
import { newId, store } from "@/lib/fallback-store";
import { requireAdmin } from "@/lib/api-guard";
import { slugify } from "@/lib/utils";

export async function GET() {
  const database = await connectDB();
  if (database) {
    const docs = await ProjectModel.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(docs);
  }
  return NextResponse.json(store.projects);
}

export async function POST(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const body = await request.json();
  const project = {
    _id: newId(),
    slug: slugify(body.title || "project"),
    title: String(body.title || "Untitled"),
    description: String(body.description || ""),
    richContent: String(body.richContent || ""),
    coverImage: String(body.coverImage || "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"),
    images: [String(body.coverImage || "")].filter(Boolean),
    videos: [String(body.videoUrl || "")].filter(Boolean),
    tags: String(body.tags || "").split(",").map((v) => v.trim()).filter(Boolean),
    category: String(body.category || "Branding"),
    clientName: String(body.clientName || "Client"),
    date: new Date().toISOString(),
    featured: body.featured === "true" || body.featured === true,
    status: body.status === "published" ? "published" : "draft",
  };

  const database = await connectDB();
  if (database) {
    const created = await ProjectModel.create(project);
    return NextResponse.json(created, { status: 201 });
  }

  store.projects.unshift(project as any);
  return NextResponse.json(project, { status: 201 });
}
