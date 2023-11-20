import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
