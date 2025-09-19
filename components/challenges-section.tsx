"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Lightbulb, Target } from "lucide-react"

const challenges = [
  {
    id: "data-quality",
    question: "How do we ensure data quality and accuracy?",
    answer:
      "We implement multi-layer validation systems including automated data quality checks, cross-referencing with multiple sources, and machine learning algorithms that detect anomalies. Our system also includes manual verification processes for critical alerts and maintains audit trails for all data inputs.",
    category: "Technical",
    status: "solved",
  },
  {
    id: "privacy-security",
    question: "What about patient privacy and data security?",
    answer:
      "Our system follows strict HIPAA compliance and Indian data protection regulations. We use end-to-end encryption, anonymization techniques, and role-based access controls. Personal health information is stored separately from analytical data, and we conduct regular security audits.",
    category: "Security",
    status: "solved",
  },
  {
    id: "rural-connectivity",
    question: "How does the system work in areas with poor internet connectivity?",
    answer:
      "We've designed offline-first mobile applications that can store data locally and sync when connectivity is available. The system also supports SMS-based reporting and uses edge computing to process critical alerts locally before sending to central servers.",
    category: "Infrastructure",
    status: "solved",
  },
  {
    id: "language-barriers",
    question: "How do we handle multiple languages and dialects?",
    answer:
      "Our platform supports 12+ Indian languages with voice-to-text capabilities in local dialects. We use AI-powered translation services and have partnered with local communities to ensure cultural and linguistic accuracy in health communications.",
    category: "Accessibility",
    status: "solved",
  },
  {
    id: "false-positives",
    question: "How do we minimize false alarms and alert fatigue?",
    answer:
      "We use sophisticated machine learning models trained on historical data to reduce false positives. The system employs confidence scoring, multi-source verification, and adaptive thresholds that learn from feedback. Critical alerts require multiple confirmation points before triggering.",
    category: "Technical",
    status: "solved",
  },
  {
    id: "resource-allocation",
    question: "How does the system help with resource allocation during emergencies?",
    answer:
      "Our platform includes predictive modeling for resource needs, real-time inventory tracking, and automated resource allocation algorithms. It can predict demand surges and suggest optimal distribution of medical supplies, personnel, and equipment across affected regions.",
    category: "Operations",
    status: "in-progress",
  },
]

export function ChallengesSection() {
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const handleAccordionChange = (value: string[]) => {
    setOpenItems(value)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Technical: "bg-primary/10 text-primary border-primary/20",
      Security: "bg-destructive/10 text-destructive border-destructive/20",
      Infrastructure: "bg-secondary/10 text-secondary border-secondary/20",
      Accessibility: "bg-green-500/10 text-green-600 border-green-500/20",
      Operations: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    }
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground"
  }

  const getStatusIcon = (status: string) => {
    return status === "solved" ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <Target className="w-4 h-4 text-yellow-500" />
    )
  }

  return (
    <section id="challenges" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 mb-6">
            <AlertCircle className="w-4 h-4 mr-2" />
            Challenges & Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Overcoming
            <span className="text-destructive"> Complex Challenges</span> in Health Surveillance
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We've identified and addressed the key challenges in implementing a comprehensive health surveillance system
            across diverse Indian communities.
          </p>
        </div>

        {/* Challenges Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Challenges Identified", value: "15+", icon: AlertCircle },
              { label: "Solutions Implemented", value: "12", icon: CheckCircle },
              { label: "Success Rate", value: "94%", icon: Target },
            ].map((stat, index) => (
              <Card key={index} className="text-center bg-muted/30">
                <CardContent className="p-4">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h3>
            <p className="text-center text-muted-foreground">
              Click on any question to explore our solutions and approaches
            </p>
          </div>

          <Accordion type="multiple" value={openItems} onValueChange={handleAccordionChange} className="space-y-4">
            {challenges.map((challenge) => (
              <AccordionItem
                key={challenge.id}
                value={challenge.id}
                className="border rounded-lg px-6 bg-card hover:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center justify-between w-full text-left">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(challenge.status)}
                      <span className="font-semibold">{challenge.question}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={getCategoryColor(challenge.category)}>
                        {challenge.category}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-7">
                    <p className="text-muted-foreground leading-relaxed">{challenge.answer}</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <Badge
                        variant={challenge.status === "solved" ? "default" : "outline"}
                        className={
                          challenge.status === "solved"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                        }
                      >
                        {challenge.status === "solved" ? "Implemented" : "In Progress"}
                      </Badge>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Insight */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-4">Continuous Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team continuously identifies new challenges and develops innovative solutions. We believe that
                addressing these challenges head-on is crucial for building a robust and reliable health surveillance
                system that serves all communities effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
