import { API_TOKEN } from "../../utils/Constants/constants";
import { useDispatch } from "react-redux";
import { addMovieProvider } from "../../utils/redux/movieDescription";
import { useEffect } from "react";

const useWatchProvider = ({ movieInfo }) => {
  const dispatch = useDispatch();
  const watchProvider = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieInfo.id + "/watch/providers",
      API_TOKEN
    );

    try {
      if (data.status === 200) {
        const json = await data.json();
        const provider = json.results;
        if (provider) {
          dispatch(addMovieProvider(provider));
        } else {
          dispatch(addMovieProvider(null));
        }

        if (Object.keys(provider).length === 0) {
          const tvData = await fetch(
            "https://api.themoviedb.org/3/tv/" +
              movieInfo.id +
              "/watch/providers",
            API_TOKEN
          );
          const json = await tvData.json();
          const tvProvider = json.results;

          if (tvProvider) {
            dispatch(addMovieProvider(tvProvider));
          } else {
            dispatch(addMovieProvider(null));
          }
        }
      }
      if (data.status === 404) {
        const tvData = await fetch(
          "https://api.themoviedb.org/3/tv/" +
            movieInfo.id +
            "/watch/providers",
          API_TOKEN
        );
        const json = await tvData.json();
        const tvProvider = json.results;

        if (tvProvider) {
          dispatch(addMovieProvider(tvProvider));
        } else {
          dispatch(addMovieProvider(null));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    watchProvider();
  }, []);
};

export default useWatchProvider;
