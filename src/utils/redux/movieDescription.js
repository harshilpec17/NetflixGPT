import { createSlice } from "@reduxjs/toolkit";

export const movieDescriptionSlice = createSlice({
  name: "movieDescription",
  initialState: {
    selectedMovie: null,
    movieProvider: null,
    cast: null,
    movieToggle: null,
    movieVideo: null,
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
    addMovieVideo: (state, action) => {
      state.movieVideo = action.payload;
    },
  },
});

export const {
  addSelectedMovie,
  addMovieProvider,
  addCast,
  addMovieToggle,
  addMovieVideo,
} = movieDescriptionSlice.actions;

export default movieDescriptionSlice.reducer;
