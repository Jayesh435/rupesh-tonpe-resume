import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { TestimonialModel } from "@/lib/models/Testimonial";
import { requireAdmin } from "@/lib/api-guard";
import { store } from "@/lib/fallback-store";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const authError = requireAdmin(request);
  if (authError) return authError;
  const { id } = await params;

  const database = await connectDB();
  if (database) {
    await TestimonialModel.findByIdAndDelete(id);
  } else {
    store.testimonials = store.testimonials.filter((item) => item._id !== id);
  }

  return NextResponse.json({ success: true });
}
