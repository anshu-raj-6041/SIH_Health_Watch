"use client"

import * as React from "react"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    translations: {
      hero: {
        title: "Smart Health Surveillance & Early Warning",
        subtitle:
          "Empowering communities with AI-driven health monitoring, real-time disease tracking, and predictive analytics for better public health outcomes across India.",
        exploreBtn: "Explore Dashboard",
        learnBtn: "Learn More",
      },
      nav: {
        home: "Home",
        features: "Features",
        dashboard: "Dashboard",
        aiDetection: "AI Detection",
        about: "About",
        contact: "Contact",
      },
    },
  },
  {
    code: "hi",
    name: "हिंदी",
    nativeName: "हिंदी",
    flag: "🇮🇳",
    translations: {
      hero: {
        title: "स्मार्ट स्वास्थ्य निगरानी और प्रारंभिक चेतावनी",
        subtitle:
          "भारत भर में बेहतर सार्वजनिक स्वास्थ्य परिणामों के लिए AI-संचालित स्वास्थ्य निगरानी, वास्तविक समय रोग ट्रैकिंग और भविष्यवाणी विश्लेषण के साथ समुदायों को सशक्त बनाना।",
        exploreBtn: "डैशबोर्ड देखें",
        learnBtn: "और जानें",
      },
      nav: {
        home: "होम",
        features: "विशेषताएं",
        dashboard: "डैशबोर्ड",
        aiDetection: "AI पहचान",
        about: "हमारे बारे में",
        contact: "संपर्क",
      },
    },
  },
  {
    code: "as",
    name: "অসমীয়া",
    nativeName: "অসমীয়া",
    flag: "🇮🇳",
    translations: {
      hero: {
        title: "স্মাৰ্ট স্বাস্থ্য নিৰীক্ষণ আৰু আগতীয়া সতৰ্কবাণী",
        subtitle:
          "ভাৰতজুৰি উন্নত জনস্বাস্থ্য ফলাফলৰ বাবে AI-চালিত স্বাস্থ্য নিৰীক্ষণ, প্ৰকৃত সময়ৰ ৰোগ ট্ৰেকিং আৰু ভৱিষ্যদ্বাণীমূলক বিশ্লেষণৰ সৈতে সম্প্ৰদায়সমূহক শক্তিশালী কৰা।",
        exploreBtn: "ডেছবৰ্ড চাওক",
        learnBtn: "অধিক জানক",
      },
      nav: {
        home: "ঘৰ",
        features: "বৈশিষ্ট্যসমূহ",
        dashboard: "ডেছবৰ্ড",
        aiDetection: "AI চিনাক্তকৰণ",
        about: "আমাৰ বিষয়ে",
        contact: "যোগাযোগ",
      },
    },
  },
  {
    code: "bn",
    name: "বাংলা",
    nativeName: "বাংলা",
    flag: "🇮🇳",
    translations: {
      hero: {
        title: "স্মার্ট স্বাস্থ্য নিরীক্ষণ ও প্রাথমিক সতর্কতা",
        subtitle:
          "ভারত জুড়ে উন্নত জনস্বাস্থ্য ফলাফলের জন্য AI-চালিত স্বাস্থ্য নিরীক্ষণ, রিয়েল-টাইম রোগ ট্র্যাকিং এবং ভবিষ্যদ্বাণীমূলক বিশ্লেষণের সাথে সম্প্রদায়গুলিকে ক্ষমতায়ন।",
        exploreBtn: "ড্যাশবোর্ড দেখুন",
        learnBtn: "আরও জানুন",
      },
      nav: {
        home: "হোম",
        features: "বৈশিষ্ট্য",
        dashboard: "ড্যাশবোর্ড",
        aiDetection: "AI সনাক্তকরণ",
        about: "আমাদের সম্পর্কে",
        contact: "যোগাযোগ",
      },
    },
  },
]

// Language Context
const LanguageContext = React.createContext<{
  currentLanguage: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}>({
  currentLanguage: "en",
  setLanguage: () => {},
  t: () => "",
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = React.useState("en")

  React.useEffect(() => {
    const saved = localStorage.getItem("healthwatch-language")
    if (saved && languages.find((lang) => lang.code === saved)) {
      setCurrentLanguage(saved)
    }
  }, [])

  const setLanguage = (langCode: string) => {
    setCurrentLanguage(langCode)
    localStorage.setItem("healthwatch-language", langCode)
  }

  const t = (key: string) => {
    const lang = languages.find((l) => l.code === currentLanguage)
    if (!lang) return key

    const keys = key.split(".")
    let value: any = lang.translations

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)
  }

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-2">
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{currentLang?.nativeName}</span>
          <span className="sm:hidden">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="mr-2">{language.flag}</span>
              <span>{language.nativeName}</span>
            </div>
            {currentLanguage === language.code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
