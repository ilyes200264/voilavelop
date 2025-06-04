# Internationalization Guide

## Overview

This guide explains how to work with the internationalization (i18n) system in the Voilà Vélo website. The system allows the website to be presented in multiple languages without requiring separate routes or pages.

## Architecture

The i18n system is built using React Context and consists of:

1. **I18nProvider**: A context provider that manages the current language and provides translation functions
2. **Locale Files**: JSON files containing translations for each language
3. **Language Switcher**: A component that allows users to change the current language

## Working with Translations

### Accessing Translations in Components

To use translations in a component:

1. Import the `useI18n` hook:
   ```tsx
   import { useI18n } from "@/lib/i18n";
   ```

2. Use the hook to get the translation function and current language:
   ```tsx
   const { t, language } = useI18n();
   ```

3. Use the translation function to retrieve translated strings:
   ```tsx
   <h1>{t('page.title')}</h1>
   <p>{t('page.description')}</p>
   ```

### Organization of Translation Files

Translation files are organized by feature/page in the `/locales/[language]/` directories:

- `/locales/en/common.json` - Common UI elements used across the site
- `/locales/en/home.json` - Home page specific translations
- `/locales/en/packages.json` - Packages page specific translations

The same structure is mirrored for each supported language (e.g., `/locales/fr/`).

### Adding New Translations

When adding new content to the site:

1. Add translation keys to the appropriate files in each language directory
2. Use nested objects to organize related translations:
   ```json
   {
     "section": {
       "title": "Section Title",
       "subtitle": "Section Subtitle",
       "items": {
         "item1": "First Item",
         "item2": "Second Item"
       }
     }
   }
   ```

3. Access nested translations using dot notation:
   ```tsx
   <h2>{t('section.title')}</h2>
   <p>{t('section.subtitle')}</p>
   <li>{t('section.items.item1')}</li>
   ```

### Adding a New Page or Feature

When adding a new page or feature:

1. Create translation files for each language:
   - `/locales/en/feature-name.json`
   - `/locales/fr/feature-name.json`

2. Import and add the translations in `/lib/translations.ts`:
   ```tsx
   import featureNameEn from '@/locales/en/feature-name.json';
   import featureNameFr from '@/locales/fr/feature-name.json';

   const translations = {
     en: {
       ...commonEn,
       ...homeEn,
       ...featureNameEn,
       // other translations
     },
     fr: {
       ...commonFr,
       ...homeFr,
       ...featureNameFr,
       // other translations
     },
   };
   ```

## Best Practices

### Translation Keys

- Use camelCase for keys
- Use descriptive names that indicate the content's purpose
- Organize keys hierarchically to reflect component/page structure
- Keep translation keys consistent across language files

### Component Design

- Make all user-facing text translatable
- Keep translations separate from component logic
- Consider text expansion in different languages when designing layouts
- Use fallbacks for missing translations

### Performance Considerations

- Load only necessary translations for each page
- Consider code-splitting translations for large apps
- Test rendering performance with different languages

## Testing Translations

When testing translations:

1. Toggle between languages using the language switcher
2. Verify that all UI elements are properly translated
3. Check that layouts accommodate different text lengths
4. Test edge cases like missing translations or very long text

## Language Preference

The system stores the user's language preference in localStorage to persist it across sessions. The preference is set when:

1. The user selects a language using the language switcher
2. The default language (French) is used if no preference is stored