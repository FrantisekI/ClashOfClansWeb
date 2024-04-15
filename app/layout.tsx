import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local';
const myFont = localFont({
  src: '../styles/fonts/Supercell-Magic3.ttf',
  display: 'swap',
});



const inter = Inter({ subsets: ["latin"] });

/*export const metadata: Metadata = {
  title: "FrantisekDoMaths",
  description: "Metadata for the FrantisekDoMaths application",
};*/

import MyNav from "@/components/navigationList";
/*import MyComponent from "@/components/test";*/


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="cz">
      <head>
        <link rel="icon" href="/omega.svg" />
      </head>
      <body className={myFont.className}>
        
        <nav>
          <Image src="/hamburger.svg" className="hamburger" alt="omega" width={50} height={50} />
                   
          <MyNav />
          
        </nav>
        {children}
      </body>
    </html>
  );
}
