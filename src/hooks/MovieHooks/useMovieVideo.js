import { useDispatch } from "react-redux";
import { API_TOKEN } from "../../utils/Constants/constants";
import { useEffect } from "react";
import { addMovieVideo } from "../../utils/redux/movieDescription";

const useMovieVideo = ({ movieId }) => {
  const dispatch = useDispatch();

  const MovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/videos?language=en-US`,
      API_TOKEN
    );
    try {
      if (data.status === 200) {
        const json = await data.json();
        const results = json.results;

        const filteredTrailer = results.filter(
          (video) => video?.type === "Trailer"
        );

        console.log(filteredTrailer);
        if (filteredTrailer.length >= 0) {
          const trailer = filteredTrailer.length
            ? filteredTrailer[0]
            : filteredTrailer;
          dispatch(addMovieVideo(trailer));
        }
        dispatch(addMovieVideo(filteredTrailer));
      }

      if (data.status !== 200) {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_TOKEN
        );
        const json = await data.json();
        const filteredTrailer = json?.results?.filter(
          (video) => video?.type === "Trailer"
        );

        console.log(filteredTrailer);
        const trailer = filteredTrailer.length
          ? filteredTrailer[0]
          : filteredTrailer;
        dispatch(addMovieVideo(trailer));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MovieVideo();
  }, []);
};

export default useMovieVideo;
