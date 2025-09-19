import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export function SEOHead({
  title = "Smart Health Surveillance System",
  description = "AI-powered health surveillance and early warning system for better public health outcomes across India",
  keywords = "health surveillance, early warning system, AI healthcare, disease tracking, public health, India, Assam",
  ogImage = "/og-image.png",
  canonicalUrl = "https://healthwatch.gov.in",
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}
