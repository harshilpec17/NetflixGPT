import useNowPlayingMovies from "../../hooks/MovieHooks/useNowPlayingMovies";

import TopSection from "../TopSection/TopSection";
import MovieCluster from "../MovieClusters/MovieCluster";
import useTvShows from "../../hooks/TvShowHooks/useTvShows";
import useUpcomingMovies from "../../hooks/MovieHooks/useUpcomingMovies";
import useTopRatedMovies from "../../hooks/MovieHooks/useTopRatedMovies";
import usePopularMovies from "../../hooks/MovieHooks/usePopularMovies";
import useTopRatedTvShows from "../../hooks/TvShowHooks/useTopRatedTvShows";

import { useSelector } from "react-redux";
import GptPage from "../GPTPage/GptPage";
import { useEffect } from "react";

const Browse = () => {
  useNowPlayingMovies();
  useTvShows();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useTopRatedTvShows();

  const gptToggle = useSelector((store) => store.gpt.gptToggleValue);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {gptToggle ? (
        <GptPage />
      ) : (
        <>
          <TopSection />
          <MovieCluster />
        </>
      )}
    </>
  );
};

export default Browse;
