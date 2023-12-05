import React from "react";
import MovieCards from "../../../../../MovieClusters/MovieClusterComponents/MovieCards";

const CastProfileMovieCard = ({ workProfile }) => {
  console.log(workProfile);
  return (
    <>
      <div className="bg-[#1D2127]">
        <div className="mt-10 mx-16  bg-[#c3d5d9] rounded ">
          <h1 className="text-bold p-4 text-center text-black text-2xl">
            Known for
          </h1>
          <div className="flex flex-wrap justify-center">
            {workProfile.cast.map((m, index) => {
              return (
                m.poster_path && (
                  <div key={index}>
                    <MovieCards poster={m.poster_path} movie={m} id={m.id} />
                    <div>
                      <h1 className="text-black text-center font-semibold w-48">
                        {m.title || "N/A"}
                      </h1>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CastProfileMovieCard;
