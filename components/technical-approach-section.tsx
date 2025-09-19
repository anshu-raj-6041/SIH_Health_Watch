"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Brain,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Settings,
  BarChart3,
  Users,
  AlertTriangle,
} from "lucide-react"

const technicalSteps = [
  {
    id: 1,
    title: "Data Collection",
    icon: Smartphone,
    description: "Multi-source health data gathering",
    details: [
      "Mobile app symptom reporting",
      "IoT sensor networks",
      "Hospital management systems",
      "Laboratory test results",
      "Environmental monitoring",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    id: 2,
    title: "Data Processing",
    icon: Database,
    description: "Real-time data validation and storage",
    details: [
      "Data quality assurance",
      "Standardization protocols",
      "Secure cloud storage",
      "Privacy compliance",
      "Real-time synchronization",
    ],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
  {
    id: 3,
    title: "AI Analysis",
    icon: Brain,
    description: "Machine learning pattern recognition",
    details: [
      "Anomaly detection algorithms",
      "Predictive modeling",
      "Risk assessment scoring",
      "Trend analysis",
      "Outbreak prediction",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    id: 4,
    title: "Alert Generation",
    icon: AlertTriangle,
    description: "Intelligent warning system",
    details: [
      "Risk-based notifications",
      "Multi-channel alerts",
      "Severity classification",
      "Geographic targeting",
      "Escalation protocols",
    ],
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
  {
    id: 5,
    title: "Visualization",
    icon: BarChart3,
    description: "Interactive dashboards and reports",
    details: [
      "Real-time dashboards",
      "Geographic heat maps",
      "Trend visualizations",
      "Custom reports",
      "Mobile-friendly views",
    ],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
  {
    id: 6,
    title: "Action & Response",
    icon: Users,
    description: "Community and official response coordination",
    details: [
      "Response team coordination",
      "Resource allocation",
      "Public health measures",
      "Community notifications",
      "Feedback integration",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
]

export function TechnicalApproachSection() {
  const [selectedStep, setSelectedStep] = React.useState<number | null>(null)
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([])

  const handleStepClick = (stepId: number) => {
    setSelectedStep(selectedStep === stepId ? null : stepId)
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  return (
    <section id="technical-approach" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20 mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Technical Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            How Our
            <span className="text-secondary"> Smart System</span> Works
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A comprehensive six-step approach combining advanced technology with community engagement for effective
            health surveillance.
          </p>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < technicalSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-0">
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-muted-foreground" />
                  </div>
                )}

                {/* Step Card */}
                <Card
                  className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedStep === step.id
                      ? `${step.borderColor} border-2 shadow-lg scale-105`
                      : "border hover:border-primary/30"
                  } ${completedSteps.includes(step.id) ? "bg-muted/30" : "bg-card"}`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center transition-transform duration-300 ${
                          selectedStep === step.id ? "scale-110" : ""
                        }`}
                      >
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      {completedSteps.includes(step.id) && <CheckCircle className="w-5 h-5 text-green-500" />}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        Step {step.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>

                  {/* Expanded Details */}
                  {selectedStep === step.id && (
                    <CardContent className="pt-0 animate-fade-in-up">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Components:</h4>
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full ${step.bgColor.replace("/10", "/60")}`}></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
            <p className="text-muted-foreground">
              Built with cutting-edge technologies for reliability and scalability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React Native", category: "Mobile" },
              { name: "Node.js", category: "Backend" },
              { name: "TensorFlow", category: "AI/ML" },
              { name: "PostgreSQL", category: "Database" },
              { name: "Redis", category: "Caching" },
              { name: "Docker", category: "DevOps" },
              { name: "AWS", category: "Cloud" },
              { name: "WebRTC", category: "Real-time" },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors text-center group"
              >
                <div className="font-semibold text-sm group-hover:text-primary transition-colors">{tech.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-6 rounded-2xl bg-gradient-to-r from-secondary/10 via-background to-primary/10 border border-secondary/20">
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-1">Ready to see it in action?</h4>
              <p className="text-sm text-muted-foreground">Explore our interactive dashboard preview</p>
            </div>
            <Button className="gradient-saffron text-white hover:opacity-90 transition-opacity">
              View Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
