'use client'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { ModeToggle } from "@/components/ui/toggle-theme"
  import {
    Book,
    BookOpen,
    Bookmark,
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    FilePlus2,
    Home,
    LibraryBig,
    LineChart,
    ListFilter,
    MoreVertical,
    Newspaper,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Table,
    Truck,
    Upload,
    Users2,
  } from "lucide-react"
  import Link from "next/link"
import React from 'react'
import { Button } from "./ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"




const Sidebar = () => {

  const links = [
    { href: '/dashboard', label: 'Home', icon: Home },
    // { href: '/order', label: 'Orders', icon: ShoppingCart },
    // { href: '/favourite', label: 'Favourite', icon: Bookmark },
    { href: '/book/upload', label: 'Upload', icon: Upload },
    { href: '/book/publish', label: 'Publish', icon: Newspaper },
    { href: '/book/upload/list', label: 'Upload Table', icon: Table },
    { href: '/book/detail', label: 'Books', icon: Book },
    { href: '/book/read', label: 'Reading', icon: BookOpen },
    { href: '/book/collection', label: 'Collection', icon: LibraryBig },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];
  const pathname = usePathname();
  
  return (
   
<aside className="fixed inset-y-0 left-0 z-10 items-center sm:py-4 hidden w-28 flex-col border-r bg-background sm:flex">
<div className="border-b p-2">
            <Button variant="link" size="icon" aria-label="Home">
              <Link href='/dashboard'>
              <Image src={'/logo.png'} width={100} height={100} alt="logo"/>
              </Link>
              
            </Button>
          </div>


          <TooltipProvider>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-14">
        {links.slice(0, links.length - 1).map((link, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <ModeToggle />
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={links[links.length - 1].href}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                pathname === links[links.length - 1].href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">{links[links.length - 1].label}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{links[links.length - 1].label}</TooltipContent>
        </Tooltip>
      </nav>
    </TooltipProvider>


</aside>
  )
}

export default Sidebar
