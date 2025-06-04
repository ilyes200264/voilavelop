export type Language = 'en' | 'fr';

export type TranslationsType = {
  [key: string]: string | any[] | TranslationsType;
};

export type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(key: string) => T;
  translations: TranslationsType;
};