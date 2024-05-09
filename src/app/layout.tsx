import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutProps } from '@/types/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn App Router",
  description: "Generated by Mykola Fant",
};

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}