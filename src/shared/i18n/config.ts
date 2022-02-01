import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { locale } from './locales';
import { ENLocale, FRLocale } from './locales';
import ENTranslation from './en/translation.json';
import FRTranslation from './fr/translation.json';

const languagueDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    if (locale.toLowerCase().includes('fr')) {
      dayjs.locale('fr', FRLocale);
    } else {
      dayjs.locale('en', ENLocale);
    }
    return callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export const resources = {
  en: {
    translation: ENTranslation,
  },
  fr: {
    translation: FRTranslation,
  },
};

i18n.use(languagueDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
});
