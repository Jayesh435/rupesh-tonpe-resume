import { getContactMessages } from "@/lib/data";

export default async function AdminSubmissionsPage() {
  const contacts = await getContactMessages();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Contact Form Submissions</h1>
      <div className="space-y-3">
        {(contacts as any[]).map((message) => (
          <div key={message._id} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold">{message.name} · {message.email}</p>
            <p className="text-sm text-zinc-400">{message.phone}</p>
            <p className="mt-2 text-zinc-300">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
