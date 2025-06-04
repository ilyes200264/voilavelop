# Voilà Vélo Website

## Overview

This is the website for Voilà Vélo, a smoothie bike rental company for events.

## Internationalization

This project uses a custom internationalization (i18n) implementation based on React Context to provide support for multiple languages.

### Architecture

The internationalization system consists of:

1. **i18n Context Provider**
   - Located at `/lib/i18n.ts`
   - Provides the language state, language switching function, and translation function (`t`)
   - Wraps the entire application in `app/layout.tsx`

2. **Translation Files**
   - Located in `/locales/{language}/` directories
   - Organized by feature/page (common.json, home.json, packages.json, etc.)
   - Merged in `/lib/translations.ts`

3. **LanguageSwitcher Component**
   - Located at `/components/language-switcher.tsx`
   - Allows users to toggle between available languages
   - Used in the header and potentially other parts of the UI

### Usage

#### 1. Accessing Translations in a Component

```tsx
"use client"

import { useI18n } from "@/lib/i18n"

export function MyComponent() {
  const { t, language } = useI18n()
  
  return (
    <div>
      <h1>{t('some.translation.key')}</h1>
      <p>Current language: {language}</p>
    </div>
  )
}
```

#### 2. Adding New Translations

1. Create or update JSON files in the appropriate language folders:
   - `/locales/en/your-feature.json`
   - `/locales/fr/your-feature.json`

2. Import and add them to the translations object in `/lib/translations.ts`:

```tsx
import yourFeatureEn from '@/locales/en/your-feature.json';
import yourFeatureFr from '@/locales/fr/your-feature.json';

const translations = {
  en: {
    ...commonEn,
    ...homeEn,
    ...yourFeatureEn,
    // other translations
  },
  fr: {
    ...commonFr,
    ...homeFr,
    ...yourFeatureFr,
    // other translations
  },
};
```

#### 3. Best Practices

- Use nested objects in translation files to organize translations by feature
- Use consistent key naming conventions (e.g., camelCase for keys)
- Ensure all keys exist in all language files
- Add translations for new features as they are developed

### Adding a New Language

To add support for a new language:

1. Create a new folder in `/locales/` for the language (e.g., `/locales/es/`)
2. Add all required translation files to the folder
3. Update the `Language` type in `/lib/i18n.ts` to include the new language
4. Add the new language to the translations object in `/lib/translations.ts`
5. Update the language switcher component to include the new language

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```