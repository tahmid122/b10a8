import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
const Root = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? "" : <NavBar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
