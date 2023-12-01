import React from "react";
import { MOVIE_IMAGE_URL } from "../../../../../utils/Constants/constants";

const CastCard = ({ cast }) => {
  return (
    <>
      <div className="w-36 outline-none shadow-2xl flex rounded-lg bg-gray-200">
        <div className="flex flex-col">
          <div className="border-b">
            <img
              src={
                cast.profile_path
                  ? MOVIE_IMAGE_URL + cast.profile_path
                  : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              }
              alt="Profile Img"
              className="bg-gray-200 h-48 w-36 rounded-t-lg   "
            ></img>
          </div>
          <div className="text-center h-full  py-4 bg-white rounded-b-lg">
            <p className="text-black hover:text-gray-400 text-[16px] font-bold">
              {cast.original_name || cast.name || "N/A"}
            </p>
            <p className="text-gray-400 text-[12px] font-light">
              {cast.character || "N/A"}
            </p>
            <p className="text-gray-400 text-[12px] font-light">
              {cast.job || cast.known_for_department || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CastCard;
