import React from "react";
import GptSearchBar from "./GPTPageComponents/GptSearchBar";
import GptSearchResult from "./GPTPageComponents/GptSearchResult";
import { OPEN_AI_BACKGROUND_IMG } from "../../utils/Constants/constants";

const GptPage = () => {
  return (
    <>
      <img
        className="bg-cover bg-center h-screen md:bg-contain fixed w-screen"
        src={OPEN_AI_BACKGROUND_IMG}
        alt="background Img"
      />
      <div className="flex flex-col bg-black">
        <GptSearchBar />
        <GptSearchResult />
      </div>
    </>
  );
};

export default GptPage;
