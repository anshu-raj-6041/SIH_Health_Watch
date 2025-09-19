import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-switcher"
import { AccessibilitySkipLink } from "@/components/accessibility-skip-link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Smart Health Surveillance System | HealthWatch India",
  description:
    "AI-powered health surveillance and early warning system for better public health outcomes across India. Real-time disease tracking, predictive analytics, and community engagement.",
  keywords:
    "health surveillance, early warning system, AI healthcare, disease tracking, public health, India, Assam, health monitoring",
  authors: [{ name: "Government of Assam" }],
  creator: "HealthWatch Team",
  publisher: "Government of Assam",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://healthwatch.gov.in",
    title: "Smart Health Surveillance System | HealthWatch India",
    description:
      "AI-powered health surveillance and early warning system for better public health outcomes across India",
    siteName: "HealthWatch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Health Surveillance System | HealthWatch India",
    description:
      "AI-powered health surveillance and early warning system for better public health outcomes across India",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AccessibilitySkipLink />
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
            <LanguageProvider>
              <div id="main-content">{children}</div>
              <ScrollToTop />
            </LanguageProvider>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
