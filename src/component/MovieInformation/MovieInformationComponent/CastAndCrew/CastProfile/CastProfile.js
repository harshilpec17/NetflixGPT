import React, { useEffect } from "react";

import CastProfileInfo from "./CastProfileInfo/CastProfileInfo";
import CastProfileMovieCard from "./CastProfileInfo/CastProfileMovieCard";
import { useDispatch, useSelector } from "react-redux";
import { API_TOKEN } from "../../../../../utils/Constants/constants";
import {
  addCastProfile,
  addCastWork,
} from "../../../../../utils/redux/castInfoSlice";
import { useNavigate } from "react-router-dom";

const CastProfile = () => {
  const navigate = useNavigate();
  const id = useSelector((store) => store.castInfo.castId);
  const dispatch = useDispatch();
  const castProfileData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/person/" + id + "?language=en-US",
      API_TOKEN
    );

    if (data.status === 404) {
      navigate("browse");
    }

    const json = await data.json();
    const profileData = await json;
    dispatch(addCastProfile(profileData));
  };

  const castProfileWork = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/person/" +
        id +
        "/combined_credits?language=en-US",
      API_TOKEN
    );
    if (data.status === 404) {
      navigate("browse");
    }
    const json = await data.json();
    const profileWork = json;
    dispatch(addCastWork(profileWork));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    castProfileData();
    castProfileWork();
  }, []);

  return (
    <>
      <div className="bg-[#1D2127] md:pt-3 pt-12 pb-10 ">
        <CastProfileInfo />
        <CastProfileMovieCard />
      </div>
    </>
  );
};

export default CastProfile;
