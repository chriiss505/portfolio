import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../locales/en.json";
import esTranslation from "../locales/es.json";

i18n
  .use(LanguageDetector) // Usar el detector de idioma
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: "en", // Idioma por defecto si no se puede detectar
    detection: {
      // Opciones de detección
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // Donde almacenar el idioma detectado
    },
    interpolation: {
      escapeValue: false, // React ya hace el escape de forma segura
    },
  });

export default i18n;
