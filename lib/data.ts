const books = [
    {
      title: 'The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      description: 'The first volume of the epic fantasy series The Lord of the Rings.',
    
      language: 'English',
      pages: 423,
      id: 423,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book1.png'

    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian society under constant surveillance.',
    
      language: 'English',
      pages: 328,
      id: 328,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book2.png'

    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about the serious issues of race and rape, though it is also full of warm humor.',
    
      language: 'English',
      pages: 281,
      id: 281,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book3.png'

    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel about the American dream and the roaring twenties.',
    
      language: 'English',
      pages: 180,
      id: 180,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book4.png'

    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
    
      language: 'English',
      pages: 279,
      id: 279,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book5.png'

    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      description: 'The saga of Captain Ahab and his relentless pursuit of the white whale, Moby Dick.',
    
      language: 'English',
      pages: 635,
      id: 635,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book6.png'

    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      description: 'A historical novel that chronicles the French invasion of Russia and the impact on Tsarist society.',
    
      language: 'English',
      pages: 1225,
      id: 1225,
      createdAt: new Date(),
      createdBy: 1,
      coverI_iage: '/book7.png',

    },
    {
      title: 'Ulysses',
      author: 'James Joyce',
      description: 'A modernist novel that parallels Homer’s Odyssey in a single day in Dublin.',
    
      language: 'English',
      pages: 730,
      id: 730,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book8.png'

    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description: 'A novel about teenage rebellion and alienation.',
    
      language: 'English',
      pages: 214,
      id: 214,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book9.png'

    },
    {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      description: 'A psychological drama about a young man who commits a crime and the consequences that follow.',
    
      language: 'English',
      pages: 671,
      id: 671,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book10.png'

    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      description: 'A dystopian novel set in a future world state of genetically modified citizens.',
    
      language: 'English',
      pages: 268,
      id: 268,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book11.png'

    },
    {
      title: 'The Odyssey',
      author: 'Homer',
      description: 'An epic poem about the adventures of Odysseus as he returns home from the Trojan War.',
    
      language: 'English',
      pages: 541,
      id: 541,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book12.png'

    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      description: 'A tale of passion and revenge on the Yorkshire moors.',
    
      language: 'English',
      pages: 416,
      id: 416,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book13.png'

    },
    {
      title: 'The Iliad',
      author: 'Homer',
      description: 'An epic poem about the Trojan War and the Greek siege of the city of Troy.',
    
      language: 'English',
      pages: 704,
      id: 704,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book14.png'

    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'A fantasy novel about the adventures of Bilbo Baggins in Middle-earth.',
    
      language: 'English',
      pages: 310,
      id: 310,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book15.png'

    },
    {
      title: 'Great Expectations',
      author: 'Charles Dickens',
      description: 'A coming-of-age story about the orphan Pip.',
    
      language: 'English',
      pages: 505,
      id: 505,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book16.png'

    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      description: 'A novel about the young scientist Victor Frankenstein who creates a grotesque creature.',
    
      language: 'English',
      pages: 280,
      id: 280,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book17.png'

    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      description: 'A novel about the experiences of the orphaned Jane Eyre.',
    
      language: 'English',
      pages: 532,
      id: 532,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book18.png'

    },
    {
      title: 'Dracula',
      author: 'Bram Stoker',
      description: 'A gothic horror novel about the vampire Count Dracula.',
    
      language: 'English',
      pages: 418,
      id: 418,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book19.png'

    },
    {
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      description: 'A philosophical novel about the young and handsome Dorian Gray.',
    
      language: 'English',
      pages: 254,
      id: 254,
      createdAt: new Date(),
      createdBy: 1,
      cover_image: '/book20.png'

    }
  ];
  
  export default books;
  