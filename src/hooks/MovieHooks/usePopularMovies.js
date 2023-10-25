import { useDispatch } from "react-redux";
import { API_TOKEN } from "../../utils/Constants/constants";
import { addPopularMovies } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_TOKEN
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
