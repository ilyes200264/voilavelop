"use client";

import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { I18nContextType, Language, TranslationsType } from './i18n-types';
import { findTranslationInAllNamespaces, getNestedTranslation, logMissingTranslation } from './i18n-utils';

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

  // Debug logging to check translations
  console.log('I18nProvider initialized with:', { 
    initialLanguage, 
    translationsAvailable: Object.keys(translations),
    hasCurrentLanguage: !!translations[initialLanguage],
    translationKeys: translations[initialLanguage] ? Object.keys(translations[initialLanguage]) : []
  });

  useEffect(() => {
    console.log('Language changed to:', language, 'Available translations:', translations[language] ? Object.keys(translations[language]).length : 0);
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

  const t = <T = string>(key: string, fallback: any = undefined): T => {
    // First check if the key contains a namespace separator
    if (key.includes(':')) {
      // Format: 'namespace:path.to.key'
      const [namespace, path] = key.split(':', 2);
      if (currentTranslations[namespace]) {
        const result = getNestedTranslation(currentTranslations[namespace] as TranslationsType, path);
        if (result !== undefined) {
          return result as T;
        }
        if (fallback !== undefined) {
          return fallback as T;
        }
        logMissingTranslation(path, currentTranslations, namespace);
      } else {
        if (fallback !== undefined) {
          return fallback as T;
        }
        logMissingTranslation(key, currentTranslations);
      }
      return key as unknown as T;
    }
    
    // Standard format: either 'namespace.path.to.key' or just 'path.to.key'
    const result = findTranslationInAllNamespaces(currentTranslations, key);
    if (result !== undefined) {
      return result as T;
    }
    
    // Use fallback if provided
    if (fallback !== undefined) {
      return fallback as T;
    }
    
    // Add visual indicator for missing translations in development
    if (process.env.NODE_ENV === 'development') {
      logMissingTranslation(key, currentTranslations);
      return (`[MISSING: ${key}]`) as unknown as T;
    }
    
    // In production, just return the key as fallback
    return key as unknown as T;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, translations: currentTranslations }}>
      {children}
    </I18nContext.Provider>
  );
};