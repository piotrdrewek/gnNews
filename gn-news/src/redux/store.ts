import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import counterReducer from "./counterSlice";
import langReducer from "./langSlice";
import infoPopupReducer from "./infoPopupSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    counter: counterReducer,
    lang: langReducer,
    infoPopup: infoPopupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
