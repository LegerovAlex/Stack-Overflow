import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/translation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: { translation: en },
  },
});

export default i18n;
