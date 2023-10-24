import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import TopSection from "./TopSection";
import MovieCluster from "./MovieCluster";
import useTvShows from "../hooks/useTvShows";

const Browse = () => {
  useNowPlayingMovies();
  useTvShows();
  return (
    <>
      <Header />
      <TopSection />
      <MovieCluster />
    </>
  );
};

export default Browse;
