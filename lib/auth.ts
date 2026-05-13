import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

function getJwtSecret() {
  if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be set in production.");
  }
  return process.env.JWT_SECRET || "dev-secret-change-me";
}
const ADMIN_COOKIE = "admin_token";

export interface AdminPayload {
  sub: string;
  email: string;
  role: "admin";
}

export function signAdminToken(payload: AdminPayload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });
}

export function verifyAdminToken(token: string): AdminPayload | null {
  try {
    return jwt.verify(token, getJwtSecret()) as AdminPayload;
  } catch {
    return null;
  }
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function getAdminFromCookies() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

export const authCookieName = ADMIN_COOKIE;
