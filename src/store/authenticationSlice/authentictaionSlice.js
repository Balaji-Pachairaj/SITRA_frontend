import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authenticationSlice = createSlice({
  name: "authentication_slice_state_management",
  initialState,
  reducers: {},
});

export const authenticationSliceActions = authenticationSlice?.actions;
export default authenticationSlice;
