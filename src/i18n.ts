import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { isDevelopment } from './constants';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',

    fallbackLng: 'en',

    debug: isDevelopment,

    keySeparator: false,

    ns: ['auth', 'common'],

    defaultNS: 'common',

    updateMissing: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
