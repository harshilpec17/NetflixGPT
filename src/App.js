import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
