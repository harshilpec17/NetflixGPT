import React, { useEffect } from "react";
import { API_TOKEN } from "../../../../utils/Constants/constants";
import { useDispatch } from "react-redux";
import { addCast } from "../../../../utils/redux/movieDescription";
import Cast from "./CastAndCrewComponent/Cast";

const CastAndCrew = ({ id }) => {
  const dispatch = useDispatch();
  const cast = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + " /credits?language=en-US",
      API_TOKEN
    );
    const json = await data.json();
    const peopleData = json;
    dispatch(addCast(peopleData));

    console.log(peopleData);
  };

  useEffect(() => {
    cast();
  }, []);

  return (
    <>
      <div className="text-[#D1D7E0] bg-white bg-fixed   rounded mt-12">
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