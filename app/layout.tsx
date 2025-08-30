import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/theme-provider";

// Load fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edustax",
  description: "Learning Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300
          dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
          bg-fixed
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
