import { ThemeProvider } from "@/components/theme-provider"

import type { Metadata } from "next";

import "./globals.css";


import { Inter } from 'next/font/google';
import { AuroraBackground } from "@/components/ui/aurora-background";

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
              <div className="fixed right-0 left-0 top-0 bottom-0 -z-10">
                  <AuroraBackground><div></div></AuroraBackground>
              </div>
            }
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}

