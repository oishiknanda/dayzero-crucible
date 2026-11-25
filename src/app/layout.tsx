import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/auth/Providers";
import NavigationProgress from "@/components/ui/NavigationProgress";
import SiteFooter from "@/components/SiteFooter";

const inter = Manrope({ subsets: ["latin"], variable: "--font-sans" });

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
      <body className="bg-background text-slate-950 font-sans antialiased"><Providers><NavigationProgress />{children}<SiteFooter /></Providers></body>
    </html>
  );
}
