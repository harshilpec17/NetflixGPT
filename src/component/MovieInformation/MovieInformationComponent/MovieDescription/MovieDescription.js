import React from "react";
import { MOVIE_IMAGE_URL } from "../../../../utils/Constants/constants";
import { useNavigate } from "react-router-dom";

const MovieDescription = ({ movieInfo }) => {
  const navigate = useNavigate();
  if (movieInfo === null) {
    navigate("/browse");
  }
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between shadow-2xl rounded bg-[#1D2127] bg-opacity-90 py-4 px-5 md:p-20 mt-12 ">
        <div className="md:w-1/4">
          <img
            src={MOVIE_IMAGE_URL + movieInfo.poster_path}
            alt="BackgroundImage"
            className="md:border rounded md:block hidden"
          />
          <img
            src={MOVIE_IMAGE_URL + movieInfo.backdrop_path}
            alt="BackgroundImage"
            className="border border-black rounded md:hidden block"
          />
        </div>
        <div className="text-[#D1D7E0] md:pt-0 pt-5 p-2 md:mr-20 md:w-1/2">
          <h1 className="md:text-4xl text-3xl">
            {movieInfo.title || movieInfo.original_name || "Not Available"}
          </h1>
          <div className="mt-4">
            <h3 className="md:text-lg">
              Release Date:{" "}
              {movieInfo.release_date ||
                movieInfo.first_air_date ||
                "Not Available  😔"}
            </h3>
            <h3 className="md:text-lg mt-2">
              Streaming-Language:
              {" " + movieInfo.original_language || "Not Available  😔"}
            </h3>
            <h3 className="md:text-lg mt-2">
              Popularity: {movieInfo.vote_average}
            </h3>
          </div>
          <p className="md:text-md mt-4">{movieInfo.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;
