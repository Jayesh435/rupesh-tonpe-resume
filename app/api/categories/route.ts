import { NextResponse } from "next/server";
import { connectDB, hasDatabase } from "@/lib/db";
import { CategoryModel } from "@/lib/models/Category";
import { newId, store } from "@/lib/fallback-store";
import { requireAdmin } from "@/lib/api-guard";

export async function GET() {
  if (hasDatabase) {
    await connectDB();
    return NextResponse.json(await CategoryModel.find().lean());
  }
  return NextResponse.json(store.categories);
}

export async function POST(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const body = await request.json();
  const payload = { _id: newId(), name: body.name, description: body.description || "" };

  if (hasDatabase) {
    await connectDB();
    return NextResponse.json(await CategoryModel.create(payload), { status: 201 });
  }

  store.categories.unshift(payload as any);
  return NextResponse.json(payload, { status: 201 });
}
