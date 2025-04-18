import { ArrowDown01, CircleX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getToClient,
  removeFromLs,
  removeLs,
} from "../../lib/LocalStorage/localStorage";

const Cart = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [cart, setCart] = useState([]);
  const loaderData = useLoaderData();
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  function enableScroll() {
    document.body.style.overflow = "";
  }
  const filterAndSet = (lsData) => {
    const fdata = [];
    lsData.map((data) => {
      // console.log(data);
      const filter = loaderData.find((ld) => ld.product_id === data);
      fdata.push(filter);
    });
    setCart(fdata);
  };
  // console.log(cart);
  useEffect(() => {
    const lsData = getToClient();
    filterAndSet(lsData);
  }, []);
  console.log(cart);
  // console.log(cart);
  const handleSort = () => {
    const copy = [...cart];
    const sorting = copy.sort(function (a, b) {
      return a.price - b.price;
    });
    setCart(sorting);
  };
  const proPrice = cart.reduce((acc, pro) => acc + pro.price, 0);
  return (
    <div className="mx-10 md:mx-40 mt-12 mb-28">
      <div className="flex md:flex-row md:gap-0 gap-2 flex-col items-center justify-between">
        <h5 className="font-bold text-2xl">Cart</h5>
        <div className="flex md:flex-row flex-col items-center gap-2 md:gap-6">
          <h5 className="font-bold text-2xl">Total cost: ${proPrice}</h5>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleSort()}
              className="btn btn-outline text-[#9538e2] hover:bg-[#9538e2] hover:text-white rounded-full"
            >
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
        {cart.length > 0 ? (
          cart.map((item) => {
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
                className="flex items-center md:flex-row flex-col justify-between bg-white rounded-2xl p-8 mb-6"
              >
                <div className="flex md:flex-row flex-col gap-8">
                  <img
                    className="md:w-[200px] h-[200px] md:h-[125px] object-cover  rounded-xl"
                    src={product_image}
                    alt=""
                  />
                  <div className="space-y-3 flex-1/2">
                    <h4 className="text-2xl font-semibold">{product_title}</h4>
                    <p className="text-lg opacity-60">{description}</p>
                    <p className="text-xl font-semibold">Price: ${price}</p>
                  </div>
                </div>
                <div>
                  <CircleX
                    onClick={() => {
                      removeFromLs(product_id);
                      filterAndSet(getToClient());
                    }}
                    className="text-red-400 cursor-pointer"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Item added yet</h1>
        )}
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
              Total: ${proPrice}
            </small>
            <button
              onClick={() => {
                setIsTrue(false);
                enableScroll();
                removeLs();
                setCart([]);
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
