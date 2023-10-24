import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const TopSection = () => {
  const mainMovie = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!mainMovie) return;

  console.log(mainMovie[0]);

  const { original_title, overview, id } = mainMovie[0];
  return (
    <>
      <div className="pt-32 md:pt-0 w-screen bg-black h-screen">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </>
  );
};

export default TopSection;
