import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Venue Name | Cultural Space & Events",
    template: "%s | Venue Name",
  },
  description: "A premier cultural venue and event space dedicated to bringing unforgettable experiences to our community.",
  keywords: ["venue", "events", "cultural space", "concerts", "exhibitions"],
  authors: [{ name: "Venue Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Venue Name",
    title: "Venue Name | Cultural Space & Events",
    description: "A premier cultural venue and event space dedicated to bringing unforgettable experiences to our community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
