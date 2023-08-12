import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: {},
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    storeSignupDetailHandler: (state, action) => {
      const signupData = action.payload;
      state.signupData = signupData;
    },
  },
});

const signupReducer = signupSlice.reducer;

export const signupAction = signupSlice.actions;
export default signupReducer;
