import { createSlice } from "@reduxjs/toolkit";
const iThemeState = {
  isDark: false,
};
const ThemeSlice = createSlice({});
export const ThemeActions = ThemeSlice.actions;
export default ThemeSlice.reducer;
