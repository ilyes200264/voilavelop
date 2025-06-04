/**
 * Helper functions for i18n implementation
 */

import { Language, TranslationsType } from './i18n-types';

/**
 * Helper function to get a nested value from a translations object using a dot-notation path
 * @param translations The translations object
 * @param key The key path in dot notation (e.g. 'common.navigation.home')
 * @returns The value at the specified path or undefined if not found
 */
export function getNestedTranslation(translations: TranslationsType, key: string): any {
  // Split the key by dots to get the path
  const keyParts = key.split('.');
  
  // Start at the root of the translations
  let result: any = translations;
  
  // Traverse the path
  for (const part of keyParts) {
    // If the current result is undefined or not an object, we can't go deeper
    if (result === undefined || result === null || typeof result !== 'object') {
      return undefined;
    }
    
    // Move to the next level
    result = result[part];
  }
  
  return result;
}

/**
 * Helper function to look up a translation in all namespaces
 * @param translations The translations object
 * @param key The key to look for (can be a dot path)
 * @returns The value or undefined if not found
 */
export function findTranslationInAllNamespaces(translations: TranslationsType, key: string): any {
  // First try with explicit namespace (e.g. 'common.navigation.home')
  const explicitValue = getNestedTranslation(translations, key);
  if (explicitValue !== undefined) {
    return explicitValue;
  }
  
  // If not found, try to find in each namespace
  // We skip this if the key already has dots, as it probably already specifies a namespace
  if (!key.includes('.')) {
    for (const namespace of Object.keys(translations)) {
      const namespaceObj = translations[namespace];
      if (namespaceObj && typeof namespaceObj === 'object' && key in namespaceObj) {
        return namespaceObj[key];
      }
    }
  }
  
  // If we reach here, the key was not found in any namespace
  return undefined;
}

/**
 * Check if a language is supported
 * @param lang The language code to check
 * @returns True if the language is supported
 */
export function isLanguageSupported(lang: string): lang is Language {
  return lang === 'en' || lang === 'fr';
}

/**
 * Log missing translation warning with useful debug info
 * @param key The key that was not found
 * @param translations The translations object that was searched
 * @param namespace Optional namespace that was explicitly specified
 */
export function logMissingTranslation(
  key: string, 
  translations: TranslationsType,
  namespace?: string
): void {
  if (process.env.NODE_ENV === 'development') {
    // Only log in development to avoid console spam in production
    const debugInfo: any = {
      key,
      availableNamespaces: Object.keys(translations || {})
    };
    
    if (namespace) {
      debugInfo.specifiedNamespace = namespace;
      if (translations[namespace]) {
        debugInfo.availableKeysInNamespace = Object.keys(translations[namespace]);
      } else {
        debugInfo.namespaceExists = false;
      }
    }
    
    // Only log warnings for non-optional translations
    // Don't log for package options which may intentionally be missing
    if (!key.includes('options.') && !key.includes('.options.')) {
      console.warn(`[i18n] Translation key not found: ${key}`, debugInfo);
    }
  }
}