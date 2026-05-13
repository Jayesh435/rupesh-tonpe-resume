import Link from "next/link";

const items = [
  ["/admin", "Overview"],
  ["/admin/projects", "Projects"],
  ["/admin/categories", "Categories"],
  ["/admin/services", "Services"],
  ["/admin/testimonials", "Testimonials"],
  ["/admin/home-content", "Homepage"],
  ["/admin/settings", "SEO Settings"],
  ["/admin/submissions", "Submissions"],
] as const;

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 md:grid-cols-[220px_1fr]">
      <aside className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-400">CMS</p>
        {items.map(([href, label]) => (
          <Link key={href} href={href} className="block rounded-lg px-3 py-2 text-sm text-zinc-200 hover:bg-white/10">
            {label}
          </Link>
        ))}
        <form action="/api/auth/logout" method="post">
          <button className="mt-3 rounded-lg border border-white/20 px-3 py-2 text-sm text-zinc-200">Logout</button>
        </form>
      </aside>
      <section>{children}</section>
    </div>
  );
}
