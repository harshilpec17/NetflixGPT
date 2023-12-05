import React, { useEffect } from "react";

import CastProfileInfo from "./CastProfileInfo/CastProfileInfo";
import CastProfileMovieCard from "./CastProfileInfo/CastProfileMovieCard";
import { useSelector } from "react-redux";

const CastProfile = () => {
  const castProfile = useSelector((store) => store?.castInfo?.castProfile);

  const workProfile = useSelector((store) => store.castInfo.castWork);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (castProfile === null) return;
  return (
    <>
      <div className="bg-[#1D2127]">
        {castProfile !== null && <CastProfileInfo castProfile={castProfile} />}
        {workProfile.cast.length > 0 && (
          <CastProfileMovieCard workProfile={workProfile} />
        )}
      </div>
    </>
  );
};

export default CastProfile;
