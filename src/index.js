import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./component/NavigatorComponents/Login";
import Browse from "./component/NavigatorComponents/Browse";
import Watch from "./component/MovieInformation/MovieInformationPage";
import GptPage from "./component/GPTPage/GptPage";
import { appStore } from "./utils/redux/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />}>
        <Route path="/" element={<Login />}></Route>
        <Route path="browse" element={<Browse />}></Route>
        <Route path="gptSearch" element={<GptPage />}></Route>
        <Route path="watch" element={<Watch />}></Route>
      </Route>
    </>
  )
);
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
