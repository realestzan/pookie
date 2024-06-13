import { NextRequest, NextResponse } from 'next/server';
import { addBook } from '@/lib/operations';

export async function POST(req: NextRequest) {
  try {
    const { id, createdAt, createdBy, title, author, description, language, cover_image, pages } = await req.json();

    await addBook({
      // id,
      createdAt: new Date(),
      createdBy,

      title,
      author,
      description,

      language,
      cover_image,
      pages,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to insert book' }, { status: 500 });
  }
}

// import { NextApiRequest, NextApiResponse } from 'next';
// import { addBook } from '@/lib/operations';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { id, title, author, description, language, isbn, cover_image, reviewer, review, pages } = req.body;

//     console.log("POST", req.body)

//     try {
//       await addBook({
//         id,
//         title,
//         author,
//         description,
//         language,
//         isbn,
//         cover_image,
//         reviewer,
//         review,
//         pages,
//       });
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: 'Failed to insert book' });
//     }
//   } else {
//     res.status(405).json({ success: false, error: 'Method not allowed' });
//   }
// }
