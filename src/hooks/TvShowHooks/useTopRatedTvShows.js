import { useDispatch } from "react-redux";
import { API_TOKEN } from "../../utils/Constants/constants";
import { addTopRatedTvShows } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

const useTopRatedTvShows = () => {
  const dispatch = useDispatch();
  const topRatedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_TOKEN
    );
    const json = await data.json();

    dispatch(addTopRatedTvShows(json.results));
  };
  useEffect(() => {
    topRatedTvShows();
  }, []);
};

export default useTopRatedTvShows;
