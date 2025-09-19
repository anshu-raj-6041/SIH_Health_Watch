"use client"
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "AI Detection", href: "#ai-detection" },
    { name: "Community", href: "#community" },
  ],
  company: [
    { name: "About Us", href: "#impact" },
    { name: "Our Team", href: "#community" },
    { name: "Contact", href: "#contact" },
    { name: "Support", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#features" },
    { name: "API Reference", href: "#dashboard" },
    { name: "Community", href: "#community" },
    { name: "Help Center", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Compliance", href: "#compliance" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.open(href, "_blank")
    }
  }

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <section id="contact" className="py-16 border-b">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Have questions about our health surveillance system? We're here to help you make your community healthier
              and safer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card/50">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Get in touch via email</p>
              <a href="mailto:contact@healthwatch.gov.in" className="text-primary hover:underline">
                contact@healthwatch.gov.in
              </a>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/50">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-3">24/7 support hotline</p>
              <a href="tel:+911800XXXXXX" className="text-primary hover:underline">
                +91 1800-XXX-XXXX
              </a>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/50">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Our headquarters</p>
              <p className="text-primary">Guwahati, Assam, India</p>
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Activity className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">HealthWatch</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering communities with AI-driven health surveillance and early warning systems for better public
                health outcomes across India.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>contact@healthwatch.gov.in</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 1800-XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Guwahati, Assam, India</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 HealthWatch. All rights reserved. | Government of Assam Initiative
            </div>

            {/* Social Links & Controls */}
            <div className="flex items-center space-x-4">
              {/* Social Media */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                    onClick={() => scrollToSection(social.href)}
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-border"></div>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Scroll to Top */}
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="h-8 w-8 text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="h-4 w-4" />
                <span className="sr-only">Scroll to top</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
