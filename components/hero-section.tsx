"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Activity, Users } from "lucide-react"
import { useLanguage } from "@/components/language-switcher"

export function HeroSection() {
  const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([])
  const { t } = useLanguage()

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const newRipple = { id: Date.now(), x, y }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Ripple Container */}
      <div className="absolute inset-0 cursor-pointer" onClick={createRipple}>
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute w-4 h-4 bg-primary/20 rounded-full animate-ripple pointer-events-none"
            style={{
              left: ripple.x - 8,
              top: ripple.y - 8,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Shield className="w-4 h-4 mr-2" />
            Advanced Health Surveillance System
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
            <div className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Smart Health Surveillance
            </div>
            <div className="block bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              and
            </div>
            <div className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Early Warnings
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="flex items-center space-x-2 text-sm">
              <Activity className="w-5 h-5 text-primary" />
              <span className="font-semibold">Real-time Monitoring</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Community-Driven</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold">AI-Powered Alerts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="gradient-saffron text-white hover:opacity-90 transition-opacity group"
              onClick={() => scrollToSection("#dashboard")}
            >
              {t("hero.exploreBtn")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              onClick={() => scrollToSection("#features")}
            >
              {t("hero.learnBtn")}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-primary rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  )
}
