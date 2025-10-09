import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLangue = () => {
  const [isEn, setIsEn] = useState(false);
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = Cookies.get("lang");
    if (savedTheme === "en") {
      setIsEn(true);
      i18n.changeLanguage(savedTheme);
    } else {
      setIsEn(false);
      i18n.changeLanguage(savedTheme);
    }
  }, []);

  const toggleLang = () => {
    setIsEn((prev) => {
      const newValue = !prev;

      if (newValue) {
        i18n.changeLanguage("en");
        Cookies.set("lang", "en", { expires: 30 });
      } else {
        i18n.changeLanguage("fr");
        Cookies.set("lang", "fr", { expires: 30 });
      }

      return newValue;
    });
  };

  return { toggleLang, translate, isEn };
};
