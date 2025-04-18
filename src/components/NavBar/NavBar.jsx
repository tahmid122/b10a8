import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="px-10 md:px-40 py-7 flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between bg-white">
      <div>
        <h2 className="text-xl font-bold">Gadget Heaven</h2>
      </div>
      <ul className="flex gap-12 ">
        <li>
          <NavLink className="text-base font-medium opacity-70" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium opacity-70"
            to={"/statistics"}
          >
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium opacity-70"
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-4 items-center carts">
        <NavLink
          className="w-10 h-10 border border-slate-300 flex items-center justify-center rounded-full"
          to={"/dashboard/cart"}
        >
          <ShoppingCart />
        </NavLink>
        <NavLink
          className="w-10 h-10 border border-slate-300 flex items-center justify-center rounded-full"
          to={"/dashboard/wishlist"}
        >
          <Heart />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
