import React from "react";
import { NavLink } from "react-router";

const Banner = ({ header, para, isTrue = false }) => {
  return (
    <div className={`base-bg p-8 ${isTrue ? "" : "min-h-[345px]"}`}>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-[32px] text-white">{header}</h3>
        <p className="text-base text-white text-center mt-4 w-1/2">{para}</p>
        {isTrue && (
          <div className="flex items-center gap-6 mt-6 banner-button">
            <NavLink
              to={"/dashboard/cart"}
              className="btn btn-outline rounded-full text-white hover:bg-white hover:text-black outline-none shadow-none px-10"
            >
              Cart
            </NavLink>
            <NavLink
              to={"/dashboard/wishlist"}
              className="btn btn-outline rounded-full text-white hover:bg-white hover:text-black outline-none shadow-none px-10"
            >
              Wishlist
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
