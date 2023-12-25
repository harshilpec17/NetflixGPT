import React from "react";

const ShimmerGPT = () => {
  return (
    <div className="relative w-screen max-w-md md:max-w-3xl m-auto bg-black  mb-8 rounded ">
      <div className="flex justify-between px-2 md:px-4 items-center bg-[#1D2127]">
        <div className="py-2">
          <div className="flex shadow rounded-sm md:rounded-lg overflow-hidden ">
            <div className="outline-none w-60 h-9 bg-slate-300 animate-pulse"></div>
            <div className="outline-none bg-[#024B58] h-9 w-20 shrink-0 animate-pulse"></div>
          </div>
        </div>
        <div className="outline-none rounded-sm md:rounded-lg animate-pulse bg-[#024B58] h-9 w-20 ">
          {" "}
        </div>
      </div>
      <div className="w-screen max-w-3xl mt-4 ">
        <div className="w-screen h-9  bg-gray-400 max-w-3xl animate-pulse"></div>
        <div className="flex">
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse hidden md:block"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse hidden md:block"></div>
        </div>

        <div className="w-screen h-9  bg-gray-400 max-w-3xl animate-pulse"></div>
        <div className="flex">
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse hidden md:block"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse hidden md:block"></div>
        </div>
        <div className="w-screen h-9  bg-gray-400 max-w-3xl animate-pulse"></div>
        <div className="flex">
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse hidden md:block"></div>
          <div className="md:w-32 w-24 md:h-48 h-32 m-4 bg-slate-600 animate-pulse hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerGPT;
