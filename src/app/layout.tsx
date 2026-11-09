import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/auth/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DAY-ZERO.AI | Tech Placement Flight Simulator",
  description: "All-in-one flight simulator for real tech placement interviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-slate-950 font-sans antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
