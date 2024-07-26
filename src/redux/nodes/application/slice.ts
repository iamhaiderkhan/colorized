import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
  name: "application",
  initialState: {
    theme: {
      name: "light",
      theme: {}
    }
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = applicationSlice.actions;
export default applicationSlice.reducer;
