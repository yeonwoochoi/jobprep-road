"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { Locale } from "@/locale";

interface LanguageContextType {
  language: Locale;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLanguage = 'ko' }: { children: ReactNode, initialLanguage?: Locale }) {
  const [language, setLanguage] = useState<Locale>(initialLanguage)

  useEffect(() => {
    const cookieLang = getCookie('lang') as Locale | undefined;
    if (cookieLang && cookieLang !== language) {
      setLanguage(cookieLang);
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko';
      setCookie('lang', next, { maxAge: 60 * 60 * 24 * 365 });
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// const { language } = useLanguage();
// const t = getLocale(language); // 'ko' | 'en'
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context
}