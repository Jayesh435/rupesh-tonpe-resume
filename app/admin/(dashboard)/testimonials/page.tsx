import { AdminCrud } from "@/components/admin-crud";
import { getTestimonials } from "@/lib/data";

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();
  return <AdminCrud title="Testimonials" endpoint="/api/testimonials" items={testimonials as any[]} fields={[{ key: "name", label: "Name" }, { key: "role", label: "Role" }, { key: "company", label: "Company" }, { key: "quote", label: "Quote" }]} />;
}
