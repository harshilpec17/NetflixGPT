import React from "react";
import { useSelector } from "react-redux";
import { LANGUAGE_CONSTANT } from "../../../utils/Constants/languageConstant";

const GptSearchBar = () => {
  const languageSelector = useSelector(
    (store) => store.language.selectedLanguage
  );

  console.log(languageSelector);
  return (
    <>
      <div className="absolute h-screen m-auto flex pt-60 justify-center w-screen items-start">
        <form className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-screen max-w-md md:max-w-3xl py-1 md:py-3 pl-2 "
            placeholder={LANGUAGE_CONSTANT[languageSelector].placeholder}
            type="text"
          ></input>
          <button className="outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {LANGUAGE_CONSTANT[languageSelector].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
