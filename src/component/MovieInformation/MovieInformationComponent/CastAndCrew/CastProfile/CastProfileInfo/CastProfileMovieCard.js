import React from "react";
import MovieCards from "../../../../../MovieClusters/MovieClusterComponents/MovieCards";
import { useSelector } from "react-redux";

const CastProfileMovieCard = () => {
  const workProfile = useSelector((store) => store?.castInfo?.castWork);

  if (workProfile === null) return;
  // if (workProfile.cast.length > 0) return;
  return (
    <>
      <div className="bg-[#1D2127]">
        <div className="md:mt-10 md:mx-16 bg-[#c3d5d9] rounded">
          <h1 className="text-bold md:p-4 p-2 text-center bg-orange-300 text-black text-xl md:text-2xl">
            Known for
          </h1>
          <div className="flex flex-wrap justify-around md:justify-center pb-8">
            {workProfile.cast &&
              workProfile?.cast.map((m, index) => {
                return (
                  m.poster_path && (
                    <div key={index}>
                      <MovieCards poster={m.poster_path} movie={m} id={m.id} />
                      <div>
                        <h1 className="text-black text-center font-semibold w-28 md:w-48">
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
