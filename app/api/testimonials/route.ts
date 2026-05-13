import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { TestimonialModel } from "@/lib/models/Testimonial";
import { newId, store } from "@/lib/fallback-store";
import { requireAdmin } from "@/lib/api-guard";

export async function GET() {
  const database = await connectDB();
  if (database) {
    return NextResponse.json(await TestimonialModel.find().lean());
  }
  return NextResponse.json(store.testimonials);
}

export async function POST(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const body = await request.json();
  const payload = {
    _id: newId(),
    name: body.name,
    role: body.role,
    company: body.company,
    quote: body.quote,
  };

  const database = await connectDB();
  if (database) {
    return NextResponse.json(await TestimonialModel.create(payload), { status: 201 });
  }

  store.testimonials.unshift(payload as any);
  return NextResponse.json(payload, { status: 201 });
}
