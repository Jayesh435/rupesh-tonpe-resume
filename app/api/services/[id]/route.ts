import { NextResponse } from "next/server";
import { connectDB, hasDatabase } from "@/lib/db";
import { ServiceModel } from "@/lib/models/Service";
import { requireAdmin } from "@/lib/api-guard";
import { store } from "@/lib/fallback-store";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;
  const { id } = await params;

  if (hasDatabase) {
    await connectDB();
    await ServiceModel.findByIdAndDelete(id);
  } else {
    store.services = store.services.filter((item) => item._id !== id);
  }

  return NextResponse.json({ success: true });
}
