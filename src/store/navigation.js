import { createSlice } from "@reduxjs/toolkit";

const navigation = createSlice({
  name: "navigation",
  initialState: "home",
  reducers: {
    updateSection: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const navigationActions = navigation.actions;

export default navigation.reducer;
