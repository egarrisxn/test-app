import AdminDashboard from "@/components/admin/dashboard";
import AdminNavbar from "@/components/admin/navbar";
import { allAdminMockEntries, allAdminMockPhotos } from "@/lib/data";

export default function AdminPage() {
  return (
    <main className='grid min-h-dvh w-full grid-rows-[auto_1fr]'>
      <AdminNavbar />
      <AdminDashboard
        initialAdminPhotos={allAdminMockPhotos}
        initialAdminEntries={allAdminMockEntries}
      />
    </main>
  );
}
