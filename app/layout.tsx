import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Fira_Code } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Abhisek Penthoi | Full Stack Developer",
  description: "Professional portfolio of Abhisek Penthoi - A Full Stack Developer specializing in MERN stack development and modern web applications.",
  authors: [{ name: "Abhisek Penthoi", url: "https://github.com/AbhisekPenthoi" }],
  keywords: [
    "Abhisek Penthoi",
    "Full Stack Developer",
    "MERN Stack",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Bhubaneswar"
  ],
  creator: "Abhisek Penthoi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhisekpenthoi.dev",
    title: "Abhisek Penthoi | Full Stack Developer",
    description: "Professional portfolio showcasing full stack development projects and expertise",
    siteName: "Abhisek Penthoi Portfolio"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${firaCode.variable} font-sans bg-background text-text`}>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'