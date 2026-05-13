import { getContactMessages, getProjects, getServices, getTestimonials } from "@/lib/data";

export default async function AdminDashboardPage() {
  const [projects, services, testimonials, contacts] = await Promise.all([
    getProjects({ publishedOnly: false }),
    getServices(),
    getTestimonials(),
    getContactMessages(),
  ]);

  const published = (projects as any[]).filter((p) => p.status === "published").length;
  const draft = (projects as any[]).filter((p) => p.status === "draft").length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{ label: "Total Projects", value: projects.length }, { label: "Published", value: published }, { label: "Draft", value: draft }, { label: "Submissions", value: contacts.length }].map((card) => (
          <div key={card.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">{card.label}</p>
            <p className="text-3xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>
      <p className="text-zinc-300">Manage projects, categories, testimonials, services, home content, SEO and submissions from the CMS sidebar.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-zinc-400">Services</p>
          <p className="text-2xl font-semibold">{services.length}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-zinc-400">Testimonials</p>
          <p className="text-2xl font-semibold">{testimonials.length}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-zinc-400">Lead Messages</p>
          <p className="text-2xl font-semibold">{contacts.length}</p>
        </div>
      </div>
    </div>
  );
}
