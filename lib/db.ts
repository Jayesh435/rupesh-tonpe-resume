import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as typeof globalThis & {
  mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}).mongoose;

if (!cached) {
  cached = (global as typeof globalThis & {
    mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
  }).mongoose = { conn: null, promise: null };
}

export const hasDatabase = Boolean(MONGODB_URI);

export async function connectDB() {
  if (!MONGODB_URI) return null;
  if (cached?.conn) return cached.conn;

  if (!cached?.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI, { dbName: process.env.MONGODB_DB || "rupesh_portfolio" });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}
