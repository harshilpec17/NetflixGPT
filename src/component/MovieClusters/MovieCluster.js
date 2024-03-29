import React from "react";
import MovieList from "./MovieClusterComponents/MovieList";
import { useSelector } from "react-redux";

const MovieCluster = () => {
  const movieList = useSelector((store) => store.movies);

  return (
    <>
      <div className="bg-gray-950">
        <div className="-mt-60 lg:-mt-36 relative flex flex-col md:ml-12 pr-2 pt-14 md:pt-20 pb-10 md:pb-20">
          <MovieList
            title={"Now Playing"}
            movies={movieList.nowPlayingMovies}
          />
          <MovieList title={"TV-Shows"} movies={movieList.tvShows} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movieList.upcomingMovies}
          />
          <MovieList
            title={"Top-Rated Movies"}
            movies={movieList.topRatedMovies}
          />
          <MovieList
            title={"Popular Movies"}
            movies={movieList.popularMovies}
          />
          <MovieList
            title={"Top-Rated Tv shows"}
            movies={movieList.topRatedTvShows}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCluster;
