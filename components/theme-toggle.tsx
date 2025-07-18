"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant='ghost' size='icon' />;
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className='hover:bg-transparent dark:hover:bg-transparent'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className='size-4.5 text-yellow-600 lg:size-5.5' />
      ) : (
        <MoonIcon className='size-4.5 text-blue-600 lg:size-5.5' />
      )}
    </Button>
  );
}
