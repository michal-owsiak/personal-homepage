import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "./theme";
import { 
  getThemeFromLocalStorage, 
  saveThemeInLocalStorage ,
  getDarkFromLocalStorage,
  saveDarkInLocalStorage,
} from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: getThemeFromLocalStorage(),
    dark: getDarkFromLocalStorage(),
  },
  reducers: {
    switchLightTheme: state => {
      state.theme = lightTheme;
      state.dark = false;
      saveThemeInLocalStorage(state.theme);
      saveDarkInLocalStorage(false);
    },
    switchDarkTheme: state => {
      state.theme = darkTheme;
      state.dark = true;
      saveThemeInLocalStorage(state.theme);
      saveDarkInLocalStorage(true);
    },
  },
});

export const { switchLightTheme, switchDarkTheme } = themeSlice.actions;

export const selectCurrentTheme = state => state.theme.theme;
export const selectIsThemeDark = state => state.theme.dark;

export default themeSlice.reducer;