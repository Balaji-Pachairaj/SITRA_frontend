import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authenticationSlice/authentictaionSlice";
import masterSlice from "./master/masterSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    master: masterSlice.reducer,
  },
});
