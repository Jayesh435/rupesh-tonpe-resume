"use client";

type CrudItem = Record<string, any>;

export function AdminCrud({
  title,
  endpoint,
  fields,
  items,
}: {
  title: string;
  endpoint: string;
  fields: Array<{ key: string; label: string; type?: string }>;
  items: CrudItem[];
}) {
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) window.location.reload();
  }

  async function remove(id: string) {
    const res = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    if (res.ok) window.location.reload();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <form onSubmit={submit} className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-2">
        {fields.map((field) => (
          <input key={field.key} name={field.key} placeholder={field.label} required className="rounded-lg border border-white/10 bg-black/40 p-3" />
        ))}
        <button className="rounded-full bg-gradient-to-r from-[#E94560] to-[#FF8C42] px-5 py-2 font-semibold md:col-span-2 md:w-fit">Add {title.slice(0, -1)}</button>
      </form>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item._id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <p className="font-medium">{item.title || item.name || item.siteTitle}</p>
              <p className="text-sm text-zinc-400">{item.description || item.quote || item.email || item.category || item.pricingFrom}</p>
            </div>
            {endpoint !== "/api/settings" && (
              <button onClick={() => remove(item._id)} className="rounded-lg border border-red-500/40 px-3 py-1 text-sm text-red-300">Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
