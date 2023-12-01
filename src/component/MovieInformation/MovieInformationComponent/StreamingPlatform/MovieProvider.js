import React from "react";
import { MOVIE_IMAGE_URL } from "../../../../utils/Constants/constants";

const MovieProvider = ({ provider }) => {
  return (
    <>
      {provider.map((p) => (
        <div key={p.provider_id} className="w-20 h-20 ml-6 border rounded">
          <img
            src={MOVIE_IMAGE_URL + p.logo_path}
            alt="Provider"
            className="rounded"
          ></img>
          <h1>{p.provider_name}</h1>
        </div>
      ))}
    </>
  );
};

export default MovieProvider;
