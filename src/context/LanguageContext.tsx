'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, LANGUAGES, Translations, getTranslations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('oceancore-lang') as Language;
      if (stored && LANGUAGES.find((l) => l.code === stored)) {
        setLanguageState(stored);
      }
    } catch {}
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('oceancore-lang', lang);
    } catch {}
    const langConfig = LANGUAGES.find((l) => l.code === lang);
    document.documentElement.dir = langConfig?.dir || 'ltr';
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    const langConfig = LANGUAGES.find((l) => l.code === language);
    document.documentElement.dir = langConfig?.dir || 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const dir = LANGUAGES.find((l) => l.code === language)?.dir || 'ltr';
  const t = getTranslations(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
