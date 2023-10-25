import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    tvShows: null,
    upcomingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    topRatedTvShows: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTvShows,
  addUpcomingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addTopRatedTvShows,
} = movieSlice.actions;

export default movieSlice.reducer;
