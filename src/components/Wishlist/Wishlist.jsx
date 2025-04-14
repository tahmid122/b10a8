import { ArrowDown01, CircleX } from "lucide-react";
import React from "react";

const Wishlist = () => {
  return (
    <div className="mx-40 mt-12 mb-28">
      <div>
        <h5 className="font-bold text-2xl">Wishlist</h5>
      </div>
      <div className="mt-8">
        <div className="flex items-start justify-between bg-white rounded-2xl p-8 mb-6">
          <div className="flex gap-8">
            <img
              className="w-[200px] object-cover  rounded-xl"
              src="/banner.jpg"
              alt=""
            />
            <div className="space-y-3 flex-1/2">
              <h4 className="text-2xl font-semibold">
                Samsung Galaxy S23 Ultra
              </h4>
              <p className="text-lg opacity-60">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <p className="text-xl font-semibold">Price: $999.99</p>
              <button className="btn  rounded-full text-white bg-[#9538e2]">
                Add to Cart
              </button>
            </div>
          </div>
          <div>
            <CircleX className="text-red-400 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-start justify-between bg-white rounded-2xl p-8 mb-6">
          <div className="flex gap-8">
            <img
              className="w-[200px] object-cover  rounded-xl"
              src="/banner.jpg"
              alt=""
            />
            <div className="space-y-3 flex-1/2">
              <h4 className="text-2xl font-semibold">
                Samsung Galaxy S23 Ultra
              </h4>
              <p className="text-lg opacity-60">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <p className="text-xl font-semibold">Price: $999.99</p>
              <button className="btn  rounded-full text-white bg-[#9538e2]">
                Add to Cart
              </button>
            </div>
          </div>
          <div>
            <CircleX className="text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
