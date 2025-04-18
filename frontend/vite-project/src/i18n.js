import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Initialize i18next with the options
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    resources: {
      en: {
        translation: require('./locales/en/translation.json'),
      },
      bn: {
        translation: require('./locales/bn/translation.json'),
      },
    },
  });
