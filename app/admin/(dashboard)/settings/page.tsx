"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [status, setStatus] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const payload = { ...data, seoKeywords: String(data.seoKeywords || "").split(",").map((v) => v.trim()).filter(Boolean) };
    const response = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(response.ok ? "Settings updated." : "Failed to update settings.");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">SEO Settings</h1>
      <form onSubmit={submit} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <input name="siteTitle" placeholder="Site Title" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" required />
        <textarea name="siteDescription" placeholder="Site Description" rows={3} className="w-full rounded-lg border border-white/10 bg-black/40 p-3" required />
        <input name="seoKeywords" placeholder="Keywords comma separated" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" required />
        <button className="rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-6 py-2">Save SEO</button>
      </form>
      {status && <p className="text-sm text-zinc-300">{status}</p>}
    </div>
  );
}
