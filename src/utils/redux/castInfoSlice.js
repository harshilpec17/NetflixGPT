import { createSlice } from "@reduxjs/toolkit";

const castInfoSlice = createSlice({
  name: "castInfo",
  initialState: {
    castId: null,
    castProfile: null,
    castWork: null,
  },
  reducers: {
    addCastId: (state, action) => {
      state.castId = action.payload;
    },
    addCastProfile: (state, action) => {
      state.castProfile = action.payload;
    },
    addCastWork: (state, action) => {
      state.castWork = action.payload;
    },
  },
});

export const { addCastId, addCastProfile, addCastWork } = castInfoSlice.actions;

export default castInfoSlice.reducer;
