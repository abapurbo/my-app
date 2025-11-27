// app/layout.js
'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/navbar/page";
import Footerpage from "./layout/footer/page";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <div>
            <Navbar />
          </div>
          <div>
            {children}
          </div>
          <div>
            {/* footer */}
            <Footerpage></Footerpage>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
