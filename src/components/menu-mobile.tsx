'use client'

import {Menu} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {useState} from "react"
import {useRouter} from "next/navigation"

const MenuMobile = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

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
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <ul className="space-y-6">
            <li 
              className="cursor-pointer hover:bg-gray-600 hover:text-white p-4 text-lg"
              onClick={() => { router.push('/'); setOpen(false) }}
            >
              Home
            </li>
            <li 
              className="cursor-pointer hover:bg-gray-600 hover:text-white p-4 text-lg"
              onClick={() => { router.push('/services'); setOpen(false) }}
            >
              Services
            </li>
            <li 
              className="cursor-pointer hover:bg-gray-600 hover:text-white p-4 text-lg"
              onClick={() => { router.push('/about'); setOpen(false) }}
            >
              About
            </li>
            <li 
              className="cursor-pointer hover:bg-gray-600 hover:text-white p-4 text-lg"
              onClick={() => { router.push('/examples'); setOpen(false) }}
            >
              Examples
            </li>
            <li 
              className="cursor-pointer hover:bg-gray-600 hover:text-white p-4 text-lg"
              onClick={() => { router.push('/contact'); setOpen(false) }}
            >
              Contact
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MenuMobile
