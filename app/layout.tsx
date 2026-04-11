import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = localFont({
  src: "../public/fonts/outfit.ttf",
  variable: "--font-inter",
  display: "swap",
});

const notoSansKR = localFont({
  src: "../public/fonts/notosansKR.otf",
  variable: "--font-kr",
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
    default: "one z| 부산 영도 복합문화공간",
    template: "%s | one z",
  },
  description:
    "부산 영도에 위치한 레스토랑형 카페이자 복합문화공간 one z. 식사, 커피, 전시, 모임, 대관이 함께 흐르는 공간.",
  keywords: [
    "onez",
    "영도",
    "부산",
    "카페",
    "레스토랑",
    "복합문화공간",
    "대관",
  ],
  authors: [{ name: "onez" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "one z",
    title: "one z | 부산 영도 복합문화공간",
    description:
      "부산 영도의 레스토랑형 카페이자 복합문화공간 one z. 식사, 커피, 전시, 모임, 대관이 함께 흐르는 공간.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${outfit.variable} ${notoSansKR.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
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
