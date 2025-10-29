import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "@/page/lang/fr.json";

i18n.use(initReactI18next).init({
  fallbackLng: "fr",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: { translation: fr },
  },
});

export default i18n;
