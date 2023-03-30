import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
    resetLang: (state) => {
      state.lang = "";
      localStorage.setItem("lang", "");
    },
  },
});

export const { setLang, resetLang } = langSlice.actions;

export default langSlice.reducer;
