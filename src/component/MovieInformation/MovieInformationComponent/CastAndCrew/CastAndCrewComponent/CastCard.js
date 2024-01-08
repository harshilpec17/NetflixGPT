import React from "react";
import {
  EMPTY_PROFILE_AVATAR,
  MOVIE_IMAGE_URL,
} from "../../../../../utils/Constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCastId } from "../../../../../utils/redux/castInfoSlice";

const CastCard = ({ cast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/castInfo");
    dispatch(addCastId(cast.id));
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="md:w-36 w-20 outline-none shadow-2xl flex rounded-lg bg-gray-200 cursor-pointer"
      >
        <div className="flex flex-col">
          <div className="border-b">
            <img
              src={
                cast.profile_path
                  ? MOVIE_IMAGE_URL + cast.profile_path
                  : EMPTY_PROFILE_AVATAR
              }
              alt="Profile Img"
              className="bg-gray-200 md:h-48 md:w-36 w-20 h-28 rounded-t-sm md:rounded-t-lg"
            ></img>
          </div>
          <div className="text-center h-full md:py-4 py-1 bg-white rounded-b-sm md:rounded-b-lg">
            <p className="text-black px-1 hover:text-gray-400 text-[12px] md:text-[16px] font-bold">
              {cast.original_name || cast.name || "N/A"}
            </p>
            <p className="text-gray-400 px-1 md:text-[12px] text-[10px] font-light">
              {cast.character || "N/A"}
            </p>
            <p className="text-gray-400 md:text-[12px] text-[10px] font-light">
              {cast.job || cast.known_for_department || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CastCard;
