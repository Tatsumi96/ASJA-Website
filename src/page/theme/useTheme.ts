import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = Cookies.get("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;

      if (newValue) {
        document.documentElement.classList.add("dark");
        Cookies.set("theme", "dark", { expires: 30 });
      } else {
        document.documentElement.classList.remove("dark");
        Cookies.set("theme", "light", { expires: 30 });
      }

      return newValue;
    });
  };

  return { isDark, toggleTheme };
};
