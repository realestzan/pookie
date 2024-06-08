
import BookDetail from '@/components/book-detail';
import Sidebar from "@/components/sidebar"
import Header from '@/components/header';
import { TracingBeam } from '@/components/ui/tracing-beam';


export default function Page() {


  const book = {
    title: 'Harry Potter: Half Blood Prince',
    author: 'JK Rowling',
    description: 'Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.',
    editors: ['J.K. Rowling', 'Christopher Reath', 'Alena Gestabon', 'Steve Korg'],
    language: 'Standard English (USA & UK)',
    pages: 345,
    isbn: '987 3 32564 455 B',
    coverImage: '/book-illu5.png',
    reviewer: 'Roberto Jordan',
    review: 'What a delightful and magical book it is! It indeed transports readers to the wizarding world.',
  };



  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />


        <TracingBeam className='z-20'>

        <main>

<BookDetail
  title={book.title}
  author={book.author}
  description={book.description}
  editors={book.editors}
  language={book.language}
  pages={book.pages}
  isbn={book.isbn}
  coverImage={book.coverImage}
  reviewer={book.reviewer}
  review={book.review}
/>

</main>

        </TracingBeam>
      </div>
    </div>
  )
}

