import { NextResponse } from "next/server";
import { CLOUDINARY_NOT_CONFIGURED_ERROR, uploadToCloudinary } from "@/lib/cloudinary";
import { requireAdmin } from "@/lib/api-guard";

export async function POST(request: Request) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ message: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await uploadToCloudinary(buffer);
    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    const status = message === CLOUDINARY_NOT_CONFIGURED_ERROR ? 400 : 502;
    return NextResponse.json({ message }, { status });
  }
}
