import { useSelector } from "react-redux";
import { MOVIE_BACKGROUND_URL } from "../../utils/Constants/constants";
import MovieDescription from "./MovieInformationComponent/MovieDescription/MovieDescription";
import StreamingPlatform from "./MovieInformationComponent/StreamingPlatform/StreamingPlatform";

import useWatchProvider from "../../hooks/WatchProviderHook/useWatchProvider";

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
      <div className=" bg-[#12100E] bg-cover bg-center">
        <img
          className="fixed w-screen"
          src={MOVIE_BACKGROUND_URL + movieInfo.backdrop_path}
          alt="Background_Poster"
        />
        <div className="relative pt-20 px-16 pb-20">
          <MovieDescription movieInfo={movieInfo} />
          <StreamingPlatform movieInfo={movieInfo} />
          <CastAndCrew id={movieInfo.id} />
        </div>
      </div>
    </>
  );
};

export default Watch;
