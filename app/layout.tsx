import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Finn - Your Smart Financial Assistant",
  description: "Finn automatically sets aside money for bills before you can spend it. Smart paycheck detection, intelligent bill routing, and automated payments for peace of mind.",
  keywords: "smart financial assistant, automatic bill payment, financial automation, paycheck management, intelligent budgeting, automated savings",
  openGraph: {
    title: "Finn - Your Smart Financial Assistant",
    description: "Finn automatically sets aside money for bills before you can spend it.",
    type: "website",
    locale: "en_US",
    siteName: "Finn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finn - Smart Financial Assistant",
    description: "Never miss a bill payment again. Finn automatically manages your money so bills are always paid on time.",
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
