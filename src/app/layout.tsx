import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import { AppProvider } from '../context/AppContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ubaid Ismail - Software Engineer", 
  description: "I am a software engineer with a passion for building web applications.",
  keywords: "web developer, full stack developer, need web developer, findapro, need website designer, need web developer, ubaid ismail"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >



        <main className="flex flex-col justify-between">
          <AppProvider>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </AppProvider>
        </main>

      </body>
    </html>
  );
}
