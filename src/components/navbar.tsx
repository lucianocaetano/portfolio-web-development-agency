'use client'

import { Button } from "./ui/button"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"

import { useRouter } from 'next/navigation'
import MenuMobile from "./menu-mobile"

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="sticky top-0 bg-background z-60 px-10 py-3 h-24 flex items-center justify-center">
      <div className="flex w-full max-w-7xl mx-auto">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <div className="size-8">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="text-2xl font-bold leading-tight">Percy Pocket</h1>
        </div>

        <div className="flex flex-1 items-center justify-end gap-6">
          <div className="md:hidden flex">
            <MenuMobile />
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/services">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/examples">
                  Examples
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Button
                  className="rounded-full py-6"
                  onClick={() => { router.push('/contact') }}
                >
                  <span className="truncate">Contact Us</span>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
