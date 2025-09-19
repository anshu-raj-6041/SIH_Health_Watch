"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  MapPin,
  Smartphone,
  Users,
  ArrowRight,
  Zap,
  Shield,
  Globe,
} from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Real-time Health Monitoring",
    description: "Continuous surveillance of health indicators with instant data processing and analysis.",
    details:
      "Monitor vital health metrics across communities with advanced sensor networks and mobile reporting systems.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "/hospital-digital-health.jpg",
  },
  {
    icon: AlertTriangle,
    title: "Early Warning System",
    description: "AI-powered alerts for potential disease outbreaks and health emergencies.",
    details: "Predictive algorithms analyze patterns to provide early warnings 48-72 hours before traditional methods.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    image: "/health-checkup-community.jpg",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive data visualization and trend analysis for informed decision-making.",
    details: "Interactive dashboards with machine learning insights for health officials and researchers.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: "/prevention-methods.jpg",
  },
  {
    icon: MapPin,
    title: "Hotspot Mapping",
    description: "Geographic visualization of health incidents and risk areas.",
    details: "Real-time mapping of disease clusters with predictive modeling for resource allocation.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "/community-health-workers.jpg",
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "User-friendly mobile app for community health reporting and updates.",
    details: "Multilingual mobile platform enabling citizens to report symptoms and receive health alerts.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: "/elderly-digital-health.jpg",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Collaborative platform connecting health workers, officials, and citizens.",
    details: "Integrated communication system fostering community participation in health surveillance.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "/womens-health-group.jpg",
  },
]

export function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Comprehensive Health
            <span className="text-primary"> Surveillance</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our advanced system combines cutting-edge technology with community-driven approaches to create a robust
            health monitoring ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div
                  className={`absolute top-4 left-4 w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{feature.details}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-primary/20">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold">Secure & Compliant</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Multilingual Support</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-primary" />
              <span className="font-semibold">24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
