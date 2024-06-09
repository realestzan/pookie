'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Error = () => {

  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(() => {
    // Set up the interval to update the countdown every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the countdown reaches 0 or the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Redirect when the countdown reaches 0
    if (timeLeft <= 0) {
      router.push('/');
    }
  }, [timeLeft, router]);

  return (
        <div>

            {/* <VortexDemo /> */}
            <div className="grid h-screen place-content-center">
    <div className="text-center">
      <h1 className="text-9xl font-black text-gray-200">40{timeLeft}s</h1>
  
      <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">Uh-oh!</p>
  
      <p className="mt-4 text-gray-500">We cant find that page.</p>
      <p className="text-gray-500">Automatical go back in {timeLeft}s...</p>
  
      <Button
        variant="default"
        className="mt-8"
        onClick={() => router.back()}
      >
        Go Back Home
      </Button>
    </div>
  </div>

        </div>
  )
}

export default Error
