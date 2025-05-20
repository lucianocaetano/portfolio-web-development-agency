import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Percy Pocket Solutions",
  description: "Percy Pocket Solutions' website",
  icons: {
    icon: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}>
      <body
        className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
      >
        <Navbar />
        <main className="layout-container px-4 w-full max-w-7xl mx-auto justify-center flex flex-col py-4 space-y-16">
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
