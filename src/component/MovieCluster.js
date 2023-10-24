import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieCluster = () => {
  const movieList = useSelector((store) => store.movies);

  return (
    <>
      <div className="bg-black">
        <div className="-mt-72 z-20 relative pl-12 pr-2 pt-20">
          <MovieList
            title={"Now Playing"}
            movies={movieList.nowPlayingMovies}
          />
          <MovieList title={"TV-Shows"} movies={movieList.tvShows} />
          <MovieList title={"Now Playing"} />
          <MovieList title={"Now Playing"} />
          <MovieList title={"Now Playing"} />
        </div>
      </div>
    </>
  );
};

export default MovieCluster;
