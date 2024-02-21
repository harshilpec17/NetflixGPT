import { MOVIE_IMAGE_URL } from "../../../utils/Constants/constants";
import Popup from "reactjs-popup";
import MovieDetailsCard from "./MovieDetailsCard";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../../../utils/redux/movieDescription";
import { ImCross } from "react-icons/im";

const MovieCards = ({ poster, movie, id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addSelectedMovie(movie));
  };

  if (!poster) return null;
  return (
    <>
      <Popup
        trigger={
          <div>
            <div
              onClick={handleClick}
              className="w-28 md:w-48 md:my-4 my-2 mx-1 md:mx-2 shadow-2xl hover:scale-110 delay-50 duration-300 ease-in-out"
            >
              <img alt="Movie Poster" src={MOVIE_IMAGE_URL + poster}></img>
            </div>
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <div>
            <button
              onClick={() => close()}
              className="bg-orange-500 float-right p-2 -mt-2 mr-2 rounded-2xl"
            >
              <ImCross />
            </button>
            <MovieDetailsCard details={movie} id={id} />
          </div>
        )}
      </Popup>
    </>
  );
};

export default MovieCards;
