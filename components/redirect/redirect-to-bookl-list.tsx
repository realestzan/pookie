'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectToBookList = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/book/list'); // Adjust the path to your sign-in page
  }, [router]);

  return null;
};

export default RedirectToBookList;
