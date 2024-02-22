import React, { useEffect, useState } from "react";

import { countries } from "../../../../utils/Constants/constants";

import { useSelector } from "react-redux";
import MovieProvider from "./MovieProvider";

const StreamingPlatform = () => {
  const newCountry = countries.data.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [value, setValue] = useState("null");
  const [filterData, setFilterData] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const movieProvider = useSelector(
    (store) => store.movieDescription.movieProvider
  );

  function loop(val) {
    if (movieProvider === null) {
      return;
    } else {
      const data = Object.keys(movieProvider);
      const checkNull = data.find((e) => e === val);
      setFilterData(checkNull);

      if (checkNull !== undefined) {
        for (const property in movieProvider) {
          if (property === value) {
            setFilterData(movieProvider[property]);
          }
        }
      }
    }
  }

  useEffect(() => {
    loop(value);
  }, [value]);

  return (
    <div className="text-[#D1D7E0] bg-[#1D2127] md:pb-8 rounded bg-opacity-90 mt-3 md:mt-12">
      <h1 className="text-center md:p-4 p-2 text-xl md:text-4xl bg-[#024B58] ">
        Where to Watch ?
      </h1>
      <div className="flex md:justify-around items-center justify-between px-3 md:px-0 py-3 md:py-5">
        <div className="md:w-[70%] w-[40%]">
          <h2 className="md:text-2xl text-md md:p-3 p-1 text-center text-white bg-red-600">
            Watch Providers
          </h2>
        </div>
        <div className="flex flex-col w-[60%] md:w-[20%] md:text-lg px-2">
          <div className="flex flex-col md:font-bold text-center">
            <select
              onChange={handleChange}
              className="bg-gray-900 md:px-4 px-1 py-2 outline-none text-white"
            >
              <option value={"null"}>Select your region</option>
              <option value={"CA"}> Canada 🇨🇦</option>
              <option value={"US"}> USA 🇺🇸</option>
              <option value={"IN"}> India 🇮🇳</option>
              {newCountry.map((con) => (
                <option key={con.name} value={con.iso2}>
                  {con.name} {con.unicodeFlag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="rounded pb-4 md:pb-0  md:p-3 ">
        <div className="flex flex-col justify-between gap-2">
          <div>
            {filterData !== undefined ? (
              <div className="flex flex-col  px-4">
                <div className="md:ml-6 pb-5">
                  <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/justwatch-c2e58adf5809b6871db650fb74b43db2b8f3637fe3709262572553fa056d8d0a.svg"
                    alt="justWatch logo"
                    className="md:w-24 w-20 pb-3"
                  ></img>
                  <p className="text-white text-xs">
                    {" "}
                    The movie is currently available to stream in selected
                    country. JustWatch makes it easy to find out where you can
                    legally watch your favorite movies & TV shows online. Visit
                    JustWatch for more information.
                  </p>
                </div>
                {filterData?.buy && (
                  <div className="py-2 md:py-0 md:p-2">
                    <h1 className="md:ml-6 pb-2 md:text-xl text-lg font-bold border-b">
                      To Buy
                    </h1>
                    <div className="flex md:pt-4 pt-3 md:pb-14 flex-wrap gap-3 md:gap-0 ">
                      <MovieProvider provider={filterData?.buy} />
                    </div>
                  </div>
                )}
                {filterData?.rent && (
                  <div className="pt-2 md:pt-0 md:p-2">
                    <h1 className="md:ml-6 pb-2 md:text-xl text-lg font-bold border-b">
                      To Rent
                    </h1>
                    <div className="flex md:pt-4 pt-3 md:pb-14 flex-wrap gap-3 md:gap-0 ">
                      <MovieProvider provider={filterData?.rent} />
                    </div>
                  </div>
                )}

                {filterData?.flatrate && (
                  <div className="pt-2 md:pt-0 md:p-2">
                    <h1 className="md:ml-6 pb-2 md:text-xl text-lg font-bold border-b">
                      To Other Provider
                    </h1>
                    <div className="flex md:pt-4 pt-3 md:pb-14 flex-wrap gap-3 md:gap-0 ">
                      <MovieProvider provider={filterData?.flatrate} />
                    </div>
                  </div>
                )}
                {filterData?.free && (
                  <div className="pt-2 md:pt-0 md:p-2">
                    <h1 className="md:ml-6 pb-2 md:text-xl text-lg font-bold border-b">
                      To free
                    </h1>
                    <div className="flex md:pt-4 pt-3 md:pb-14 flex-wrap gap-3 md:gap-0 ">
                      <MovieProvider provider={filterData?.free} />
                    </div>
                  </div>
                )}
                {filterData?.ads && (
                  <div className="pt-2 md:pt-0 md:p-2">
                    <h1 className="md:ml-6 pb-2 md:text-xl text-lg font-bold border-b">
                      With ads
                    </h1>
                    <div className="flex md:pt-4 pt-3 md:pb-14 flex-wrap gap-3 md:gap-0 ">
                      <MovieProvider provider={filterData?.ads} />
                    </div>
                  </div>
                )}
              </div>
            ) : value === "null" ? (
              <h1 className="md:text-xl text-center md:p-6 p-1 border mx-3 md:mx-4">
                Please Select Your Region
              </h1>
            ) : (
              <div className="border p-1 mx-3 md:mx-4">
                <h1 className="md:text-xl text-black font-semibold text-center md:m-16 md:mx-60 md:p-4 p-1 bg-white">
                  Data not available for selected region
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPlatform;
