import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";


i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["ar","de","fr","en"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag",  "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/local/{{lng}}/translation.json",
    },
    
  });

export default i18next;
