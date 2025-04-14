import React from "react";
import { Link } from "react-router";
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
  return (
    <div className="mx-40 pb-24">
      <h1 className="font-bold text-[40px] mb-12 text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex items-start gap-6">
        <div className="flex-1/5 bg-white flex flex-col gap-6 p-6 rounded-2xl border border-slate-200">
          {buttons.map((button, index) => (
            <button
              className="btn bg-slate-100 text-black rounded-full outline-none border-none shadow-none hover:bg-[#9538e2] hover:text-white"
              key={index}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-sm p-5 min-h-[300px]">
            <img
              className="rounded-xl h-[180px] object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />

            <div className="card-body p-0 mt-6">
              <h2 className="font-semibold text-2xl">Dell XPS 13</h2>
              <p className="text-xl font-medium opacity-60">Price: 99.99k</p>
              <div className="card-actions">
                <Link to={"product-details/1"}>
                  <button className="btn btn-outline rounded-full text-[#9538e2] hover:bg-[#9538e2] hover:text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
