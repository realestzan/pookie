
import BookDetail from '@/components/book-detail';
import Sidebar from "@/components/sidebar"
import Header from '@/components/header';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { TextGenerateEffectDemo } from '@/components/text-generate-demo';
import FocusButton from '@/components/focus-button';
import Image from 'next/image';
import { EvervaultCardDemo } from '@/app/page';
import books from '@/lib/data';
import { Button } from '@/components/ui/aurora-button';
import { FlipWordsDemo } from '@/components/flip-words-demo';
import { TabsTrigger, TabsList, Tabs } from '@/components/ui/tabs';


export default function Page() {


  const book = {
    title: 'Harry Potter: Half Blood Prince',
    author: 'JK Rowling',
    description: 'Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.',
    editors: ['J.K. Rowling', 'Christopher Reath', 'Alena Gestabon', 'Steve Korg'],
    language: 'Standard English (USA & UK)',
    pages: 345,
    isbn: '987 3 32564 455 B',
    coverImage: '/book7.png',
    reviewer: 'Roberto Jordan',
    review: 'What a delightful and magical book it is! It indeed transports readers to the wizarding world.',
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />
        

        <TracingBeam className='z-20'>

        <main className='mx-[5vw] '>

        <FlipWordsDemo text1='' words={['Read', 'Publish', 'Share']} text2='' css='text-white/[0.2]'/>


          <div className="flex justify-between pb-4">
            <h2 className='font-bold text-5xl'>Popular</h2>
            <Tabs defaultValue="week">
            <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            <Button>View all</Button>
          </div>

          <div className='text-center flex flex-wrap gap-10 justify-between'>
          {books.map((book, index) => (
            <div key={index} className='basis-1/6 flex flex-col items-center mt-4'>
               <Image src={book.coverImage} width={200} height={300} alt='book' />
                <h5>{book.title}</h5>
                <h5>{book.author}</h5>
            </div>
          ))}
          </div>

         
       
        </main>

        </TracingBeam>
      </div>
    </div>
  )
}




