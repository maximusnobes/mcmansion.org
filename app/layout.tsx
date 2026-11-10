import type React from "react"
import type { Metadata } from "next"
import { Newsreader, Karla } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
})

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
})

export const metadata: Metadata = {
  title: "McMansion | Intentional Living Community",
  description: "An intentional living community, co-op, and communal home in the heart of the city.",
  generator: "v0.app",
  icons: {
    icon: "/icon.webp",
    apple: "/icon.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${karla.variable} ${newsreader.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
