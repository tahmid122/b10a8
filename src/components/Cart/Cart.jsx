import { ArrowDown01, CircleX } from "lucide-react";
import React, { useState } from "react";

const Cart = () => {
  const [isTrue, setIsTrue] = useState(false);
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  function enableScroll() {
    document.body.style.overflow = "";
  }
  return (
    <div className="mx-40 mt-12 mb-28">
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-2xl">Cart</h5>
        <div className="flex items-center gap-6">
          <h5 className="font-bold text-2xl">Total cost: 999.99</h5>
          <div className="flex items-center gap-4">
            <button className="btn btn-outline text-[#9538e2] hover:bg-[#9538e2] hover:text-white rounded-full">
              Sort by Price <ArrowDown01 />
            </button>
            <button
              onClick={() => {
                setIsTrue(true);
                disableScroll();
              }}
              className="btn  rounded-full text-white bg-[#9538e2]"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between bg-white rounded-2xl p-8 mb-6">
          <div className="flex gap-8">
            <img
              className="w-[200px] h-[125px] object-cover  rounded-xl"
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
            </div>
          </div>
          <div>
            <CircleX className="text-red-400 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between bg-white rounded-2xl p-8 mb-6">
          <div className="flex gap-8">
            <img
              className="w-[200px] h-[125px] object-cover  rounded-xl"
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
            </div>
          </div>
          <div>
            <CircleX className="text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>
      {isTrue ? (
        <div className="w-full h-[100vh] bg-[#3a3232a7] fixed left-0 top-0 z-10 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-2">
            <img src="/Group.png" alt="" />
            <h1 className="font-bold text-2xl">Payment Successfull</h1>
            <small className="text-base opacity-60 font-medium">
              Thanks for purchasing.
            </small>
            <small className="text-base opacity-60 font-medium">
              {" "}
              Total: $2449.96
            </small>
            <button
              onClick={() => {
                setIsTrue(false);
                enableScroll();
              }}
              className="text-base font-semibold btn btn-soft rounded-full w-full outline-none border-none mt-4"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
