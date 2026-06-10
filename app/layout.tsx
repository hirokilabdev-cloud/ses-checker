import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SES案件チェッカー | SES案件比較ツール",
  description: "SES案件の単価・リモート・通勤・スキル相性を比較できる無料ツール",
  keywords: [
    "SES",
    "案件比較",
    "案件診断",
    "フリーランス",
    "Java",
    "リモートワーク",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KYETF0S7CL"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KYETF0S7CL');
          `}
        </Script>
      </body>
      
    </html>
  );
}
