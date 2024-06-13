import Image from "next/image"
import Sidebar from "@/components/sidebar"
import BookTable from "@/components/book-table"
import Header from "@/components/header"
import { FlipWordsDemo } from "@/components/flip-words-demo"
import { GlowingStarsCard } from "@/components/glowing-stars-card"
import { AnimatedPinDemo } from "@/components/animated-pin"
import { auth } from "@/lib/auth"
import { useEffect } from "react"
import { Button } from "@headlessui/react"
import { Option } from "@/components/headless/option"
import BookUploadTable from "@/components/book-upload-table"

export default async function Page() {

    const session = await auth()

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />
          <main className="p-14 flex gap-14">
            <div className="basis-1/3 flex flex-col gap-14">
            <FlipWordsDemo text1="Welcome to" words={['home', 'shelter']} text2={`of ${session?.user?.name}`} />
            <div className="relative w-fit">
              <div className="absolute right-4 top-4 z-10"><Option /></div>
              <GlowingStarsCard img={session?.user?.image || ''} text={session?.user?.name || ''} desc={session?.user?.email || ''} css="w-[30vw]"/>
            </div>
            </div>

            <div className="basis-2/3">
            <BookUploadTable />   
            </div>
           
            
          </main>
      </div>
    </div>
  )
}









