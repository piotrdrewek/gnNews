import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
    resetCounter: (state) => {
      state.counter = 0;
    },
  },
});

export const { setCounter, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;
