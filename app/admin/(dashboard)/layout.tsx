import { redirect } from "next/navigation";
import { getAdminFromCookies } from "@/lib/auth";
import { AdminShell } from "@/components/admin-shell";

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await getAdminFromCookies();
  if (!admin) redirect("/admin/login");
  return <AdminShell>{children}</AdminShell>;
}
