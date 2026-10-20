import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import IntroAnimation from "@/components/IntroAnimation";

import "./globals.css";
import { AppProvider } from "@/context/AppContext";

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
  metadataBase: new URL("https://www.ubaidismail.com"),
  title: "Ubaid Ismail | UI/UX Designer & Full-Stack Developer",
  description:
    "UI/UX designer and full-stack developer",
  applicationName: "Ubaid Ismail Portfolio",
  authors: [{ name: "Ubaid Ismail", url: "https://www.ubaidismail.com" }],
  creator: "Ubaid Ismail",
  alternates: { canonical: "/" },
  keywords: [
    "Ubaid Ismail",
    "UI/UX designer",
    "product designer",
    "full-stack developer",
    "web applications",
    "ERP UX",
    "workflow automation",
    "AI automation",
    "n8n",
    "Next.js",
    "React",
    "Doha Qatar",
  ],
  openGraph: {
    type: "website",
    url: "https://www.ubaidismail.com",
    siteName: "Ubaid Ismail Portfolio",
    title: "Ubaid Ismail | UI/UX Designer & Full-Stack Developer",
    description:
      "I turn thoughts into design, problems into products, and imagination into experiences.",
    locale: "en_US",
    images: [
      {
        url: "/images/ubaid.jpeg",
        width: 706,
        height: 842,
        alt: "Ubaid Ismail, UI/UX designer and full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubaid Ismail | UI/UX Designer & Full-Stack Developer",
    description:
      "I turn thoughts into design, problems into products, and imagination into experiences.",
    images: ["/images/ubaid.jpeg"],
  },
  robots: { index: true, follow: true },
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
      <main className="relative z-10 flex min-h-screen flex-col">
        <IntroAnimation />
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </main>
    </body>
  </html>
);

}
