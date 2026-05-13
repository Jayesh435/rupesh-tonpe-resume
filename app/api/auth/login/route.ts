import { NextResponse } from "next/server";
import { authCookieName, hashPassword, signAdminToken, verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email || "").toLowerCase();
  const password = String(body.password || "");

  const adminEmail = (process.env.ADMIN_EMAIL || "admin@rupeshtonpe.com").toLowerCase();
  const configuredHash = process.env.ADMIN_PASSWORD_HASH;

  if (email !== adminEmail) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const hash = configuredHash || (await hashPassword("admin123"));
  const isValid = await verifyPassword(password, hash);

  if (!isValid) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = signAdminToken({ sub: "admin-user", email: adminEmail, role: "admin" });
  const response = NextResponse.json({ success: true });
  response.cookies.set(authCookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
