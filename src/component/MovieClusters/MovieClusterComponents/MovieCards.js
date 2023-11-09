import React from "react";
import { MOVIE_IMAGE_URL } from "../../../utils/Constants/constants";
import Popup from "reactjs-popup";
import MovieDetailsCard from "./MovieDetails";

const MovieCards = ({ title, poster, movie }) => {
  if (!poster) return null;
  return (
    <>
      <h1>{title}</h1>
      <Popup
        trigger={
          <div>
            <div className="w-48  my-4 mr-4 hover:shadow-[0px_0px_10px_2px_#660033] hover:scale-110 delay-150 duration-300 ease-in-out">
              <img alt="Movie Poster" src={MOVIE_IMAGE_URL + poster}></img>
            </div>
          </div>
        }
        modal
        nested
      >
        <MovieDetailsCard details={movie} />
      </Popup>
    </>
  );
};

export default MovieCards;
