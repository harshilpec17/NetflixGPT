import React from "react";
import {
  EMPTY_PROFILE_AVATAR,
  MOVIE_BACKGROUND_URL,
} from "../../../../../../utils/Constants/constants";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CastProfileInfo = () => {
  const navigate = useNavigate();
  const castProfile = useSelector((store) => store.castInfo.castProfile);

  if (castProfile === null) {
    navigate("/browse");
  }
  return (
    <>
      {
        <div className="py-16 px-16  bg-[#1D2127]">
          <div className="flex justify-between shadow-2xl rounded bg-white bg-opacity-90 p-20 mt-12 ">
            <div className="w-1/4 ">
              <img
                src={
                  castProfile?.profile_path === null
                    ? EMPTY_PROFILE_AVATAR
                    : MOVIE_BACKGROUND_URL + castProfile?.profile_path
                }
                alt="BackgroundImage"
                className="rounded shadow-xl"
              />
            </div>
            <div className=" text-black pt-0 p-2 mr-20 w-1/2">
              <h1 className="text-4xl">{castProfile?.name}</h1>
              <div className="mt-4">
                {castProfile?.also_known_as &&
                  castProfile?.also_known_as.length > 0 && (
                    <>
                      <h3 className="text-lg">Also popular as:</h3>
                      <p className="text-sm text-[#D1D7E0] bg-gray-800 p-3 rounded">
                        {castProfile?.also_known_as.map((name) => name + ", ")}
                      </p>
                    </>
                  )}

                <h3 className="text-lg mt-4">
                  Birthday: {castProfile?.birthday || "Not Available  😔"}
                </h3>
                <h3 className="text-lg mt-2">
                  Gender:
                  {castProfile?.gender === 0 ? " Not Specified" : null}
                  {castProfile?.gender === 1 ? " Female" : null}
                  {castProfile?.gender === 2 ? " Male" : null}
                  {castProfile?.gender === 3 ? " Non-binary" : null}
                </h3>
                <h3 className="text-lg mt-2">
                  Place of Birth: {castProfile?.place_of_birth || "N/A"}
                </h3>
                <h3 className="text-lg mt-2">
                  Death Day:
                  {" " + castProfile?.deathday === null
                    ? "N/A"
                    : castProfile?.deathday}
                </h3>
              </div>
              <p className="text-md mt-4">
                Biography: {" " + castProfile?.biography || "N/A"}
              </p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CastProfileInfo;
