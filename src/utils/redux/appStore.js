import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptSearchReducer from "./GPTSearchSlice";
import languageReducer from "./languageSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptSearchReducer,
    language: languageReducer,
  },
});
