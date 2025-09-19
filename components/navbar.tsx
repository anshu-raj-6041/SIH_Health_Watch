"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher, useLanguage } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.dashboard"), href: "#dashboard" },
    { name: t("nav.aiDetection"), href: "#ai-detection" },
    { name: t("nav.about"), href: "#impact" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    console.log("[v0] Scrolling to:", href)

    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      console.log("[v0] Looking for element with ID:", targetId)

      // Try multiple selectors to find the target element
      let element = document.getElementById(targetId)
      if (!element) {
        element = document.querySelector(`[data-section="${targetId}"]`)
      }
      if (!element) {
        element = document.querySelector(`section[id="${targetId}"]`)
      }
      if (!element) {
        // Try to find by class name or other attributes
        element = document.querySelector(`.${targetId}`)
      }

      console.log("[v0] Found element:", element)

      if (element) {
        const navbar = document.querySelector("nav")
        const navbarHeight = navbar ? navbar.offsetHeight : 64
        const offset = navbarHeight + 20 // Add some extra padding

        console.log("[v0] Navbar height:", navbarHeight, "Total offset:", offset)

        // Get the element's position
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        console.log("[v0] Element position:", elementPosition, "Offset position:", offsetPosition)

        // Smooth scroll to the calculated position
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      } else {
        console.log("[v0] Element not found, trying alternative approach")
        // Fallback: try to scroll to approximate position based on section order
        const sections = ["features", "dashboard", "ai-detection", "impact", "contact"]
        const sectionIndex = sections.indexOf(targetId)
        if (sectionIndex !== -1) {
          const approximatePosition = (sectionIndex + 1) * window.innerHeight * 0.8
          window.scrollTo({
            top: approximatePosition,
            behavior: "smooth",
          })
        }
      }
    } else if (href === "/") {
      console.log("[v0] Scrolling to top")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("/")} className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">HealthWatch</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9">
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
