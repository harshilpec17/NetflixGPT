import React from "react";
import Login from "../../component/Login";
import Browse from "../../component/Browse";
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
