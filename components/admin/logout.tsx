"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button disabled variant='outline' className='flex items-center gap-2'>
      <LogOut className='size-4' />
      Logout
    </Button>
  );
}
