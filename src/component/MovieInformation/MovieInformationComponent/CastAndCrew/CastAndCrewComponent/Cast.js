import React from "react";
import CastCard from "./CastCard";
import { useSelector } from "react-redux";

const Cast = () => {
  const profile = useSelector((store) => store.movieDescription.cast);
  if (profile === null) return;
  return (
    <>
      <div className="md:px-8 px-1 md:py-2 w-screen">
        <div>
          {profile.cast && (
            <>
              <h2 className="text-black text-left font-bold text-lg py-2 md:text-xl md:py-4">
                Top Cast
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {profile.cast.map((pro, index) => (
                  <CastCard key={index} cast={pro} />
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          {profile.crew && (
            <>
              <h2 className="text-black font-bold text-left text-lg py-2 md:text-xl md:py-4">
                Top Crew
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {profile.crew.map((pro, index) => (
                  <CastCard key={index} cast={pro} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cast;
