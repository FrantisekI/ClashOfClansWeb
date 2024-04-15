'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { usePathname } from "next/navigation";
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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <html lang="cz">
      <head>
        <link rel="icon" href="/omega.svg" />
      </head>
      <body className={myFont.className}>
        
        <nav>
          <img src="/hamburger.svg" className="hamburger"/>
          <ul>
            <li className={isActive('/') ? 'active' : ''}>
              <Link 
              className={`${'nav-button'} ${isActive('/') ? 'active' : ''}`} 
              href="/">vítejte</Link>
            </li>
            <li className={isActive('/pravidla') ? 'active' : ''}>
              <Link 
              className={`${'nav-button'} ${isActive('/pravidla') ? 'active' : ''}`} 
              href="/pravidla">pravidla</Link>
            </li>
            <li className={isActive('/triky') ? 'active' : ''}>
              <Link 
              className={`${'nav-button'} ${isActive('/triky') ? 'active' : ''}`} 
              href="/triky">tipy a triky</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
