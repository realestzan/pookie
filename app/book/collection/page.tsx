
import BookDetail from '@/components/book-detail';
import Sidebar from "@/components/sidebar"
import Header from '@/components/header';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { TextGenerateEffectDemo } from '@/components/text-generate-demo';
import FocusButton from '@/components/focus-button';

import books from '@/lib/data';
import { FlipWordsDemo } from '@/components/flip-words-demo';
import BookCollectionCard from '@/components/card/book-collection-card';

export default function Page() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />
        

        <TracingBeam className='z-20'>

        <main className='mx-[5vw] '>

        <FlipWordsDemo text1='' words={['Read', 'Publish', 'Share']} text2='' css='text-white/[0.2]'/>

      <BookCollectionCard books={books}/>

         
       
        </main>

        </TracingBeam>
      </div>
    </div>
  )
}




