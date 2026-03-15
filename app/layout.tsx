import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ONEZ | 부산 영도 복합문화공간",
    template: "%s | ONEZ",
  },
  description:
    "부산 영도에 위치한 레스토랑형 카페이자 복합문화공간 ONEZ. 식사, 커피, 전시, 모임, 대관이 함께 흐르는 공간.",
  keywords: ["ONEZ", "영도", "부산", "카페", "레스토랑", "복합문화공간", "대관"],
  authors: [{ name: "ONEZ" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "ONEZ",
    title: "ONEZ | 부산 영도 복합문화공간",
    description:
      "부산 영도의 레스토랑형 카페이자 복합문화공간 ONEZ. 식사, 커피, 전시, 모임, 대관이 함께 흐르는 공간.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}