import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default root;
