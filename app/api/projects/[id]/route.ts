import { NextResponse } from "next/server";
import { connectDB, hasDatabase } from "@/lib/db";
import { ProjectModel } from "@/lib/models/Project";
import { store } from "@/lib/fallback-store";
import { requireAdmin } from "@/lib/api-guard";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (hasDatabase) {
    await connectDB();
    const project = await ProjectModel.findById(id).lean();
    return NextResponse.json(project);
  }
  const project = store.projects.find((item) => item._id === id);
  return NextResponse.json(project || null);
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;
  const { id } = await params;
  const body = await request.json();

  if (hasDatabase) {
    await connectDB();
    const updated = await ProjectModel.findByIdAndUpdate(id, body, { new: true }).lean();
    return NextResponse.json(updated);
  }

  const index = store.projects.findIndex((item) => item._id === id);
  if (index === -1) return NextResponse.json({ message: "Not found" }, { status: 404 });
  store.projects[index] = { ...store.projects[index], ...body };
  return NextResponse.json(store.projects[index]);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;
  const { id } = await params;

  if (hasDatabase) {
    await connectDB();
    await ProjectModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  }

  store.projects = store.projects.filter((item) => item._id !== id);
  return NextResponse.json({ success: true });
}
