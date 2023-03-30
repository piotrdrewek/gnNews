import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

export const InfoPopupSlice = createSlice({
  name: "infoPopup",
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = InfoPopupSlice.actions;

export default InfoPopupSlice.reducer;
