'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectToSignIn = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/signin'); // Adjust the path to your sign-in page
  }, [router]);

  return null;
};

export default RedirectToSignIn;
