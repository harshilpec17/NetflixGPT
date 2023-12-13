import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptSearchReducer from "./GPTSearchSlice";
import languageReducer from "./languageSlice";
import movieDescriptionReducer from "./movieDescription";
import castInfoReducer from "./castInfoSlice";
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptSearchReducer,
    language: languageReducer,
    movieDescription: movieDescriptionReducer,
    castInfo: castInfoReducer,
    persistedState,
  },
});

appStore.subscribe(() => {
  saveState({
    user: userReducer,
    movies: movieReducer,
    gpt: gptSearchReducer,
    language: languageReducer,
    movieDescription: movieDescriptionReducer,
    castInfo: castInfoReducer,
  });
});
