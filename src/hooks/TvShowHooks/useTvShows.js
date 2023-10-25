import { useDispatch } from "react-redux";
import { API_TOKEN } from "../../utils/Constants/constants";
import { addTvShows } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();
  const tvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      API_TOKEN
    );
    const json = await data.json();

    dispatch(addTvShows(json.results));
  };
  useEffect(() => {
    tvShows();
  }, []);
};

export default useTvShows;
