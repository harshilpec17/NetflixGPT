import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggleValue: false,
  },
  reducers: {
    GptToggle: (state) => {
      state.gptToggleValue = !state.gptToggleValue;
    },
  },
});

export const { GptToggle } = GPTSearchSlice.actions;

export default GPTSearchSlice.reducer;
