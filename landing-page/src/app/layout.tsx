import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import '@/styles/animations.css'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matcha | AI-Powered Job Matching Platform",
  description: "Revolutionary AI-powered job matching and screening platform for applicants and employers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
