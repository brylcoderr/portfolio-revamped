import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shubham's Portfolio | Front End Developer & UI/UX Enthusiast",
  description: "Front End Developer & UI/UX Enthusiast with expertise in modern JavaScript frameworks, responsive design, and user experience.",
  icons: {
    icon: '/logo.gif',
  },
  openGraph: {
    title: "Shubham's Portfolio | Front End Developer & UI/UX Enthusiast",
    description: "Front End Developer & UI/UX Enthusiast with expertise in modern JavaScript frameworks, responsive design, and user experience.",
    url: 'https://brylcoder.vercel.app',
    siteName: "Shubham's Portfolio",
    images: [
      {
        url: '/logo.gif',
        width: 1200,
        height: 630,
        alt: "Shubham's Portfolio"
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shubham's Portfolio | Front End Developer",
    description: "Front End Developer & UI/UX Enthusiast with expertise in modern JavaScript frameworks, responsive design, and user experience.",
    images: ['/logo.gif'],
    creator: 'Brylcoder'
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="theme-purple">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'