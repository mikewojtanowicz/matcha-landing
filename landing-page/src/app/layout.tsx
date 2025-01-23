import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import '@/styles/animations.css'

const montserrat = Montserrat({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta"
});

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
      <body className={`${montserrat.className} ${jakarta.variable} bg-stone-50 text-stone-800 font-sans`}>
        {children}
      </body>
    </html>
  )
}
