import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import themeSlice from "./themeSlice/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
