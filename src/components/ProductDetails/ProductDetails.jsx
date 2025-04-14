import React from "react";
import Banner from "../Banner/Banner";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductDetails = () => {
  return (
    <div>
      <Banner
        header={"Product Details"}
        para={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <div className="p-8 rounded-3xl bg-white -translate-y-2/6 gap-8 flex w-3/4 mx-auto">
        <div className="w-[35%]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/banner.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="mb-5 space-y-2">
            <h3 className="font-semibold text-[28px]">
              Samsung Galaxy S23 Ultra
            </h3>
            <p className="font-semibold text-xl">Price:$ 999.99</p>
            <button className=" font-medium text-sm rounded-full py-1.5 px-3.5 bg-[#2f9c082b] text-[#309C08]">
              In Stock
            </button>
          </div>
          <div className="space-y-2">
            <h5 className="text-lg font-bold ">Specification:</h5>
            <ol className="list-decimal ml-5 mb-5 space-y-1">
              <li className="text-sm opacity-60">Intel i7 11th Gen</li>
              <li className="text-sm opacity-60">16GB RAM</li>
              <li className="text-sm opacity-60">512GB SSD</li>
              <li className="text-sm opacity-60">Touchscreen</li>
            </ol>
            <div>
              <h4 className="flex items-center text-lg font-bold gap-1.5">
                Rating <Star size={18} />
              </h4>
              <div className="flex gap-1 items-center">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <Star size={18} className="text-yellow-400 " />
                <span className="bg-slate-200 text-xs py-1 px-2 rounded-full">
                  4.8
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button className="btn  rounded-full text-white bg-[#9538e2] flex items-center justify-center ">
                Add To Cart <ShoppingCart />
              </button>
              <button className="w-10 h-10 border border-slate-300 flex items-center justify-center rounded-full cursor-pointer">
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
