"use client";

import { useState } from "react";

export default function HomeContentPage() {
  const [status, setStatus] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(res.ok ? "Homepage content updated." : "Update failed.");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Manage Homepage Content</h1>
      <form onSubmit={submit} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <input name="homeHeadline" placeholder="Hero headline" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" required />
        <textarea name="homeSubheadline" placeholder="Hero subheadline" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" rows={4} required />
        <button className="rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-6 py-2">Save</button>
      </form>
      {status && <p className="text-sm text-zinc-300">{status}</p>}
    </div>
  );
}
