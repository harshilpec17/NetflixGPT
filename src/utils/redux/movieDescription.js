import { createSlice } from "@reduxjs/toolkit";

export const movieDescriptionSlice = createSlice({
  name: "movieDescription",
  initialState: {
    selectedMovie: null,
    movieProvider: null,
    filteredMovieProvider: null,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addMovieProvider: (state, action) => {
      state.movieProvider = action.payload;
    },
    addFilteredMovieProvider: (state, action) => {
      state.filteredMovieProvider = action.payload;
    },
  },
});

export const { addSelectedMovie, addMovieProvider, addFilteredMovieProvider } =
  movieDescriptionSlice.actions;

export default movieDescriptionSlice.reducer;
