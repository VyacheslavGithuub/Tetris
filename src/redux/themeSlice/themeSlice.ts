import { createSlice } from "@reduxjs/toolkit";
import { ITheme } from "../../types/TTheme/TTheme";

const initialState: ITheme = {
  main_background: "#3b3b3b",
  tetris_background: "#ffa500",
  Stage_background: "#262626",
  arrow_fill: "#000",
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {},
});

export const {} = themeSlice.actions;
export default themeSlice.reducer;
