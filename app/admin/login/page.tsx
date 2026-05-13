"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setError("Invalid login credentials.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4">
      <form onSubmit={handleSubmit} className="w-full space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h1 className="text-3xl font-semibold">Admin Login</h1>
        <input name="email" type="email" required placeholder="Admin email" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" />
        <input name="password" type="password" required placeholder="Password" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" />
        <button className="w-full rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-6 py-3 font-semibold">Sign In</button>
        <p className="text-xs text-zinc-500">Use ADMIN_EMAIL and ADMIN_PASSWORD_HASH env setup.</p>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </form>
    </div>
  );
}
