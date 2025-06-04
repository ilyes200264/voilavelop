"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useI18n();
  const pathname = usePathname();

  const toggleLanguage = (newLanguage: 'en' | 'fr') => {
    setLanguage(newLanguage);
  };

  return (
    <div className={`language-switcher flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => toggleLanguage('fr')}
        className={`${language === 'fr' ? 'text-primary-red font-semibold' : 'text-gray-600 hover:text-primary-red transition-colors'}`}
      >
        FR
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => toggleLanguage('en')}
        className={`${language === 'en' ? 'text-primary-red font-semibold' : 'text-gray-600 hover:text-primary-red transition-colors'}`}
      >
        EN
      </button>
    </div>
  );
}