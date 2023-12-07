import React, { useEffect } from "react";
import { MOVIE_IMAGE_URL } from "../../../utils/Constants/constants";
import Popup from "reactjs-popup";
import MovieDetailsCard from "./MovieDetailsCard";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../../../utils/redux/movieDescription";

const MovieCards = ({ title, poster, movie, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addSelectedMovie(movie));
  };

  if (!poster) return null;
  return (
    <>
      <h1>{title}</h1>
      <Popup
        trigger={
          <div className="">
            <div
              onClick={handleClick}
              className="w-48 my-4 mx-2 shadow-2xl hover:scale-110 delay-150 duration-300 ease-in-out"
            >
              <img alt="Movie Poster" src={MOVIE_IMAGE_URL + poster}></img>
            </div>
          </div>
        }
        modal
        nested
      >
        <MovieDetailsCard details={movie} id={id} />
      </Popup>
    </>
  );
};

export default MovieCards;
