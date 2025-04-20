import type React from "react"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { Contrail_One as FontTitle } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
})

const fontTitle = FontTitle({
  subsets: ["latin"],
  variable: "--font-title",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Daniel Carvalho | Product Designer",
  description: "Portfolio de Daniel Carvalho, Product Designer com foco em UX/UI e desenvolvimento front-end",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontTitle.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
