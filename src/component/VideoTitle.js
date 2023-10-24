import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-64 h-screen w-screen px-12 absolute text-white md:bg-gradient-to-r from-black">
        <h1 className="px-2 pt-8 text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="p-2 my-2 md:text-md text-sm font-light max-w-md">
          {overview}
        </p>
        <div className="flex items-center pt-6">
          <button className=" px-4 md:px-8 py-2 outline-none rounded font-bold bg-white text-black md:text-2xl hover:bg-opacity-70">
            ▶️ Play
          </button>
          <button className="px-4 md:px-8 py-2 mx-3 outline-none rounded font-bold bg-gray-400 text-black md:text-2xl hover:bg-opacity-70">
            <span className="flex items-center gap-2 ">
              <AiOutlineInfoCircle /> More Info
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
