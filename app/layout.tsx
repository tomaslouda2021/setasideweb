import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SetAside - Automatic Bill Payments Before You Can Spend",
  description: "SetAside intercepts your paycheck and locks away bill money in a protected wallet. No budgeting required. Bank-grade security, FDIC protected.",
  keywords: "automatic bill payment, financial automation, paycheck management, budgeting app, bill pay automation",
  openGraph: {
    title: "SetAside - Pay Your Bills Automatically",
    description: "SetAside intercepts your paycheck and locks away bill money in a protected wallet.",
    type: "website",
    locale: "en_US",
    siteName: "SetAside",
  },
  twitter: {
    card: "summary_large_image",
    title: "SetAside - Automatic Bill Payments",
    description: "Pay your bills automatically before temptation hits. Join 10,000+ professionals using SetAside.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
