import { NextResponse } from "next/server";
import { connectDB, hasDatabase } from "@/lib/db";
import { ContactMessageModel } from "@/lib/models/ContactMessage";
import { newId, store } from "@/lib/fallback-store";
import { requireAdmin } from "@/lib/api-guard";

export async function GET(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  if (hasDatabase) {
    await connectDB();
    return NextResponse.json(await ContactMessageModel.find().sort({ createdAt: -1 }).lean());
  }

  return NextResponse.json(store.contacts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const payload = {
    _id: newId(),
    name: String(body.name || ""),
    email: String(body.email || ""),
    phone: String(body.phone || ""),
    message: String(body.message || ""),
    createdAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  if (hasDatabase) {
    await connectDB();
    const created = await ContactMessageModel.create(payload);

    if (process.env.CONTACT_NOTIFY_EMAIL) {
      console.log(`Contact form submission notification configured for ${process.env.CONTACT_NOTIFY_EMAIL}`);
    }

    return NextResponse.json(created, { status: 201 });
  }

  store.contacts.unshift(payload as any);
  return NextResponse.json(payload, { status: 201 });
}
