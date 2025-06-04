# Internationalization (i18n) Guide

This document provides guidelines on how to use and maintain the internationalization system in this project.

## Basic Usage

### Translating Text in Components

To translate text in your components, use the `useI18n` hook and the `t` function:

```tsx
import { useI18n } from "@/lib/i18n";

function MyComponent() {
  const { t } = useI18n();
  
  return (
    <div>
      <h1>{t('common.navigation.home')}</h1>
      <p>{t('home.hero.subtitle')}</p>
    </div>
  );
}
```

### Key Formats

There are three ways to reference translation keys:

1. **Namespace as first segment** (recommended): `t('common.navigation.home')`
2. **Direct key access**: `t('navigation.home')` (will search in all namespaces)

For consistency and to avoid conflicts, we recommend using the namespace as the first segment format.

## Organizing Translations

### File Structure

Translations are organized by language and feature:

```
/locales
  /en
    common.json
    home.json
    about.json
    ...
  /fr
    common.json
    home.json
    about.json
    ...
```

### Adding New Translations

1. Add the translation to the appropriate JSON file in both language directories
2. Maintain the same key structure in both languages
3. Run `npm run validate-translations` to verify all keys are present

### Translation File Structure

Organize keys by feature and component:

```json
{
  "section_name": {
    "title": "Section Title",
    "subtitle": "Section subtitle text",
    "items": {
      "item1": {
        "title": "Item 1 Title",
        "description": "Item 1 description"
      },
      "item2": {
        "title": "Item 2 Title",
        "description": "Item 2 description"
      }
    }
  }
}
```

## Advanced Features

### Package Data Translation

For translating package data from `packages-data.js`, you can use the `usePackageTranslations` hook:

```tsx
import { usePackageTranslations } from "@/lib/packages-i18n";

function PackageComponent() {
  const { translatePackage, getAllPackages } = usePackageTranslations();
  
  // Get a specific package with translations
  const package = translatePackage("la-petite-koki");
  
  // Get all packages with translations
  const allPackages = getAllPackages();
  
  return (
    <div>
      <h1>{package.title}</h1>
      <p>{package.tagline}</p>
      <p>{package.heroDescription}</p>
      
      {/* Package includes */}
      <ul>
        {package.mainSection.includes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Interpolation

For strings that need variable values:

```tsx
// In your translation file:
// "greeting": "Hello, {{name}}!"

const name = "John";
t('common.greeting', { name }); // "Hello, John!"
```

### Switching Languages

Use the `setLanguage` function from the `useI18n` hook:

```tsx
const { language, setLanguage } = useI18n();

// Switch to English
<button onClick={() => setLanguage('en')}>English</button>

// Switch to French
<button onClick={() => setLanguage('fr')}>Français</button>
```

## Best Practices

1. **Use namespaces**: Keep related translations in appropriate namespaces
2. **Validate often**: Run the validation script frequently to catch missing translations
3. **Consistent keys**: Use the same key structure across all language files
4. **Descriptive keys**: Use clear and descriptive key names that reflect the content
5. **Avoid nesting too deeply**: Keep nesting to a maximum of 3-4 levels
6. **Document special cases**: Add comments for translations that need special handling
7. **Package translations**: When working with packages:
   - For UI elements and static text, use the regular translation system
   - For dynamic content from packages-data.js, use the packages-i18n.ts layer
   - When adding new packages, update both packages-data.js and the translation files

## Troubleshooting

If you see keys displayed instead of translations:

1. Check that the key exists in the correct translation file
2. Verify the namespacing is correct
3. Check the browser console for warnings about missing translations
4. Run the validation script to find any missing keys