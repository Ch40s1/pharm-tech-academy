import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PharmTechAcademy",
  description: "Learning resources for pharmacy technicians",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
