import Image from 'next/image';
import { FC } from 'react';
import { Home, ShoppingCart, Package, Users2, LineChart, Settings } from 'lucide-react'; // Adjust import as necessary
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { AnimatedTooltipPreview } from './animated-avatars';

interface BookDetailProps {
  title: string;
  author: string;
  description: string;
  editors: string[];
  language: string;
  pages: number;
  isbn: string;
  coverImage: string;
  reviewer: string;
  review: string;
}

const BookDetail: FC<BookDetailProps> = ({
  title,
  author,
  description,
  editors,
  language,
  pages,
  isbn,
  coverImage,
  reviewer,
  review,
}) => {
  return (
      <div className="flex flex-col md:flex-row">

        <div className='absolute top-[15vh] flex w-auto px-[15vw] left-0 right-0 justify-between'>
          <Image src={coverImage} width={300} height={400} alt={title} className="basis-1/2 h-[60vh]" />

          <div className='basis-1/2 h-[50vh] flex flex-col justify-between'>
            <h1 className="text-6xl text-primary font-bold">{title}</h1>

            <div>
            <h2 className="text-lg font-bold text-primary">{author}</h2>
            <p className="mt-4 text-primary dark:text-white/50">{description}</p>
            </div>

            <AnimatedTooltipPreview />


            <div>
            <h3 className="text-lg text-primary font-semibold">Description</h3>
                <p className="mt-1 text-primary dark:text-white/50">The story takes olace during Harrs sixth vear at Hogwarts School ofi
                  Witchcraft and Wizardry, where he discovers more about Lord
                  Voldemorts past and the prophecy that foretells his defeat.

                  With action-packed sequences, shocking twists, and moments of
                  heart-wrenching tragedy, Half-Blood Prince is a must-read for any
                  fan of the Harry Potter series.
                </p>
            </div>


            <div className="mt-6 flex items-center">
              <Button className="mr-4">Start reading</Button>
              <Button variant="secondary" className="mr-2 text-primary">Bookmark</Button>
              <Button variant="secondary" className='text-primary'>Share</Button>
            </div>

            <Separator />
          </div>

        </div>
        <div className="mx-auto w-5/6 bg-white dark:bg-black/80 shadow-md rounded-lg mt-[40vh] pt-[30vh] pb-[20vh] px-[20vh] grid grid-cols-2 text-primary gap-20">


            <div>
              <h3 className="text-lg text-primary font-semibold">Language</h3>
              <p className="mt-1 text-primary dark:text-white/50">{language}</p>
            </div>

            <div className="">
              <h3 className="text-lg text-primary font-semibold">Paperback</h3>
              <p className="mt-1 text-primary dark:text-white/50">{`paper textured, full colour, ${pages} pages`}</p>
              <p className="dark:text-primary  textwhite/50">ISBN: {isbn}</p>
            </div>


            <div className="">
              <h3 className="text-lg text-primary font-semibold">Editors</h3>
              <p className="mt-1 text-foregrou dark:text-white/50">{editors.join(', ')}</p>
            </div>
            


            <div className="flex">
              <Image className='rounded-full mr-4 size-16' src='/user-profile.webp' width={50} height={50} alt='user' />

              <div>
                <p className="font-medium">{reviewer}</p>
                <p>{review}</p>
              </div>
            </div>

        </div>
    </div>
  );
};

export default BookDetail;
