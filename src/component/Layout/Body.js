import React from "react";
import Login from "../NavigatorComponents/Login";
import Browse from "../NavigatorComponents/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  // routing configuration for the different route at the root level
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
