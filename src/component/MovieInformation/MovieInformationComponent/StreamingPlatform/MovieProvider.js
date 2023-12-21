import React from "react";
import { MOVIE_IMAGE_URL } from "../../../../utils/Constants/constants";

const MovieProvider = ({ provider }) => {
  return (
    <>
      {provider.map((p) => (
        <div
          key={p.provider_id}
          className="md:w-20 md:h-20 md:ml-6 mb-0 md:mb-14 lg:mb-0 w-12 h-12 md:mr-0 border rounded"
        >
          <img
            src={MOVIE_IMAGE_URL + p.logo_path}
            alt="Provider"
            className="rounded"
          ></img>
          <p className="text-center md:block hidden text-sm pt-2">
            {p.provider_name}
          </p>
        </div>
      ))}
    </>
  );
};

export default MovieProvider;
