import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// SEO metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL("https://www.aaruush.dev"),
  title: {
    default: "Aarush Tanwar",
    template: "%s | Aarush Tanwar",
  },
  description: "Aarush Tanwar - Developer",
  twitter: {
    title: "Aarush Tanwar",
    card: "summary_large_image",
    creator: "@thisisaarush",
  },
  openGraph: {
    title: "Aarush Tanwar",
    description: "Developer Portfolio",
    url: "https://www.aaruush.dev",
    siteName: "Aarush Tanwar",
    locale: "en_US",
    type: "website",
    images: ["/aarush-tanwar-banner.svg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="max-w-5xl px-6 py-10 mx-auto">{children}</div>
      </body>
    </html>
  )
}
