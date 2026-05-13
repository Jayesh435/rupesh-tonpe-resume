import { NextResponse } from "next/server";
import { verifyAdminToken } from "./auth";

export function requireAdmin(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const token = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("admin_token="))
    ?.split("=")[1];

  if (!token || !verifyAdminToken(token)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return null;
}
