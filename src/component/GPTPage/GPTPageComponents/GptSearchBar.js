import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_CONSTANT } from "../../../utils/Constants/languageConstant";
import { useRef } from "react";
import { openai } from "../../../utils/Constants/openAI";

import {
  addGptMovieDataBaseResults,
  addGptSearchResult,
} from "../../../utils/redux/GPTSearchSlice";
import { API_TOKEN } from "../../../utils/Constants/constants";
import GptDisclaimer from "./Gptdisclaimer";
import ShimmerCastProfile from "../../ShimmerComponent/ShimmerCastProfile";
import ShimmerGPT from "../../ShimmerComponent/ShimmerGPT";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageSelector = useSelector(
    (store) => store.language.selectedLanguage
  );

  const gptSearchQuery = useSelector((store) => store.gpt.gptSearchResults);

  const movie = useSelector((store) => store.gpt.gptMovieDataBaseResults);

  const searchText = useRef(null);

  const movieDataBase = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_TOKEN
    );
    const json = await data.json();
    return json.results;
  };

  const handleChange = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4.1-mini",
    });

    const GPTQueryData = chatCompletion.choices[0].message.content;

    const GPTQueryArray = GPTQueryData.split(",").map((query) => query.trim());

    const moviePromise = GPTQueryArray.map((movie) => movieDataBase(movie));

    const movieDataBaseResults = await Promise.all(moviePromise);

    dispatch(addGptSearchResult(GPTQueryArray));
    dispatch(addGptMovieDataBaseResults(movieDataBaseResults));
    // dispatch(addFilteredGptMovieDataBaseResults(movieDataBaseResults));
  };

  return (
    <>
      <div className="relative shadow-xl rounded-t-lg m-auto flex mt-32 md:mt-28 pt-4 px-4 justify-center w-screen items-start max-w-md md:max-w-3xl bg-gradient-to-r from-zinc-800 via-black to-zinc-800">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex shadow rounded-sm md:rounded-lg overflow-hidden mb-4"
        >
          <input
            className="outline-none w-screen bg-zinc-700 py-2 md:py-3 pl-2 pr-2"
            placeholder={LANGUAGE_CONSTANT[languageSelector].placeholder}
            type="text"
            ref={searchText}
          ></input>
          <button
            onClick={handleChange}
            className="outline-none bg-red-700 text-white hover:bg-blue-500 text-black md:px-3 px-1 py-0.5 shrink-0"
          >
            {LANGUAGE_CONSTANT[languageSelector].search}
          </button>
        </form>
      </div>

      {gptSearchQuery === null && movie === null ? <GptDisclaimer /> : null}
    </>
  );
};

export default GptSearchBar;
