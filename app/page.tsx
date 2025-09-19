import { ErrorBoundary } from "@/components/error-boundary"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DashboardPreviewSection } from "@/components/dashboard-preview-section"
import { AIDetectionSection } from "@/components/ai-detection-section"
import { ChallengesSection } from "@/components/challenges-section"
import { ImpactSection } from "@/components/impact-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <DashboardPreviewSection />
          <AIDetectionSection />
          <ChallengesSection />
          <ImpactSection />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
