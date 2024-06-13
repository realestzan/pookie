import { InsertBook, SelectBook } from '@/lib/schema'
import React from 'react'
import { TabsTrigger, TabsList, Tabs } from '@/components/ui/tabs';
import { AuroraButton } from '@/components/ui/aurora-button';
import Image from 'next/image';


interface BookCollectionCardProps {
    books: SelectBook[];
  }

const BookCollectionCard: React.FC<BookCollectionCardProps> = ({ books }) => {
    return (
    <div>
        <div className="flex justify-between pb-4">
        <h2 className='font-bold text-5xl'>Popular</h2>
        <Tabs defaultValue="week">
        <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            </Tabs>
        <AuroraButton>View all</AuroraButton>
        </div>

        <div className='text-center flex flex-wrap gap-14'>
        {books.map((book, index) => (
        <div key={index} className='basis-1/6 flex flex-col items-center mt-4'>
            <Image src={book.cover_image || '/book-illu1.png'} width={200} height={300} alt='book' />
            <h5>{book.title}</h5>
            <h5>{book.author}</h5>
        </div>
        ))}
    </div>

    </div>
  )
}

export default BookCollectionCard
