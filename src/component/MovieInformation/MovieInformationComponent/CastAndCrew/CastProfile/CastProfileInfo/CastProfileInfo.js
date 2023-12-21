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
        <div className="py-16 md:px-16  bg-[#1D2127]">
          <div className="flex md:flex-row flex-col justify-between shadow-2xl rounded bg-white bg-opacity-90 md:p-20 p-3 mt-12 ">
            <div className="md:w-1/4 px-3 md:px-0">
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
            <div className="text-black pt-3 md:pt-0 px-3 md:px-0 md:mr-20 md:w-1/2">
              <h1 className="md:text-4xl text-2xl font-bold">
                {castProfile?.name}
              </h1>
              <div className="md:mt-4 mt-2">
                {castProfile?.also_known_as &&
                  castProfile?.also_known_as.length > 0 && (
                    <>
                      <h3 className="md:text-lg text-md mt-2 font-semibold">
                        Also popular as:
                      </h3>
                      <p className="text-sm text-[#D1D7E0] bg-gray-800 md:p-3 p-2 rounded">
                        {castProfile?.also_known_as.map((name) => name + ", ")}
                      </p>
                    </>
                  )}

                <h3 className="md:text-lg text-base mt-2 font-semibold md:mt-4">
                  Birthday:{" "}
                  <span className="font-normal">
                    {" "}
                    {castProfile?.birthday || "Not Available  😔"}
                  </span>
                </h3>
                <h3 className="md:text-lg text-md mt-2 font-semibold ">
                  Gender:{" "}
                  <span className="font-normal">
                    {castProfile?.gender === 0 ? " Not Specified" : null}
                    {castProfile?.gender === 1 ? " Female" : null}
                    {castProfile?.gender === 2 ? " Male" : null}
                    {castProfile?.gender === 3 ? " Non-binary" : null}
                  </span>
                </h3>
                <h3 className="md:text-lg text-md mt-2 font-semibold">
                  Place of Birth:{" "}
                  <span className="font-normal">
                    {" "}
                    {castProfile?.place_of_birth || "N/A"}{" "}
                  </span>
                </h3>
                <h3 className="md:text-lg text-md mt-2 font-semibold">
                  Death Day:
                  <span className="font-normal">
                    {" "}
                    {castProfile?.deathday === null
                      ? "N/A"
                      : castProfile?.deathday}
                  </span>
                </h3>
              </div>
              <h3 className="md:text-lg text-md mt-2 font-semibold">
                Biography:
                <p className="font-normal">
                  {" "}
                  {" " + castProfile?.biography || "N/A"}{" "}
                </p>
              </h3>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CastProfileInfo;
