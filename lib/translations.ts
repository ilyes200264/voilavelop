import commonEn from '@/locales/en/common.json';
import commonFr from '@/locales/fr/common.json';
import homeEn from '@/locales/en/home.json';
import homeFr from '@/locales/fr/home.json';
import packagesEn from '@/locales/en/packages.json';
import packagesFr from '@/locales/fr/packages.json';
import aboutEn from '@/locales/en/about.json';
import aboutFr from '@/locales/fr/about.json';
import howItWorksEn from '@/locales/en/how-it-works.json';
import howItWorksFr from '@/locales/fr/how-it-works.json';
import faqEn from '@/locales/en/faq.json';
import faqFr from '@/locales/fr/faq.json';
import buildYourEventEn from '@/locales/en/build-your-event.json';
import buildYourEventFr from '@/locales/fr/build-your-event.json';
import contactEn from '@/locales/en/contact.json';
import contactFr from '@/locales/fr/contact.json';
import eventsEn from '@/locales/en/events.json';
import eventsFr from '@/locales/fr/events.json';
import corporateEventsEn from '@/locales/en/corporate-events.json';
import corporateEventsFr from '@/locales/fr/corporate-events.json';
import thankYouEn from '@/locales/en/thank-you.json';
import thankYouFr from '@/locales/fr/thank-you.json';
import reservationEn from '@/locales/en/reservation.json';
import reservationFr from '@/locales/fr/reservation.json';

type Language = 'en' | 'fr';

// Log all translation files to check their content
console.log('Loading translations:', {
  commonEn: Object.keys(commonEn || {}).length,
  commonFr: Object.keys(commonFr || {}).length,
  homeEn: Object.keys(homeEn || {}).length,
  homeFr: Object.keys(homeFr || {}).length,
});

// Structured translations with namespaces instead of flattening
const translations = {
  en: {
    common: commonEn,
    home: homeEn,
    packages: packagesEn,
    about: aboutEn,
    howItWorks: howItWorksEn,
    faq: faqEn,
    buildYourEvent: buildYourEventEn,
    contact: contactEn,
    events: eventsEn,
    corporateEvents: corporateEventsEn,
    thankYou: thankYouEn,
    reservation: reservationEn,
  },
  fr: {
    common: commonFr,
    home: homeFr,
    packages: packagesFr,
    about: aboutFr,
    howItWorks: howItWorksFr,
    faq: faqFr,
    buildYourEvent: buildYourEventFr,
    contact: contactFr,
    events: eventsFr,
    corporateEvents: corporateEventsFr,
    thankYou: thankYouFr,
    reservation: reservationFr,
  },
};

export const getTranslations = (language: Language = 'fr') => {
  return translations[language];
};

export default translations;