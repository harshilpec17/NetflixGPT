import React, { useEffect } from "react";
import { API_TOKEN } from "../../../../utils/Constants/constants";
import { useDispatch } from "react-redux";
import { addCast } from "../../../../utils/redux/movieDescription";
import Cast from "./CastAndCrewComponent/Cast";

const CastAndCrew = ({ id }) => {
  const dispatch = useDispatch();
  const cast = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + " /credits?language=en-US",
      API_TOKEN
    );
    try {
      if (movieData.status === 200) {
        const MoviePeopleData = await movieData.json();
        if (MoviePeopleData) {
          dispatch(addCast(MoviePeopleData));
        } else {
          dispatch(addCast(null));
        }
        console.log(MoviePeopleData);

        if (Object.keys(MoviePeopleData.cast).length === 0) {
          const tvData = await fetch(
            "https://api.themoviedb.org/3/tv/" + id + "/credits?language=en-US",
            API_TOKEN
          );
          const tvPeopleData = await tvData.json();

          if (tvPeopleData) {
            dispatch(addCast(tvPeopleData));
          } else {
            dispatch(addCast(null));
          }
        }
      }
      if (movieData.status === 404) {
        const tvData = await fetch(
          "https://api.themoviedb.org/3/tv/" + id + "/credits?language=en-US",
          API_TOKEN
        );
        const tvPeopleData = await tvData.json();

        if (tvPeopleData) {
          dispatch(addCast(tvPeopleData));
        } else {
          dispatch(addCast(null));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cast();
  }, []);

  return (
    <>
      <div className="text-[#D1D7E0] bg-white bg-fixed rounded mt-12">
        <h1 className="text-center p-4 text-4xl bg-[#024B58] ">
          Cast and Crew
        </h1>
        <div className="">
          <Cast />
        </div>
      </div>
    </>
  );
};

export default CastAndCrew;
