import { configureStore } from "@reduxjs/toolkit";

//^ slice
import loginReducer from "./login-slice";
import signupReducer from "./signup-slice";

export interface StoreConfigureStore {
  reducer: {
    login?: any;
    signup?: any;
  };
}

const storeConfigureStore: StoreConfigureStore = {
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
};

const store = configureStore(storeConfigureStore);

export default store;
