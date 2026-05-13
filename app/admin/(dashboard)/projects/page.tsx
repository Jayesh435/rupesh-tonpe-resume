import { AdminCrud } from "@/components/admin-crud";
import { getProjects } from "@/lib/data";

export default async function AdminProjectsPage() {
  const projects = await getProjects({ publishedOnly: false });

  return (
    <AdminCrud
      title="Projects"
      endpoint="/api/projects"
      items={projects as any[]}
      fields={[
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
        { key: "richContent", label: "Rich Content HTML" },
        { key: "coverImage", label: "Cover Image URL" },
        { key: "videoUrl", label: "Video URL" },
        { key: "tags", label: "Tags (comma separated)" },
        { key: "category", label: "Category" },
        { key: "clientName", label: "Client Name" },
        { key: "status", label: "Status draft/published" },
      ]}
    />
  );
}
