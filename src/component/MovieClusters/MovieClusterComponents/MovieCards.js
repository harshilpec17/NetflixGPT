import React from "react";
import { MOVIE_IMAGE_URL } from "../../../utils/Constants/constants";

const MovieCards = ({ title, poster }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <div className="w-48 pr-4">
          <img alt="Movie Poster" src={MOVIE_IMAGE_URL + poster}></img>
        </div>
      </div>
    </>
  );
};

export default MovieCards;
