import React from "react";
import { MOVIE_IMAGE_URL } from "../../../../utils/Constants/constants";

const MovieDescription = ({ movieInfo }) => {
  return (
    <>
      <div className="flex justify-between shadow-2xl rounded bg-[#1D2127] bg-opacity-90 p-20 mt-12 ">
        <div className="w-1/4">
          <img
            src={MOVIE_IMAGE_URL + movieInfo.poster_path}
            alt="BackgroundImage"
            className="border rounded"
          />
        </div>
        <div className="text-[#D1D7E0] pt-0 p-2 mr-20 w-1/2">
          <h1 className="text-4xl">
            {movieInfo.title || movieInfo.original_name || "Not Available"}
          </h1>
          <div className="mt-4">
            <h3 className="text-lg">
              Release Date:{" "}
              {movieInfo.release_date ||
                movieInfo.first_air_date ||
                "Not Available  😔"}
            </h3>
            <h3 className="text-lg mt-2">
              Streaming-Language:
              {" " + movieInfo.original_language || "Not Available  😔"}
            </h3>
            <h3 className="text-lg mt-2">
              Popularity: {movieInfo.vote_average}
            </h3>
          </div>
          <p className="text-md mt-4">{movieInfo.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;
