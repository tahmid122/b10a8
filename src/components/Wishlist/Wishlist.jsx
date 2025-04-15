import { ArrowDown01, CircleX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getToClient2, removeFromLs2 } from "../../lib/Wishlist/wishlist";
import { setLocalStorage } from "../../lib/LocalStorage/localStorage";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const loaderData = useLoaderData();
  const filterAndSet = (lsData) => {
    const fdata = [];
    lsData.map((data) => {
      // console.log(data);
      const filter = loaderData.find((ld) => ld.product_id === data);
      fdata.push(filter);
    });
    setWishlist(fdata);
  };
  // console.log(wishlist);
  useEffect(() => {
    const lsData = getToClient2();
    filterAndSet(lsData);
  }, []);
  return (
    <div className="mx-40 mt-12 mb-28">
      <div>
        <h5 className="font-bold text-2xl">Wishlist</h5>
      </div>
      <div className="mt-8">
        {wishlist.length > 0 ? (
          wishlist.map((item) => {
            const {
              product_id,
              product_image,
              product_title,
              price,
              description,
            } = item;
            return (
              <div
                key={product_id}
                className="flex items-start justify-between bg-white rounded-2xl p-8 mb-6"
              >
                <div className="flex gap-8">
                  <img
                    className="w-[200px] object-cover  rounded-xl"
                    src={product_image}
                    alt=""
                  />
                  <div className="space-y-3 flex-1/2">
                    <h4 className="text-2xl font-semibold">{product_title}</h4>
                    <p className="text-lg opacity-60">{description}</p>
                    <p className="text-xl font-semibold">Price: ${price}</p>
                    <button
                      onClick={() => {
                        setLocalStorage(product_id);
                      }}
                      className="btn  rounded-full text-white bg-[#9538e2]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div>
                  <CircleX
                    onClick={() => {
                      removeFromLs2(product_id);
                      filterAndSet(getToClient2());
                    }}
                    className="text-red-400 cursor-pointer"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h1>Item not added yet</h1>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
