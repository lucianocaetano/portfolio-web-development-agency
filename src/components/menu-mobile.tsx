'use client'

import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState, useEffect } from "react"

const MenuMobile = () => {
  const [open, setOpen] = useState(false)


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Link = ({ href, children }) => (
    <a
      className="cursor-pointer hover:bg-gray-600 hover:text-white p-4 text-lg"
      href={href}
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
        >
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full">
        <SheetHeader className="ps-8">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-4 mt-6">
          <ul className="space-y-6">
            <Link href="/">
              Home
            </Link>
            <Link href="/services">
              Services
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/examples">
              Examples
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MenuMobile
