import { ThemeProvider } from "@/components/theme-provider"

import type { Metadata } from "next";

import "./globals.css";


import { Inter } from 'next/font/google';
import { AuroraBackgroundDemo } from "@/components/aurora-background-demo";

const inter = Inter({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});



export const metadata: Metadata = {
  title: "Pookie",
  description: "Book Translation SAAS",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {
              <>
                <div className="fixed right-0 left-0 -z-10">
                  {/* <AuroraBackgroundDemo />  */}
                  {/* <Vortex /> */}
                 </div>
              {children}
              </>
              
            }
          </ThemeProvider>
        </body>
    </html>
  );
}

