import React from "react";

const ShimmerCastProfile = () => {
  return (
    <>
      <div className="py-16 px-16 bg-[#1D2127]">
        <div className="flex justify-between shadow-2xl rounded  bg-white bg-opacity-90 p-20 mt-12 ">
          <div className="w-1/4 ">
            <div className="w-64 h-80 rounded animate-pulse bg-gray-400"></div>
          </div>
          <div className=" pt-0 p-2 mr-20 w-1/2">
            <div className="w-64 bg-gray-400 h-8"></div>
            <div className="mt-4">
              <div className="w-52 animate-pulse mt-4 bg-gray-400 h-8"></div>
              <div className="w-48 animate-pulse mt-4 bg-gray-400 h-8"></div>
              <div className="w-48 animate-pulse mt-4 bg-gray-400 h-8"></div>
            </div>
            <div className=" w-2/2 animate-pulse h-80 mt-4  bg-gray-400"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerCastProfile;
