import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: "grid",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeToList: (state) => {
      state.layout = "list";
    },
    changeToGrid: (state) => {
      state.layout = "grid";
    },
  },
});

export const { changeToList, changeToGrid } = layoutSlice.actions;

export default layoutSlice.reducer;
