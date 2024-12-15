import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const masterSlice = createSlice({
  name: "master_slice_state_management",
  initialState,
  reducers: {},
});

export const masterSliceActions = masterSlice?.actions;
export default masterSlice;
