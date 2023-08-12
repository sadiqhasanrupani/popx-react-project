import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isActive: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export const loginAction = loginSlice.actions;

export default loginSlice.reducer;
