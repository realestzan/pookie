import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { auth } from "@/lib/auth"
import Image from "next/image"
import { Label } from "@/components/ui/label"


export const SettingsUser = async () => { 

    const session = await auth()
  
    return ( 
      <Card x-chunk="dashboard-04-chunk-1">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
        <CardDescription>
          {/* Used to identify your store in the marketplace. */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex items-center">
        <Image className="rounded-full my-4 mr-10" src={session?.user?.image || '/avatar.png'} width={100} height={100} alt='avatar' />
          <div className="flex flex-col basis-5/6 gap-4">
            <Label>Name</Label>
          <Input placeholder={session?.user?.name || 'Placeholder'} />
          <Label>Email</Label>
          <Input placeholder={session?.user?.email || 'Placeholder'} />
          </div>
          
          
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Save</Button>
      </CardFooter>
    </Card>
    )
  }