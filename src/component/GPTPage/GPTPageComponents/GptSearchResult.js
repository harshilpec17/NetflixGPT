import { useDispatch, useSelector } from "react-redux";
import MovieCards from "../../MovieClusters/MovieClusterComponents/MovieCards";
import { useEffect, useRef, useState } from "react";
import { addFilteredGptMovieDataBaseResults } from "../../../utils/redux/GPTSearchSlice";
import ShimmerGPT from "../../ShimmerComponent/ShimmerGPT";
import Error from "../../Layout/Error";

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
      <div className="relative w-screen max-w-md md:max-w-3xl m-auto bg-zinc-900 mb-16 pb-16 rounded">
        <div className="flex flex-wrap flex-col">
          <div className="flex justify-between px-4 pb-4 md:px-4 items-center bg-gradient-to-r from-zinc-800 via-black to-zinc-800">
            <div className="py-2">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex shadow rounded-sm md:rounded-lg overflow-hidden "
              >
                <input
                  className="outline-none px-2 bg-zinc-700"
                  placeholder="Select your Language"
                  type="text"
                  ref={languageChosen}
                ></input>
                <button
                  onClick={handleChange}
                  className="outline-none bg-red-700 text-white hover:bg-red-500 px-5 md:px-8 py-1 shrink-0"
                >
                  Filter
                </button>
              </form>
            </div>
            <button
              onClick={handleReset}
              className="outline-none bg-red-700 text-white hover:bg-red-500 rounded px-5 md:px-8 py-1 shrink-0"
            >
              Reset
            </button>
          </div>
          {filteredGptMovieDataBaseResult === null &&
            gptSearchResults.map((movie, index) => (
              <div key={index}>
                <div className="">
                  <h1 className="p-2 md:text-xl bg-zinc-700 text-center text-white">
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
            {filteredGptMovieDataBaseResult?.length > 0 &&
            filteredGptMovieDataBaseResult !== null &&
            gptMovieDataBaseResults?.length > 0 ? (
              filteredGptMovieDataBaseResult.filter(
                (m) => m.poster_path !== null
              ).length > 0 ? (
                filteredGptMovieDataBaseResult.map((m, index) => (
                  <div key={index}>
                    <MovieCards poster={m.poster_path} movie={m} id={m.id} />
                  </div>
                ))
              ) : (
                <ShimmerGPT />
              )
            ) : null}
            {filteredGptMovieDataBaseResult?.length === 0 ? (
              <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-white text-xl md:text-xl">
                  No Movies Found in this Language
                </h1>
                <h2 className="text-white text-sm md:text-md">
                  Please try with another language.
                </h2>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default GptSearchResult;
