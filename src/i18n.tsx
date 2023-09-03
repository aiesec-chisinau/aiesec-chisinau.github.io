import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

//Import all translation files
import translationEnglish from "./lang/en.json";
import translationRomanian from "./lang/ro.json";

const resources = {
  en: {
    home: translationEnglish,
  },
  ro: {
    home: translationRomanian,
  },
};

i18next
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,

    fallbackLng: "en", //fallback language
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // options for the backend
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18next;
