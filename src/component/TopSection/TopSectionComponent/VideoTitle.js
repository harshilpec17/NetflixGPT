import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-56 flex flex-col md:pt-64 h-screen w-screen px-4 md:px-12 absolute text-white md:bg-gradient-to-r from-black ">
        <h1 className="px-2 pt-8 text-xl md:text-4xl font-bold">{title}</h1>
        <p className="p-2 my-2 md:text-md text-sm font-light max-w-md">
          {overview}
        </p>
        <div className="flex items-center px-2 pt-2 md:pt-6">
          <button className="px-3 pr-5 gap-2 flex justify-center items-center md:gap-3 md:px-8 py-2 outline-none rounded font-bold bg-white text-black md:text-2xl hover:bg-opacity-70">
             <span>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
            </span> Play
          </button>
          <button className="px-3 md:px-8 py-2 mx-3 outline-none rounded font-bold bg-gray-400 text-black md:text-2xl hover:bg-opacity-70">
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
