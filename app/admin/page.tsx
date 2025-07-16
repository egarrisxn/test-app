import AdminDashboard from "@/components/admin/dashboard";
import AdminNavbar from "@/components/admin/navbar";
import { allAdminMockEntries, allAdminMockPhotos } from "@/lib/data";

export default function AdminPage() {
  return (
    <div className='grid min-h-[100dvh] w-full max-w-screen grid-rows-[auto_1fr]'>
      <AdminNavbar />
      <AdminDashboard
        initialAdminPhotos={allAdminMockPhotos}
        initialAdminEntries={allAdminMockEntries}
      />
    </div>
  );
}
