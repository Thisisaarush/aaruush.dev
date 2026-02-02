import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from "@/components/navbar"
import { CurrencyProvider } from "@/lib/currency-context"

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
    default: "Aarush Tanwar | Senior Full-Stack Developer",
    template: "%s | Aarush Tanwar",
  },
  description:
    "Senior Full-Stack Developer specializing in React, Next.js, Node.js, and AI-powered applications. 6+ years building scalable SaaS products. Available for freelance projects.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Freelance Developer",
    "AI Integration",
    "SaaS Development",
    "Web Application Development",
  ],
  authors: [{ name: "Aarush Tanwar", url: "https://www.aaruush.dev" }],
  creator: "Aarush Tanwar",
  twitter: {
    title: "Aarush Tanwar | Senior Full-Stack Developer",
    card: "summary_large_image",
    creator: "@thisisaarush",
    description:
      "Senior Full-Stack Developer specializing in React, Next.js, and AI-powered applications. Available for freelance projects.",
  },
  openGraph: {
    title: "Aarush Tanwar | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in React, Next.js, Node.js, and AI-powered applications. 6+ years building scalable SaaS products.",
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.aaruush.dev/#website",
      url: "https://www.aaruush.dev",
      name: "Aarush Tanwar",
      description: "Senior Full-Stack Developer Portfolio",
      publisher: {
        "@id": "https://www.aaruush.dev/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.aaruush.dev/#person",
      name: "Aarush Tanwar",
      url: "https://www.aaruush.dev",
      image: "https://www.aaruush.dev/profile_photo.jpg",
      jobTitle: "Senior Full-Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Rightpoint (Genpact)",
      },
      sameAs: [
        "https://github.com/thisisaarush",
        "https://linkedin.com/in/thisisaarush",
        "https://twitter.com/thisisaarush",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "AI Integration",
        "SaaS Development",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <CurrencyProvider>
          <div className="max-w-5xl px-6 py-10 mx-auto">
            <Navbar />
            {children}
          </div>
        </CurrencyProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
