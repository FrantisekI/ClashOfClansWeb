'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local';
import { useState } from "react";
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
  

  /*const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  <Image
            src="/hamburger.svg"
            className="hamburger"
            alt="omega"
            width={50}
            height={50}
            onClick={handleClick}
          />
          {showDiv && <div>Revealed div</div>}*/

  return (
    <html lang="cz">
      <head>
        <link rel="icon" href="/omega.svg" />
      </head>
      <body className={myFont.className}>
        <nav>
          
          <MyNav />
        </nav>
        
        {children}
      </body>
    </html>
  );
}
