

import Sidebar from "@/components/sidebar"
import Header from '@/components/header';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { TextGenerateEffectDemo } from '@/components/text-generate-demo';
import FocusButton from '@/components/focus-button';
import BookUploadTable from '@/components/book-upload-table';
import BookDetailTable from "@/components/table/book-detail-table";


export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />
        

        <TracingBeam className='z-20'>

        <main className='mx-[5vw] my-[3vh] flex justify-between'>
    
            <div className="basis-2/3"><BookUploadTable /></div>
            <div className="basis-1/3 pl-14 pt-12"><BookDetailTable /></div>
            
    
        </main>

        </TracingBeam>
      </div>
    </div>
  )
}






