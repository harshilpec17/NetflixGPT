import React from "react";
import CastCard from "./CastCard";
import { useSelector } from "react-redux";

const Cast = () => {
  const profile = useSelector((store) => store.movieDescription.cast);
  if (profile === null) return;
  return (
    <>
      <div className="px-8 py-2 w-screen">
        <div>
          {profile.cast && (
            <>
              <h2 className="text-black font-bold text-xl py-4">Top Cast</h2>
              <div className="flex flex-wrap gap-4">
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
              <h2 className="text-black font-bold text-xl py-4">Top Crew</h2>
              <div className="flex flex-wrap gap-4">
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
