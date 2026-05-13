import { AdminCrud } from "@/components/admin-crud";
import { getServices } from "@/lib/data";

export default async function AdminServicesPage() {
  const services = await getServices();
  return <AdminCrud title="Services" endpoint="/api/services" items={services as any[]} fields={[{ key: "name", label: "Service name" }, { key: "icon", label: "Icon" }, { key: "description", label: "Description" }, { key: "pricingFrom", label: "Pricing from" }, { key: "ctaText", label: "CTA Text" }]} />;
}
