import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Šlep služba Munja – Brza, pouzdana i dostupna 24/7",
  description: "Šlep služba Munja nudi usluge prevoza i šlepanja vozila po najpovoljnijim cenama uz dolazak za 10-15 minuta. Prevoz vozila do 7 tona, traktora, bagera i radnih mašina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
