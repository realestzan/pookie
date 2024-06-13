import { getBooksByUser, getUserById } from '@/lib/operations';
import { InsertUser } from '@/lib/schema';

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
import BookUploadTable from '@/components/book-upload-table';
import BookCollectionCard from '@/components/card/book-collection-card';


interface UserPageProps {
    params: {
        id: string;
    };
}

const Page = async ({ params }: UserPageProps) => {

    const session = await auth()

    console.log('PARAMS', params.id)
    const user = await getUserById(Number(params.id));
    const books = await getBooksByUser(Number(params.id))
    console.log(books)
    if (!user) {
        return <p>User with ID {params.id} not found.</p>;
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
                <Header />
                <main className="p-14 flex flex-col gap-14">
                    <div className="flex gap-14 justify-between">
                        <div className='flex flex-col gap-14'>
                            <FlipWordsDemo text1="Welcome to" words={['home', 'shelter']} text2={`of ${session?.user?.name}`} />
                            <div className="relative w-fit"><GlowingStarsCard img={user.image || ''} text={user.name || ''} desc={user.email || ''} css="w-[30vw]" /></div>
                        </div>

                        <div className='basis-2/3'><BookUploadTable /></div>
                    </div>

                    <div className="flex gap-14 justify-between">
                        <div className='basis-2/3'><BookCollectionCard books={books} />  </div>
                    </div>  



                </main>
            </div>
        </div>
    );
};


export default Page