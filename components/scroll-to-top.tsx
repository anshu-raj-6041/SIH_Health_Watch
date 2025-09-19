"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-lg transition-all duration-300",
        "bg-primary hover:bg-primary/90 text-primary-foreground",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none",
      )}
      onClick={scrollToTop}
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
