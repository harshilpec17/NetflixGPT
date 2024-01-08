import React from "react";

import { useSelector } from "react-redux";
import useMovieVideo from "../../../hooks/MovieHooks/useMovieVideo";

const MovieInfoTrailer = ({ movieId }) => {
  useMovieVideo({ movieId });

  const trailerKey = useSelector(
    (store) => store.movieDescription.movieVideo.key
  );
  return (
    <>
      <div>
        <iframe
          className="w-[100%] pt-10 aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerKey +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default MovieInfoTrailer;
