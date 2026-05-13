import { NextResponse } from "next/server";
import { authCookieName } from "@/lib/auth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/admin/login", request.url));
  response.cookies.set(authCookieName, "", { path: "/", maxAge: 0 });
  return response;
}
