"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("Message sent successfully.");
      form.reset();
      return;
    }

    setStatus("Unable to send message. Please try again.");
  }

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" />
          <input name="phone" placeholder="Phone" className="w-full rounded-lg border border-white/10 bg-black/40 p-3" />
          <textarea name="message" required placeholder="Tell me about your project" rows={6} className="w-full rounded-lg border border-white/10 bg-black/40 p-3" />
          <button className="rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-6 py-3 font-semibold">Send Message</button>
          {status && <p className="text-sm text-zinc-300">{status}</p>}
        </form>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <a href="mailto:hello@rupeshtonpe.com" className="block">Email: hello@rupeshtonpe.com</a>
          <a href="https://wa.me/919604567890" target="_blank" rel="noreferrer" className="block">WhatsApp Chat</a>
          <a href="https://calendly.com/rupesh-tonpe" target="_blank" rel="noreferrer" className="block">Book via Calendly</a>
          <a href="https://www.instagram.com/rupeshtonpe/" target="_blank" rel="noreferrer" className="block">Instagram</a>
          <a href="https://www.behance.net/rupeshtonpe" target="_blank" rel="noreferrer" className="block">Behance</a>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="map"
              className="h-64 w-full"
              src="https://www.google.com/maps?q=Nagpur%2C%20Maharashtra&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
