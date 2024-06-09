import { NextApiRequest, NextApiResponse } from 'next';
import { addBook } from '@/lib/operations';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, title, author, description, language, isbn, cover_image, reviewer, review, pages } = req.body;

    try {
      await addBook({
        id,
        title,
        author,
        description,
        language,
        isbn,
        cover_image,
        reviewer,
        review,
        pages,
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to insert book' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
