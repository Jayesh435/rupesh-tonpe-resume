import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const DISABLE_DATABASE = process.env.DISABLE_DATABASE === "true";
let databaseConnectionFailed = false;

let cached = (global as typeof globalThis & {
  mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose | null> | null };
}).mongoose;

if (!cached) {
  cached = (global as typeof globalThis & {
    mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose | null> | null };
  }).mongoose = { conn: null, promise: null };
}

export const hasDatabase = Boolean(MONGODB_URI);

export async function connectDB() {
  if (!MONGODB_URI || DISABLE_DATABASE || databaseConnectionFailed) return null;
  if (cached?.conn) return cached.conn;

  if (!cached?.promise) {
    cached!.promise = mongoose
      .connect(MONGODB_URI, { dbName: process.env.MONGODB_DB || "rupesh_portfolio" })
      .catch(() => {
        databaseConnectionFailed = true;
        cached!.conn = null;
        cached!.promise = null;
        return null;
      });
  }

  const connection = await cached!.promise;
  if (!connection) return null;

  cached!.conn = connection;
  return cached!.conn;
}
