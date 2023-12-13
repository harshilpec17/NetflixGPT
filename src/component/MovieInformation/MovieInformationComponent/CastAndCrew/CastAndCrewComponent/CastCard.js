import React from "react";
import {
  API_TOKEN,
  EMPTY_PROFILE_AVATAR,
  MOVIE_IMAGE_URL,
} from "../../../../../utils/Constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addCastId,
  addCastProfile,
  addCastWork,
} from "../../../../../utils/redux/castInfoSlice";

const CastCard = ({ cast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(cast);

  const handleClick = () => {
    navigate("/castInfo");
    dispatch(addCastId(cast.id));
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="w-36 outline-none shadow-2xl flex rounded-lg bg-gray-200 cursor-pointer"
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
