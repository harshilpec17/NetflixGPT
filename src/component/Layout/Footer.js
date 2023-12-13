import React, { useState } from "react";

import { LOGO } from "../../utils/Constants/constants";
import { useSelector } from "react-redux";
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [emailToggle, setEmailToggle] = useState(false);
  const user = useSelector((store) => store.user);
  return (
    <>
      {" "}
      {user && (
        <div className="bg-gray-900 h-40 w-screen shadow-2xl text-white flex absolute ">
          <div className="px-16 py-6 w-1/3 ">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              alt="TMDB Logo"
              className="w-36 pb-4"
            ></img>
            <p className="text-xs">
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </p>
          </div>
          <div className="w-1/3 px-16 py-4 text-center flex flex-col items-center gap-3  ">
            <h1 className="text-xl font-semibold">Contact Me :</h1>
            <div className="flex justify-between max-w-sm w-40">
              <div
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/harshil-s-854570248/"
                  )
                }
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png"
                  alt="Linkedin Logo"
                  className="w-12 bg-white cursor-pointer"
                />
              </div>
              <div
                onClick={() => openInNewTab("https://github.com/harshilpec17")}
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png"
                  alt="GitHub Logo"
                  className="w-12 bg-white cursor-pointer"
                />
              </div>
              <div onClick={() => setEmailToggle(!emailToggle)}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-email-532-433830.png?f=webp&w=512"
                  alt="Email"
                  className="w-12 bg-white cursor-pointer"
                ></img>
              </div>
            </div>
            <h1 className="bg-orange-400 font-semibold text-black px-4">
              {emailToggle ? "harshilsuthar1995@gmail.com" : null}
            </h1>
          </div>
          <div className="w-1/3 px-16 py-6 flex flex-col justify-around items-center">
            <img src={LOGO} alt="Logo" className="w-48 pb-4"></img>

            <p className="text-xs">copyright2024@Harshil</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
