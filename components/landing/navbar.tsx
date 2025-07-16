"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { landingNavigation } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all ${isScrolled ? "bg-background/95 text-black shadow-lg backdrop-blur-sm dark:text-white" : "bg-transparent text-white"}`}
    >
      <div className='mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between py-4'>
          <Link
            className='tracking-snug text-xl font-bold md:text-2xl'
            href='/'
          >
            Memories of Patricia
          </Link>
          <div className='flex md:gap-1 lg:gap-4'>
            <div className='hidden gap-1 md:flex lg:gap-2'>
              {landingNavigation.map((item) => (
                <Button
                  variant='ghost'
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
