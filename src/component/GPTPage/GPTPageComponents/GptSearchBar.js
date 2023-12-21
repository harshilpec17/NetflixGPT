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

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageSelector = useSelector(
    (store) => store.language.selectedLanguage
  );

  const gptSearchQuery = useSelector((store) => store.gpt.gptSearchResults);

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
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
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
      <div className="relative m-auto flex mt-32 md:mt-40 pt-4 px-2  justify-center w-screen  items-start max-w-md md:max-w-3xl bg-[#1D2127]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex shadow rounded-sm md:rounded-lg overflow-hidden mb-4"
        >
          <input
            className="outline-none w-screen py-2 md:py-3 pl-2 "
            placeholder={LANGUAGE_CONSTANT[languageSelector].placeholder}
            type="text"
            ref={searchText}
          ></input>
          <button
            onClick={handleChange}
            className="outline-none bg-[#90E7FE] text-black md:px-3 px-1 py-0.5 shrink-0"
          >
            {LANGUAGE_CONSTANT[languageSelector].search}
          </button>
        </form>
      </div>
      {gptSearchQuery === null && <GptDisclaimer />}
    </>
  );
};

export default GptSearchBar;
