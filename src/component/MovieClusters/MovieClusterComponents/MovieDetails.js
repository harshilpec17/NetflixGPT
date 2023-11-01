import React from "react";

// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { MOVIE_IMAGE_URL } from "../../../utils/Constants/constants";

const MovieDetailsCard = ({ details }) => {
  return (
    <>
      <div className="w-96 max-w-md h-auto text-black bg-slate-200 bg-opacity-90 rounded-md overflow-none">
        <div className="flex">
          <div className=" w-1/2 flex flex-col justify-center ml-2 pt-2">
            <img
              className="w-32 cursor-pointer rounded"
              alt="Movie Card"
              src={MOVIE_IMAGE_URL + details.poster_path}
            />
            <div className="max-w-xs w-32 text-lg text-center pt-2 font-bold">
              {details.original_title}
            </div>
          </div>
          <div className="flex flex-col justify-around ml-2 pt-2">
            <div className="text-sm m-2 font-bold text-justify ">
              Popularity: {details.popularity}
            </div>
            <div className="text-xs m-2 text-justify ">{details.overview}</div>

            <div className="m-auto">
              <button className="bg-black text-white p-2 px-8 text-xl font-bold rounded-lg hover:bg-opacity-70">
                ▶️ Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsCard;
