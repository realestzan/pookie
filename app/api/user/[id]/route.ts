import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '@/lib/operations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'User ID is required and must be a single value' }, { status: 400 });
  }

  try {
    const user = await getUserById(Number(id));

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// import { NextRequest, NextResponse } from 'next/server';
// import { getUserById } from '@/lib/operations';

// // Handle GET requests
// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);

//   console.log('searchParams', searchParams);
//   const id = searchParams.get('id');

//   if (!id) {
//     return NextResponse.json({ error: 'User ID is required and must be a single value' }, { status: 400 });
//   }

//   try {
//     const user = await getUserById(Number(id));

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     return NextResponse.json(user, { status: 200 });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }
