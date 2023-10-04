import { lightTheme } from "./theme";

export const saveThemeInLocalStorage = (themeState) =>
  localStorage.setItem("theme", JSON.stringify(themeState));

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("theme")) || lightTheme;

export const saveDarkInLocalStorage = (darkState) =>
  localStorage.setItem("dark", JSON.stringify(darkState));

export const getDarkFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("dark")) || false;