import { useEffect, useState } from "react";
type ThemeModes = "dark" | "light";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeModes>("light");

  const setMode = (mode: ThemeModes) => {
    window.localStorage.setItem("theme", mode);
    document.body.classList.add(mode);
    document.body.classList.remove(mode === "dark" ? "light" : "dark");
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  const getTheme = () => {
    const localTheme = window.localStorage.getItem(
      "theme"
    ) as ThemeModes | null;

    return localTheme || 'dark';
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(
      "theme"
    ) as ThemeModes | null;
    setMode(localTheme ?? "dark");
  }, []);
  return [theme, themeToggler, getTheme];
};
