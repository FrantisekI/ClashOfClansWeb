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

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


const inter = Inter({ subsets: ["latin"] });

import MyNav from "@/components/navigationList";



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
      <body className={roboto.className}>
        <nav>
          
          <MyNav />
        </nav>
        
        {children}
      </body>
    </html>
  );
}
