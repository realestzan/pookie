
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import BookUPublishForm from "@/components/forrm/book-publish-form"
import { TracingBeam } from "@/components/ui/tracing-beam";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/operations";

export default async function Page() {

  const session = await auth()

  console.log('email', session?.user?.email)

  const user = await getUserByEmail(session?.user?.email || '')

  console.log('user', user?.id)

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />


        <TracingBeam>
          <main className="p-14 pl-28 flex flex-col gap-10">
            <BookUPublishForm userId={user?.id} />
          </main>
        </TracingBeam>

      </div>
    </div>
  )
}

