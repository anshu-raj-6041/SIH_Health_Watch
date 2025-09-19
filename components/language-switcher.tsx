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
        symptoms: "Symptoms",
      },
      symptoms: {
        title: "Symptom Report",
        subtitle: "Record patient symptoms and basic health indicators.",
        patientInfo: "Patient Information",
        patientName: "Patient Name",
        patientNamePlaceholder: "Enter patient name",
        age: "Age",
        agePlaceholder: "Age",
        village: "Village",
        villagePlaceholder: "Select village",
        contactNumber: "Contact Number",
        contactNumberPlaceholder: "Phone number",
        symptomsTitle: "Symptoms (check all that apply)",
        additionalNotes: "Additional Notes",
        additionalNotesPlaceholder: "Any additional observations or notes...",
        submitButton: "Submit Report",
        submitting: "Submitting...",
        successMessage: "Symptom report submitted successfully!",
        errorMessage: "Error submitting report. Please try again.",
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
        symptoms: "लक्षण",
      },
      symptoms: {
        title: "लक्षण रिपोर्ट",
        subtitle: "रोगी के लक्षण और बुनियादी स्वास्थ्य संकेतक दर्ज करें।",
        patientInfo: "रोगी की जानकारी",
        patientName: "रोगी का नाम",
        patientNamePlaceholder: "रोगी का नाम दर्ज करें",
        age: "आयु",
        agePlaceholder: "आयु",
        village: "गाँव",
        villagePlaceholder: "गाँव चुनें",
        contactNumber: "संपर्क नंबर",
        contactNumberPlaceholder: "फोन नंबर",
        symptomsTitle: "लक्षण (सभी लागू विकल्पों को चुनें)",
        additionalNotes: "अतिरिक्त नोट्स",
        additionalNotesPlaceholder: "कोई अतिरिक्त अवलोकन या नोट्स...",
        submitButton: "रिपोर्ट जमा करें",
        submitting: "जमा हो रहा है...",
        successMessage: "लक्षण रिपोर्ट सफलतापूर्वक जमा हो गई!",
        errorMessage: "रिपोर्ट जमा करने में त्रुटि। कृपया पुनः प्रयास करें।",
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
        symptoms: "লক্ষণ",
      },
      symptoms: {
        title: "লক্ষণ প্ৰতিবেদন",
        subtitle: "ৰোগীৰ লক্ষণ আৰু মৌলিক স্বাস্থ্য সূচকসমূহ ৰেকৰ্ড কৰক।",
        patientInfo: "ৰোগীৰ তথ্য",
        patientName: "ৰোগীৰ নাম",
        patientNamePlaceholder: "ৰোগীৰ নাম দিয়ক",
        age: "বয়স",
        agePlaceholder: "বয়স",
        village: "গাঁও",
        villagePlaceholder: "গাঁও বাছক",
        contactNumber: "যোগাযোগ নম্বৰ",
        contactNumberPlaceholder: "ফোন নম্বৰ",
        symptomsTitle: "লক্ষণ (প্ৰযোজ্য সকলো বাছক)",
        additionalNotes: "অতিৰিক্ত নোট",
        additionalNotesPlaceholder: "যিকোনো অতিৰিক্ত পৰ্যবেক্ষণ বা নোট...",
        submitButton: "প্ৰতিবেদন দাখিল কৰক",
        submitting: "দাখিল হৈ আছে...",
        successMessage: "লক্ষণ প্ৰতিবেদন সফলভাৱে দাখিল হৈছে!",
        errorMessage: "প্ৰতিবেদন দাখিল কৰাত ত্ৰুটি। অনুগ্ৰহ কৰি পুনৰ চেষ্টা কৰক।",
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
        symptoms: "লক্ষণ",
      },
      symptoms: {
        title: "লক্ষণ প্রতিবেদন",
        subtitle: "রোগীর লক্ষণ এবং মৌলিক স্বাস্থ্য সূচক রেকর্ড করুন।",
        patientInfo: "রোগীর তথ্য",
        patientName: "রোগীর নাম",
        patientNamePlaceholder: "রোগীর নাম লিখুন",
        age: "বয়স",
        agePlaceholder: "বয়স",
        village: "গ্রাম",
        villagePlaceholder: "গ্রাম নির্বাচন করুন",
        contactNumber: "যোগাযোগ নম্বর",
        contactNumberPlaceholder: "ফোন নম্বর",
        symptomsTitle: "লক্ষণ (প্রযোজ্য সবগুলো নির্বাচন করুন)",
        additionalNotes: "অতিরিক্ত নোট",
        additionalNotesPlaceholder: "যেকোনো অতিরিক্ত পর্যবেক্ষণ বা নোট...",
        submitButton: "প্রতিবেদন জমা দিন",
        submitting: "জমা হচ্ছে...",
        successMessage: "লক্ষণ প্রতিবেদন সফলভাবে জমা হয়েছে!",
        errorMessage: "প্রতিবেদন জমা দিতে ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন।",
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
