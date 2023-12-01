import React, { useEffect, useState } from "react";

import { countries } from "../../../../utils/Constants/constants";

import { useSelector } from "react-redux";
import MovieProvider from "./MovieProvider";

const StreamingPlatform = () => {
  const newCountry = countries.data.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [value, setValue] = useState(null);
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
    <div className="text-[#D1D7E0] bg-[#1D2127] rounded bg-opacity-90 mt-12">
      <h1 className="text-center p-4 text-4xl bg-[#024B58] ">
        Where to Watch ?
      </h1>
      <div className="flex justify-around py-8">
        <div className="w-[70%]">
          <h2 className="text-2xl p-3 text-center text-white bg-red-500">
            Watch Providers
          </h2>
        </div>
        <div className="flex flex-col w-[20%] text-lg px-2">
          <div className="flex flex-col font-bold text-center">
            <select
              onChange={handleChange}
              className="bg-gray-900 px-4 py-2 outline-none text-white"
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
      <div className="rounded p-4 ">
        <div className="flex flex-col justify-between gap-6">
          <div>
            {filterData !== undefined ? (
              <div className="flex flex-col  px-4">
                {filterData?.buy && (
                  <div className=" p-2">
                    <h1 className="ml-6 pb-2 text-2xl font-bold border-b-2">
                      To Buy
                    </h1>
                    <div className="flex pt-4 pb-20">
                      <MovieProvider provider={filterData?.buy} />
                    </div>
                  </div>
                )}
                {filterData?.rent && (
                  <div className=" p-2">
                    <h1 className="ml-6 pb-2 text-2xl font-bold border-b-2">
                      To Rent
                    </h1>
                    <div className="flex pt-4 pb-20">
                      <MovieProvider provider={filterData?.rent} />
                    </div>
                  </div>
                )}

                {filterData?.flatrate && (
                  <div className=" p-2">
                    <h1 className="ml-6 pb-2 text-2xl font-bold border-b-2">
                      Other Provider
                    </h1>
                    <div className="flex pt-4 pb-20">
                      <MovieProvider provider={filterData?.flatrate} />
                    </div>
                  </div>
                )}
                {filterData?.free && (
                  <div className=" p-2">
                    <h1 className="ml-6 pb-2 text-2xl font-bold border-b-2">
                      Free
                    </h1>
                    <div className="flex pt-4 pb-20">
                      <MovieProvider provider={filterData?.free} />
                    </div>
                  </div>
                )}
                {filterData?.ads && (
                  <div className=" p-2">
                    <h1 className="ml-6 pb-2 text-2xl font-bold border-b-2">
                      Watch With Advertisement
                    </h1>
                    <div className="flex pt-4 pb-20">
                      <MovieProvider provider={filterData?.ads} />
                    </div>
                  </div>
                )}
              </div>
            ) : value !== "null" ? (
              <h1 className="text-5xl text-center p-20 border mx-4  ">
                Data not available for selected region
              </h1>
            ) : (
              <h1 className="text-5xl text-center p-20 border mx-4  ">
                Please Select Your Region
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPlatform;
