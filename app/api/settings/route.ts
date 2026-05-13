import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { SettingModel } from "@/lib/models/Setting";
import { requireAdmin } from "@/lib/api-guard";
import { store } from "@/lib/fallback-store";

export async function GET() {
  const database = await connectDB();
  if (database) {
    const setting = await SettingModel.findOne().lean();
    return NextResponse.json(setting || null);
  }
  return NextResponse.json(store.settings);
}

export async function PUT(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const body = await request.json();

  const database = await connectDB();
  if (database) {
    const updated = await SettingModel.findOneAndUpdate({}, { $set: body }, { new: true, upsert: true }).lean();
    return NextResponse.json(updated);
  }

  store.settings = { ...store.settings, ...body };
  return NextResponse.json(store.settings);
}
