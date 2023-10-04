import { lightTheme } from "./theme";

export const saveThemeInLocalStorage = (theme) =>
  localStorage.setItem("theme", JSON.stringify(theme));

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("theme")) || lightTheme;

export const saveDarkInLocalStorage = (dark) =>
  localStorage.setItem("dark", JSON.stringify(dark));

export const getDarkFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("dark")) || false;