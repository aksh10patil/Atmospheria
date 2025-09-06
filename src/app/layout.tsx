import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"; // 👈 import local font
import "./globals.css";

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local font (adjust path & weight)
const gua = localFont({
  src: "../../public/fonts/Guadalupana-Regular.ttf", 
  variable: "--font-guada",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Atmospheria",
  description: "The Courtyard Kitchen",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gua.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
