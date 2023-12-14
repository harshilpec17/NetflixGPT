import React, { useEffect, useState } from "react";
import { MOVIE_IMAGE_URL } from "../../../utils/Constants/constants";
import Popup from "reactjs-popup";
import MovieDetailsCard from "./MovieDetailsCard";
import { useDispatch } from "react-redux";
import {
  addMovieToggle,
  addSelectedMovie,
} from "../../../utils/redux/movieDescription";
import { ImCross } from "react-icons/im";

const MovieCards = ({ poster, movie, id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addSelectedMovie(movie));
    dispatch(addMovieToggle(null));
    dispatch(addMovieToggle(true));
  };
  // const [cross, setCross] = useState(false);
  // console.log(cross);

  // const handleToggle = () => {
  //   dispatch(addMovieToggle(null));
  //   const value = setCross(!cross);
  //   dispatch(addMovieToggle(value));
  // };

  if (!poster) return null;
  return (
    <>
      <Popup
        trigger={
          <div>
            <div
              onClick={handleClick}
              className="w-32 md:w-48 md:my-4 my-2 mx-1 md:mx-2 shadow-2xl hover:scale-110 delay-150 duration-300 ease-in-out"
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
