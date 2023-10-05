const themeKey = "dark";

export const saveDarkInLocalStorage = (dark) =>
  localStorage.setItem(themeKey, JSON.stringify(dark));

export const getDarkFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(themeKey)) || false;