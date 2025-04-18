import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavBar2 = () => {
  return (
    <nav className="px-10 md:px-40 bg-[#9538e2] flex flex-col md:flex-row items-center justify-between text-white navbar2 gap-2">
      <div>
        <h2 className="text-xl font-bold ">Gadget Heaven</h2>
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

export default NavBar2;
