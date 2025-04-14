import React from "react";
import NavBar2 from "../../NavBar2/NavBar2";
import Explore from "../Explore/Explore";

const Home = () => {
  return (
    <div>
      <div className="mx-8 pt-6 pb-8 rounded-4xl bg-[#9538e2] mt-7  min-h-[690px] relative">
        <NavBar2 />
        <div className="px-32 mt-12 text-white flex flex-col items-center justify-center gap-6">
          <h1 className="font-bold text-5xl  text-center">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base text-center">
            Explore the latest gadgets that will take your experience to the
            next level. <br /> From smart devices to the coolest accessories, we
            have it all!
          </p>
          <button className="btn bg-white rounded-full outline-none border-none base-color shadow-none">
            Shop Now
          </button>
        </div>
        <div className="bg-[#ffffff87] w-[70%] mx-auto rounded-3xl p-6 min-h-[500px] absolute translate-y-1/12 z-10 left-60">
          <img
            className="h-[500px] w-full object-cover rounded-3xl"
            src="banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mx-8 mt-[350px]">
        <Explore />
      </div>
    </div>
  );
};

export default Home;
