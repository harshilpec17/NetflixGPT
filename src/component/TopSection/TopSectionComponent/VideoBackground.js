import { useSelector } from "react-redux";
import useTrailerVideo from "../../../hooks/MovieHooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo({ movieId });
  const trailerKey = useSelector((store) => store.movies?.trailerVideo?.key);

  return (
    <>
      <div className="-mt-24">
        <iframe
          className=" w-screen px-2 aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerKey +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
