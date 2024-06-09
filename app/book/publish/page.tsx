
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import BookUploadForm from "@/components/forrm/book-upload-form"

import { TracingBeam } from "@/components/ui/tracing-beam";

export default async function Page() {



  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />
        

            <TracingBeam>
            <main className="p-14 pl-28 flex flex-col gap-10">
                <BookUploadForm />
                </main>
            </TracingBeam>
        
      </div>
    </div>
  )
}

