import { NextResponse } from "next/server";
import { connectDB, hasDatabase } from "@/lib/db";
import { ServiceModel } from "@/lib/models/Service";
import { newId, store } from "@/lib/fallback-store";
import { requireAdmin } from "@/lib/api-guard";

export async function GET() {
  if (hasDatabase) {
    await connectDB();
    return NextResponse.json(await ServiceModel.find().lean());
  }
  return NextResponse.json(store.services);
}

export async function POST(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const body = await request.json();
  const payload = {
    _id: newId(),
    name: body.name,
    icon: body.icon,
    description: body.description,
    pricingFrom: body.pricingFrom,
    ctaText: body.ctaText,
  };

  if (hasDatabase) {
    await connectDB();
    return NextResponse.json(await ServiceModel.create(payload), { status: 201 });
  }

  store.services.unshift(payload as any);
  return NextResponse.json(payload, { status: 201 });
}
