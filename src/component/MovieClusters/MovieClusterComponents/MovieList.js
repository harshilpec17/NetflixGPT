import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <>
      <div>
        <h1 className="text-white px-4 py-3 text-2xl">{title} </h1>
        <div className="flex px-4 overflow-x-scroll scroll-smooth no-scrollbar">
          {movies.map((movie) => (
            <MovieCards
              key={movie.id}
              poster={movie.poster_path}
              movie={movie}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
