import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatePresence } from "motion/react";

const lexendExa = localFont({
  src: "./fonts/LexendExa.ttf",
  variable: "--font-lexend-exa",
  weight: "300",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Explore Machine Learning Concepts",
  description: "Learn complex machine learning and AI concepts online using interactive elements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnimatePresence mode="wait">
      <body className={`${lexendExa.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </AnimatePresence>
    </html>
  );
}
