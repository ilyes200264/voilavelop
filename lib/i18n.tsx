"use client";

import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { I18nContextType, Language, TranslationsType } from './i18n-types';

const defaultTranslations: { [key in Language]: TranslationsType } = {
  en: {},
  fr: {},
};

export const I18nContext = createContext<I18nContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: <T = string>(key: string): T => key as unknown as T,
  translations: {},
});

// Export the hook to use i18n context
export const useI18n = () => useContext(I18nContext);

type I18nProviderProps = {
  children: ReactNode;
  initialLanguage?: Language;
  translations?: { [key in Language]: TranslationsType };
};

export const I18nProvider = ({ 
  children, 
  initialLanguage = 'fr',
  translations = defaultTranslations,
}: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [currentTranslations, setCurrentTranslations] = useState<TranslationsType>(
    translations[initialLanguage] || {}
  );

  useEffect(() => {
    setCurrentTranslations(translations[language] || {});
    document.documentElement.lang = language;
    
    // Check if we're in a browser environment before using localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', language);
    }
  }, [language, translations]);

  // Load saved language preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const t = <T = string>(key: string): T => {
    // Handle nested keys (e.g., 'navigation.home')
    const keys = key.split('.');
    let result: any = currentTranslations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key as unknown as T; // Fallback to the key itself if translation not found
      }
    }
    
    return result as T;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, translations: currentTranslations }}>
      {children}
    </I18nContext.Provider>
  );
};