import { useSelector } from "react-redux";
import { MOVIE_BACKGROUND_URL } from "../../utils/Constants/constants";
import MovieDescription from "./MovieInformationComponent/MovieDescription/MovieDescription";
import StreamingPlatform from "./MovieInformationComponent/StreamingPlatform/StreamingPlatform";

import useWatchProvider from "../../hooks/WatchProviderHook/useWatchProvider";
import MovieInfoTrailer from "./MovieInformationComponent/MovieInfoTrailer";
import CastAndCrew from "./MovieInformationComponent/CastAndCrew/CastAndCrew";
import { useEffect } from "react";

const Watch = () => {
  const movieInfo = useSelector(
    (store) => store.movieDescription.selectedMovie
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useWatchProvider({ movieInfo });

  if (movieInfo === null) return;

  return (
    <>
      <div className="bg-[#12100E] bg-cover bg-center overflow-hidden">
        <img
          className="fixed bg-cover h-screen w-screen block md:hidden"
          src={MOVIE_BACKGROUND_URL + movieInfo.poster_path}
          alt="Background_Poster"
        />
        <img
          className="fixed bg-cover h-screen w-screen hidden md:block"
          src={MOVIE_BACKGROUND_URL + movieInfo.backdrop_path}
          alt="Background_Poster"
        />
        <div className="relative pt-28 md:pt-20 px-3 md:px-16 pb-3 md:pb-20">
          <MovieDescription movieInfo={movieInfo} />
          <StreamingPlatform movieInfo={movieInfo} />
          <MovieInfoTrailer movieId={movieInfo.id} />
          <CastAndCrew id={movieInfo.id} />
        </div>
      </div>
    </>
  );
};

export default Watch;
