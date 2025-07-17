import { Shield } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import LogoutButton from "@/components/admin/logout";

export default function AdminNavbar() {
  return (
    <div className='border-b shadow-sm'>
      <div className='container mx-auto p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Shield className='size-8 text-blue-600' />
            <h1 className='text-2xl font-bold text-gray-900'>
              Admin Dashboard
            </h1>
          </div>
          <div className='flex md:gap-1 lg:gap-4'>
            <LogoutButton />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
