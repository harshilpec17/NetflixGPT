// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { MOVIE_IMAGE_URL } from "../../../utils/Constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../../../utils/redux/movieDescription";

const MovieDetailsCard = ({ details }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // when you are rendering the child component, you cannot update or change anything in the parent component, It will invoke the
  // bad setState() call, which gives you an error shown as

  /*
  ```
  react-dom.development.js:86 Warning: Cannot update a component (`MovieCluster`) while rendering a different component (`MovieDetailsCard`). 
  To locate the bad setState() call inside `MovieDetailsCard`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
  
  ```
  In this case, Movie cluster cannot be updated while rendering the MovieDetails card. 
  */

  // To avoid the problem, you can update the or modify the parent component, by doing the updates inside the return <div>, but you cannot do that
  // at the higher level inside the functional component. you can wrap that inside the another function and return inside the div or button or any state after return the component.

  const handleClick = () => {
    navigate("/watch");
    dispatch(addSelectedMovie(details));
  };

  return (
    <>
      <div>
        <>
          <div className="w-96 max-w-md p-3 md:mr-5 text-black bg-white bg-opacity-90 rounded-md overflow-none">
            <div className="flex">
              <div className=" w-1/2 flex flex-col justify-center ml-2 pt-2">
                <img
                  className="md:w-32 w-28 cursor-pointer rounded"
                  alt="Movie Card"
                  src={MOVIE_IMAGE_URL + details.poster_path}
                />
                <div className="max-w-xs w-28 md:w-32 text-md md:text-lg text-center pt-2 font-bold">
                  {details.original_title || details.original_name}
                </div>
              </div>
              <div className="flex flex-col justify-around ml-2 pt-2">
                <div className="text-sm m-2 font-bold text-justify ">
                  Popularity: {details.popularity}
                </div>
                <div className="text-xs m-2 text-justify ">
                  {details.overview}
                </div>

                <div className="m-auto">
                  <button
                    onClick={handleClick}
                    className="bg-black text-white p-2 px-8 text-xl font-bold rounded-lg hover:bg-opacity-70"
                  >
                    ▶️ Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MovieDetailsCard;
