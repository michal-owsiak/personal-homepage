import { lightTheme } from "./theme";

const themeKey = "theme";
const darkKey = "dark";

export const saveThemeInLocalStorage = (theme) =>
  localStorage.setItem(themeKey, JSON.stringify(theme));

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(themeKey)) || lightTheme;

export const saveDarkInLocalStorage = (dark) =>
  localStorage.setItem(darkKey, JSON.stringify(dark));

export const getDarkFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(darkKey)) || false;