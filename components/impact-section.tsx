"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Clock, Shield, Heart, Globe } from "lucide-react"

const impactMetrics = [
  {
    icon: Users,
    label: "Lives Protected",
    value: 50000,
    suffix: "+",
    description: "People covered by our surveillance network",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: 24,
    suffix: "hrs",
    description: "Average time to detect and alert on outbreaks",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: TrendingUp,
    label: "Reports Processed",
    value: 125000,
    suffix: "+",
    description: "Health reports analyzed and processed",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    label: "Accuracy Rate",
    value: 94,
    suffix: "%",
    description: "Prediction accuracy for disease outbreaks",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Heart,
    label: "Health Workers",
    value: 2500,
    suffix: "+",
    description: "Healthcare professionals using our platform",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Globe,
    label: "Communities",
    value: 150,
    suffix: "+",
    description: "Villages and towns actively participating",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

const benefits = [
  {
    title: "Early Detection",
    description: "Identify health threats 48-72 hours earlier than traditional methods",
    impact: "Reduced outbreak severity by 60%",
  },
  {
    title: "Resource Optimization",
    description: "Intelligent allocation of medical resources based on predictive analytics",
    impact: "30% improvement in resource utilization",
  },
  {
    title: "Community Empowerment",
    description: "Enable citizens to actively participate in health surveillance",
    impact: "85% increase in community health reporting",
  },
  {
    title: "Cost Reduction",
    description: "Significant reduction in healthcare costs through prevention",
    impact: "40% decrease in emergency response costs",
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, value, duration])

  return <div ref={ref}>{count.toLocaleString()}</div>
}

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium border border-green-500/20 mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Impact & Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Measurable
            <span className="text-green-500"> Impact</span> on Public Health
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our smart health surveillance system has delivered significant improvements in health outcomes across
            communities, with measurable results that demonstrate its effectiveness.
          </p>
        </div>

        {/* Impact Metrics with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="text-center bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 rounded-full ${metric.bgColor} flex items-center justify-center mx-auto mb-4`}
                >
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter value={metric.value} />
                  <span className="text-lg">{metric.suffix}</span>
                </div>
                <h3 className="font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Key Benefits Achieved</h3>
            <p className="text-muted-foreground">Tangible improvements in health outcomes and system efficiency</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20">
                    {benefit.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-green-500/5 via-background to-primary/5 border-green-500/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20 mb-4">Success Story</Badge>
                <h3 className="text-2xl font-bold mb-4">Dengue Outbreak Prevention in Guwahati</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-2">72hrs</div>
                  <p className="text-sm text-muted-foreground">Earlier detection than traditional methods</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">80%</div>
                  <p className="text-sm text-muted-foreground">Reduction in potential cases</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">15K+</div>
                  <p className="text-sm text-muted-foreground">People protected through early intervention</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6 leading-relaxed">
                Our system detected unusual patterns in symptom reports and environmental data, triggering early
                intervention measures that prevented a major dengue outbreak in Guwahati during the 2023 monsoon season.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
