"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Users, MessageSquare, Award, Heart } from "lucide-react"

const communityStories = [
  {
    id: 1,
    title: "Village Health Champions",
    location: "Majuli Island, Assam",
    image: "/community-health-workers.jpg",
    description:
      "Local health workers use our mobile app to report symptoms and coordinate with district health officials, creating a robust early warning network.",
    impact: "50+ villages connected",
    category: "Health Workers",
    testimonial:
      "This system has transformed how we monitor health in our remote communities. We can now detect problems early and get help quickly.",
    author: "Dr. Priya Sharma, Community Health Officer",
  },
  {
    id: 2,
    title: "Student Health Ambassadors",
    location: "Guwahati, Assam",
    image: "/medical-students-training.jpg",
    description:
      "University students participate in health surveillance by reporting symptoms and spreading awareness about disease prevention in their communities.",
    impact: "2000+ students engaged",
    category: "Education",
    testimonial:
      "Being part of this health network makes us feel responsible for our community's wellbeing. It's empowering to contribute to public health.",
    author: "Rahul Das, Student Volunteer",
  },
  {
    id: 3,
    title: "Women's Self-Help Groups",
    location: "Dibrugarh, Assam",
    image: "/womens-health-group.jpg",
    description:
      "Women's groups use the platform to share health information, report water quality issues, and coordinate community health initiatives.",
    impact: "150+ groups participating",
    category: "Community Groups",
    testimonial:
      "Through this platform, we've become the health guardians of our neighborhoods. We can quickly alert authorities about health concerns.",
    author: "Meera Gogoi, SHG Leader",
  },
  {
    id: 4,
    title: "Digital Health Literacy",
    location: "Silchar, Assam",
    image: "/elderly-digital-health.jpg",
    description:
      "Training programs help elderly community members learn to use digital health tools, ensuring no one is left behind in health surveillance.",
    impact: "500+ seniors trained",
    category: "Digital Inclusion",
    testimonial:
      "I never thought I could use a smartphone for health reporting. Now I feel confident contributing to our community's health monitoring.",
    author: "Kamala Devi, Community Elder",
  },
  {
    id: 5,
    title: "School Health Networks",
    location: "Tezpur, Assam",
    image: "/school-health-program.jpg",
    description:
      "Schools integrate health surveillance into their curriculum, teaching children to recognize symptoms and report health concerns in their families.",
    impact: "100+ schools involved",
    category: "Education",
    testimonial:
      "Our students have become health detectives in their families. They help identify symptoms early and encourage proper reporting.",
    author: "Anita Baruah, School Principal",
  },
]

const communityStats = [
  { icon: Users, label: "Active Participants", value: "25,000+", color: "text-primary" },
  { icon: MessageSquare, label: "Health Reports", value: "150,000+", color: "text-secondary" },
  { icon: Award, label: "Community Awards", value: "50+", color: "text-green-500" },
  { icon: Heart, label: "Lives Impacted", value: "100,000+", color: "text-destructive" },
]

export function CommunitySection() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % communityStories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + communityStories.length) % communityStories.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getCategoryColor = (category: string) => {
    const colors = {
      "Health Workers": "bg-primary/10 text-primary border-primary/20",
      Education: "bg-secondary/10 text-secondary border-secondary/20",
      "Community Groups": "bg-green-500/10 text-green-600 border-green-500/20",
      "Digital Inclusion": "bg-purple-500/10 text-purple-600 border-purple-500/20",
    }
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground"
  }

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Community Engagement
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Empowering
            <span className="text-secondary"> Communities</span> for Better Health
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our platform thrives on community participation. Discover how people across Assam are actively contributing
            to health surveillance and making their communities safer.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center bg-muted/30">
              <CardContent className="p-4">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {communityStories.map((story) => (
                  <div key={story.id} className="w-full flex-shrink-0">
                    <Card className="mx-4 bg-card/50 backdrop-blur-sm">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Image */}
                        <div className="relative">
                          <img
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            className="w-full h-64 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={getCategoryColor(story.category)}>{story.category}</Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 lg:p-8">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{story.location}</p>
                            <p className="text-muted-foreground leading-relaxed mb-4">{story.description}</p>
                            <Badge variant="outline" className="mb-6">
                              {story.impact}
                            </Badge>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-muted/50 rounded-lg p-4">
                            <blockquote className="text-sm italic mb-3">"{story.testimonial}"</blockquote>
                            <cite className="text-xs text-muted-foreground font-medium">— {story.author}</cite>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {communityStories.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-secondary/10 via-background to-primary/10 border-secondary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Become part of a growing network of health champions working together to create healthier communities
                across India. Your participation can make a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-saffron text-white hover:opacity-90 transition-opacity">
                  Become a Health Champion
                </Button>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
