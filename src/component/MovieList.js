import React from "react";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <>
      <div>
        <h1 className="text-white px-2 py-3 text-2xl">{title} </h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          {movies.map((movie) => (
            <MovieCards key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
