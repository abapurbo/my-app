// app/layout.js
'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "./layout/navbar/page";
import Footerpage from "./layout/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {  // ✅ type removed
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <Navbar />
          {children}
          <div>{/* footer */}
            <Footerpage></Footerpage>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
