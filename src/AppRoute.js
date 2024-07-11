import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./component/Layout/LandingPage/LandingPage";
import Error from "./component/Layout/Error";
import App from "./App";
import Login from "./component/NavigatorComponents/Login";
import Browse from "./component/NavigatorComponents/Browse";
import GptPage from "./component/GPTPage/GptPage";
import Watch from "./component/MovieInformation/MovieInformationPage";
import CastProfile from "./component/MovieInformation/MovieInformationComponent/CastAndCrew/CastProfile/CastProfile";
import ContactUs from "./component/Layout/ContactUs";

const AppRoute = () => {
  return (
    <Route path="" element={<App />} errorElement={<Error />}>
      <Route path="login" element={<Login />} />
      <Route path="browse" element={<Browse />} />
      <Route path="gptSearch" element={<GptPage />} />
      <Route path="watch" element={<Watch />} />
      <Route path="castInfo" element={<CastProfile />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>
  );
};

export default AppRoute;
