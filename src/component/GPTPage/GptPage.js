import React from "react";
import GptSearchBar from "./GPTPageComponents/GptSearchBar";
import GptSearchResult from "./GPTPageComponents/GptSearchResult";

const GptPage = () => {
  return (
    <>
      <img
        className="bg-cover bg-center h-screen md:bg-contain absolute w-screen"
        src="https://imageio.forbes.com/specials-images/imageserve/65133ef75b24f850bb4ad501/0x0.jpg?format=jpg&crop=3988,2244,x0,y198,safe&height=900&width=1600&fit=bounds"
        alt="background Img"
      />
      <div className="flex flex-col">
        <GptSearchBar />
        <GptSearchResult />
      </div>
    </>
  );
};

export default GptPage;
