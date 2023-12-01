import { createSlice } from "@reduxjs/toolkit";

export const movieDescriptionSlice = createSlice({
  name: "movieDescription",
  initialState: {
    selectedMovie: null,
    movieProvider: null,
    cast: null,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addMovieProvider: (state, action) => {
      state.movieProvider = action.payload;
    },
    addCast: (state, action) => {
      state.cast = action.payload;
    },
  },
});

export const { addSelectedMovie, addMovieProvider, addCast } =
  movieDescriptionSlice.actions;

export default movieDescriptionSlice.reducer;
