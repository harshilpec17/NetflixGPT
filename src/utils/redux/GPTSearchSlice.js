import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggleValue: false,
    gptSearchResults: null,
    gptMovieDataBaseResults: null,
    filteredGptMovieDataBaseResult: null,
  },
  reducers: {
    GptToggle: (state) => {
      state.gptToggleValue = !state.gptToggleValue;
    },
    addGptSearchResult: (state, action) => {
      state.gptSearchResults = action.payload;
    },
    addGptMovieDataBaseResults: (state, action) => {
      state.gptMovieDataBaseResults = action.payload;
    },
    addFilteredGptMovieDataBaseResults: (state, action) => {
      state.filteredGptMovieDataBaseResult = action.payload;
    },
  },
});

export const {
  GptToggle,
  addGptSearchResult,
  addGptMovieDataBaseResults,
  addFilteredGptMovieDataBaseResults,
} = GPTSearchSlice.actions;

export default GPTSearchSlice.reducer;
