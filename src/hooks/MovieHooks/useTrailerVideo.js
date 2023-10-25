import { useDispatch } from "react-redux";
import { API_TOKEN } from "../../utils/Constants/constants";
import { addTrailerVideo } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = ({ movieId }) => {
  const dispatch = useDispatch();

  const backgroundVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_TOKEN
    );
    const json = await data.json();

    const filteredTrailer = json?.results.filter(
      (video) => video?.type === "Trailer"
    );

    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : filteredTrailer;
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    backgroundVideo();
  }, []);
};

export default useTrailerVideo;
