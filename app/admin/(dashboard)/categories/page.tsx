import { AdminCrud } from "@/components/admin-crud";
import { getCategories } from "@/lib/data";

export default async function AdminCategoriesPage() {
  const categories = await getCategories();
  return <AdminCrud title="Categories" endpoint="/api/categories" items={categories as any[]} fields={[{ key: "name", label: "Category name" }, { key: "description", label: "Description" }]} />;
}
