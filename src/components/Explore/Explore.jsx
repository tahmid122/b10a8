import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import Product from "./Product";
import AllProducts from "./AllProducts";
const buttons = [
  "All Products",
  "Laptop",
  "Phones",
  "Accessories",
  "Smart Watches",
  "Macbook",
  "Iphone",
];
const Explore = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="mx-40 pb-24">
      <h1 className="font-bold text-[40px] mb-12 text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex items-start gap-6">
        <div className="flex-1/5 bg-white flex flex-col gap-6 p-6 rounded-2xl border border-slate-200 cat-btns">
          {buttons.map((button, index) => (
            <NavLink
              to={`/${button === "All Products" ? "" : button}`}
              className="btn bg-slate-100 text-black rounded-full outline-none border-none shadow-none hover:bg-[#9538e2] hover:text-white"
              key={index}
            >
              {button}
            </NavLink>
          ))}
        </div>
        {path === "/" ? <AllProducts /> : <Outlet />}
      </div>
    </div>
  );
};

export default Explore;
