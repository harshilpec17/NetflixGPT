import { useDispatch, useSelector } from "react-redux";
import MovieCards from "../../MovieClusters/MovieClusterComponents/MovieCards";
import { useEffect, useRef, useState } from "react";
import { addFilteredGptMovieDataBaseResults } from "../../../utils/redux/GPTSearchSlice";

const GptSearchResult = () => {
  const dispatch = useDispatch();

  const [localFilter, setLocalFilter] = useState(null);
  const {
    gptSearchResults,
    gptMovieDataBaseResults,
    filteredGptMovieDataBaseResult,
  } = useSelector((store) => store.gpt);
  const languageChosen = useRef(null);

  useEffect(() => {
    dispatch(addFilteredGptMovieDataBaseResults(null));
  }, [gptMovieDataBaseResults]);

  if (!gptSearchResults) return null;

  const handleChange = () => {
    const arr2 = [];
    let languageValue = languageChosen.current.value;
    languageValue = languageValue.toLowerCase().replace(/[0-9@#$]/g, "");
    languageValue = languageValue.slice(0, 2);

    gptMovieDataBaseResults.map((m) =>
      m.filter((movie) =>
        languageValue === movie.original_language ? arr2.push(movie) : null
      )
    );
    setLocalFilter(arr2);
    dispatch(addFilteredGptMovieDataBaseResults(arr2));
  };

  const handleReset = () => {
    dispatch(addFilteredGptMovieDataBaseResults(null));
    languageChosen.current.value = "";
  };

  return (
    <>
      <div className="relative w-screen max-w-md md:max-w-3xl m-auto bg-black bg-opacity-90 mb-8 rounded">
        <div className="flex flex-wrap flex-col">
          <div className="flex justify-between px-2 md:px-4 items-center bg-[#1D2127]">
            <div className="py-2">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex shadow rounded-sm md:rounded-lg overflow-hidden "
              >
                <input
                  className="outline-none py-1 px-2 "
                  placeholder="Select your Language"
                  type="text"
                  ref={languageChosen}
                ></input>
                <button
                  onClick={handleChange}
                  className="outline-none bg-[#024B58] text-[#D1D7E0] px-5 md:px-8 py-1 shrink-0"
                >
                  Filter
                </button>
              </form>
            </div>
            <button
              onClick={handleReset}
              className="outline-none rounded-sm md:rounded-lg bg-[#024B58] text-[#D1D7E0] px-5 md:px-8 py-1"
            >
              Reset
            </button>
          </div>
          {filteredGptMovieDataBaseResult === null &&
            gptSearchResults.map((movie, index) => (
              <div key={index}>
                <div className="py-1 md:py-3">
                  <h1 className="p-2 md:text-xl bg-[#024B58] text-[#D1D7E0]">
                    {movie}
                  </h1>
                </div>
                <div className="flex flex-wrap justify-center">
                  {gptMovieDataBaseResults[index].map((m, index) => {
                    return (
                      m.poster_path && (
                        <div key={index} className="pb-4">
                          <MovieCards
                            poster={m.poster_path}
                            movie={m}
                            id={m.id}
                          />
                          <div>
                            <h1 className="text-white text-center w-28 md:w-48">
                              {m.title}
                            </h1>
                            <h2 className="text-white text-center w-28 md:w-48">
                              Language: {m.original_language}
                            </h2>
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            ))}

          <div className="flex flex-row flex-wrap justify-center items-center py-3">
            {filteredGptMovieDataBaseResult &&
              filteredGptMovieDataBaseResult.map((m, index) => (
                <div key={index}>
                  <MovieCards poster={m.poster_path} movie={m} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GptSearchResult;
