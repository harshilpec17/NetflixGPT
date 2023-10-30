import { useSelector } from "react-redux";
import { LANGUAGE_CONSTANT } from "../../../utils/Constants/languageConstant";
import { useRef } from "react";
import { openai } from "../../../utils/Constants/openAI";

const GptSearchBar = () => {
  const languageSelector = useSelector(
    (store) => store.language.selectedLanguage
  );

  let searchText = useRef(null);

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

    console.log(chatCompletion.choices);
  };

  return (
    <>
      <div className="absolute h-screen m-auto flex pt-60 justify-center w-screen items-start">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex shadow rounded-lg overflow-hidden mb-4"
        >
          <input
            className="outline-none w-screen max-w-md md:max-w-3xl py-1 md:py-3 pl-2 "
            placeholder={LANGUAGE_CONSTANT[languageSelector].placeholder}
            type="text"
            ref={searchText}
          ></input>
          <button
            onClick={handleChange}
            className="outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            {LANGUAGE_CONSTANT[languageSelector].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
