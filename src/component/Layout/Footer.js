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
        <div className="bg-gray-900 md:h-40 w-screen shadow-2xl text-white flex flex-col md:flex-row absolute ">
          <div className="md:px-16 px-4 pt-3 md:pt-0 my-1 flex flex-row gap-4 items-start md:flex-col md:my-6 md:w-1/3 ">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              alt="TMDB Logo"
              className="md:w-36 w-20 pb-2"
            ></img>
            <p className="text-xs">
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </p>
          </div>
          <div className="md:w-1/3 md:px-16 bg-zinc-600 md:bg-gray-900 px-4 md:py-4 py-1 h-28 text-center md:flex-nowrap flex flex-col md:gap-3 gap-1  items-center  ">
            <h1 className="text-lg md:text-xl font-semibold">Contact Me :</h1>
            <div className="flex justify-between md:gap-3 max-w-sm mb-2 md:pb-0 w-28 md:w-40">
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
                  className="md:w-20 w-8 bg-white cursor-pointer"
                />
              </div>
              <div
                onClick={() => openInNewTab("https://github.com/harshilpec17")}
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png"
                  alt="GitHub Logo"
                  className="md:w-20 w-8 bg-white cursor-pointer"
                />
              </div>
              <div onClick={() => setEmailToggle(!emailToggle)}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-email-532-433830.png?f=webp&w=512"
                  alt="Email"
                  className="md:w-20 w-8 bg-white cursor-pointer"
                ></img>
              </div>
            </div>

            <span className="bg-orange-400 text-center font-semibold text-black px-4">
              {emailToggle ? "harshilsuthar1995@gmail.com" : null}
            </span>
          </div>
          <div className="md:w-1/3 md:px-16 px-1 flex flex-wrap md:flex-col flex-row justify-between md:justify-around items-center md:items-end">
            <img src={LOGO} alt="Logo" className="md:w-48 w-32 "></img>

            <p className="text-xs pr-6 md:pb-6 md:pr-8">
              copyright2024@Harshil
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
