import { createSlice } from "@reduxjs/toolkit";

export const movieDescriptionSlice = createSlice({
  name: "movieDescription",
  initialState: {
    selectedMovie: null,
    movieProvider: null,
    cast: null,
    movieToggle: null,
  },
  reducers: {
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addMovieToggle: (state, action) => {
      state.movieToggle = action.payload;
    },
    addMovieProvider: (state, action) => {
      state.movieProvider = action.payload;
    },
    addCast: (state, action) => {
      state.cast = action.payload;
    },
  },
});

export const { addSelectedMovie, addMovieProvider, addCast, addMovieToggle } =
  movieDescriptionSlice.actions;

export default movieDescriptionSlice.reducer;
