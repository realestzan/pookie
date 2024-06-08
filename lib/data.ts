const books = [
    {
      title: 'The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      description: 'The first volume of the epic fantasy series The Lord of the Rings.',
      editors: ['J.R.R. Tolkien', 'Christopher Tolkien'],
      language: 'English',
      pages: 423,
      isbn: '978-0-261-10237-3',
      coverImage: '/book1.png',
      reviewer: 'John Doe',
      review: 'A masterpiece of high fantasy.',
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian society under constant surveillance.',
      editors: ['George Orwell', 'Thomas Pynchon'],
      language: 'English',
      pages: 328,
      isbn: '978-0-452-28423-4',
      coverImage: '/book2.png',
      reviewer: 'Jane Smith',
      review: 'A chilling vision of the future.',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about the serious issues of race and rape, though it is also full of warm humor.',
      editors: ['Harper Lee', 'Jonathan Burnham'],
      language: 'English',
      pages: 281,
      isbn: '978-0-06-112008-4',
      coverImage: '/book3.png',
      reviewer: 'Alice Johnson',
      review: 'A timeless classic that speaks volumes.',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel about the American dream and the roaring twenties.',
      editors: ['F. Scott Fitzgerald', 'Maxwell Perkins'],
      language: 'English',
      pages: 180,
      isbn: '978-0-7432-7356-5',
      coverImage: '/book4.png',
      reviewer: 'Bob Brown',
      review: 'An insightful critique of the American dream.',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
      editors: ['Jane Austen', 'Anna Quindlen'],
      language: 'English',
      pages: 279,
      isbn: '978-0-19-280238-5',
      coverImage: '/book5.png',
      reviewer: 'Emily Davis',
      review: 'A brilliant portrayal of manners and marriage.',
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      description: 'The saga of Captain Ahab and his relentless pursuit of the white whale, Moby Dick.',
      editors: ['Herman Melville', 'Nathaniel Philbrick'],
      language: 'English',
      pages: 635,
      isbn: '978-0-14-243724-7',
      coverImage: '/book6.png',
      reviewer: 'Chris Wilson',
      review: 'A profound exploration of obsession and revenge.',
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      description: 'A historical novel that chronicles the French invasion of Russia and the impact on Tsarist society.',
      editors: ['Leo Tolstoy', 'Ann Dunnigan'],
      language: 'English',
      pages: 1225,
      isbn: '978-0-19-923276-5',
      coverImage: '/book7.png',
      reviewer: 'David Martinez',
      review: 'A sweeping narrative of love, war, and society.',
    },
    {
      title: 'Ulysses',
      author: 'James Joyce',
      description: 'A modernist novel that parallels Homer’s Odyssey in a single day in Dublin.',
      editors: ['James Joyce', 'Hans Walter Gabler'],
      language: 'English',
      pages: 730,
      isbn: '978-0-394-74312-8',
      coverImage: '/book8.png',
      reviewer: 'Samantha Lee',
      review: 'A revolutionary work in modernist literature.',
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description: 'A novel about teenage rebellion and alienation.',
      editors: ['J.D. Salinger', 'E.L. Doctorow'],
      language: 'English',
      pages: 214,
      isbn: '978-0-316-76948-0',
      coverImage: '/book9.png',
      reviewer: 'Michael Clark',
      review: 'A poignant exploration of adolescence.',
    },
    {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      description: 'A psychological drama about a young man who commits a crime and the consequences that follow.',
      editors: ['Fyodor Dostoevsky', 'Richard Pevear'],
      language: 'English',
      pages: 671,
      isbn: '978-0-679-42332-3',
      coverImage: '/book10.png',
      reviewer: 'Laura King',
      review: 'A deep dive into the human psyche and morality.',
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      description: 'A dystopian novel set in a future world state of genetically modified citizens.',
      editors: ['Aldous Huxley', 'Christopher Hitchens'],
      language: 'English',
      pages: 268,
      isbn: '978-0-06-085052-4',
      coverImage: '/book11.png',
      reviewer: 'Peter Moore',
      review: 'A thought-provoking look at a possible future.',
    },
    {
      title: 'The Odyssey',
      author: 'Homer',
      description: 'An epic poem about the adventures of Odysseus as he returns home from the Trojan War.',
      editors: ['Homer', 'Robert Fagles'],
      language: 'English',
      pages: 541,
      isbn: '978-0-14-026886-7',
      coverImage: '/book12.png',
      reviewer: 'Nancy Hill',
      review: 'An enduring epic of heroism and adventure.',
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      description: 'A tale of passion and revenge on the Yorkshire moors.',
      editors: ['Emily Brontë', 'Pauline Nestor'],
      language: 'English',
      pages: 416,
      isbn: '978-0-19-953560-6',
      coverImage: '/book13.png',
      reviewer: 'Kevin Wright',
      review: 'A haunting and tragic love story.',
    },
    {
      title: 'The Iliad',
      author: 'Homer',
      description: 'An epic poem about the Trojan War and the Greek siege of the city of Troy.',
      editors: ['Homer', 'Robert Fagles'],
      language: 'English',
      pages: 704,
      isbn: '978-0-14-027536-0',
      coverImage: '/book14.png',
      reviewer: 'Sara Robinson',
      review: 'A foundational work of Western literature.',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'A fantasy novel about the adventures of Bilbo Baggins in Middle-earth.',
      editors: ['J.R.R. Tolkien', 'Douglas A. Anderson'],
      language: 'English',
      pages: 310,
      isbn: '978-0-618-00221-3',
      coverImage: '/book15.png',
      reviewer: 'Michelle Adams',
      review: 'A charming prelude to The Lord of the Rings.',
    },
    {
      title: 'Great Expectations',
      author: 'Charles Dickens',
      description: 'A coming-of-age story about the orphan Pip.',
      editors: ['Charles Dickens', 'David Trotter'],
      language: 'English',
      pages: 505,
      isbn: '978-0-14-143956-3',
      coverImage: '/book16.png',
      reviewer: 'Daniel Scott',
      review: 'A vivid depiction of Victorian England.',
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      description: 'A novel about the young scientist Victor Frankenstein who creates a grotesque creature.',
      editors: ['Mary Shelley', 'Maurice Hindle'],
      language: 'English',
      pages: 280,
      isbn: '978-0-14-143947-1',
      coverImage: '/book17.png',
      reviewer: 'Olivia Thompson',
      review: 'A pioneering work of science fiction and horror.',
    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      description: 'A novel about the experiences of the orphaned Jane Eyre.',
      editors: ['Charlotte Brontë', 'Michael Mason'],
      language: 'English',
      pages: 532,
      isbn: '978-0-14-144114-6',
      coverImage: '/book18.png',
      reviewer: 'Paul Harris',
      review: 'A powerful narrative of individuality and passion.',
    },
    {
      title: 'Dracula',
      author: 'Bram Stoker',
      description: 'A gothic horror novel about the vampire Count Dracula.',
      editors: ['Bram Stoker', 'Maurice Hindle'],
      language: 'English',
      pages: 418,
      isbn: '978-0-14-143984-6',
      coverImage: '/book19.png',
      reviewer: 'Linda Young',
      review: 'A chilling tale of terror and suspense.',
    },
    {
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      description: 'A philosophical novel about the young and handsome Dorian Gray.',
      editors: ['Oscar Wilde', 'Robert Mighall'],
      language: 'English',
      pages: 254,
      isbn: '978-0-14-143957-0',
      coverImage: '/book20.png',
      reviewer: 'Andrew Lewis',
      review: 'A dark exploration of vanity and moral corruption.',
    }
  ];
  
  export default books;
  