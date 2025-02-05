import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import "./fonts.css";
import '@/styles/animations.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Matcha | AI-Powered Job Matching Platform",
  description: "Revolutionary AI-powered job matching and screening platform for applicants and employers",
  icons: {
    icon: '/logos/matcha-icon.png',
    apple: '/logos/matcha-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-body bg-stone-50 text-stone-800`}>
        {children}
      </body>
    </html>
  )
}
