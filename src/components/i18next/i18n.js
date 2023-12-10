import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["ar", "de", "fr", "en"], // List of languages
    fallbackLng: "en", // Fallback language
    detection: {
      // Configure how to detect the user's language
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"], // Order of language detection methods
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/local/{{lng}}/translation.json", // Path to the translation files
    },
  });

export default i18next; 
