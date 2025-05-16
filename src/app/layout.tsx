import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {Toaster} from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Percy Pocket solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`, "relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden")} 
        style={{fontFamily: "Plus Jakarta Sans, Noto Sans, sans-serif"}}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
