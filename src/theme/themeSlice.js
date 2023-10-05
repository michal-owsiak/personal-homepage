import { createSlice } from "@reduxjs/toolkit";
import { getDarkFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: getDarkFromLocalStorage(),
  },
  reducers: {
    toggleTheme: state => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectIsThemeDark = state => state.theme.dark;

export default themeSlice.reducer;