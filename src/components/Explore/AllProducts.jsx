import React, { use } from "react";
import Product from "./Product";

const allGadgets = fetch("/gadget.json").then((res) => res.json());
const AllProducts = () => {
  const gadgets = use(allGadgets);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
      {gadgets.map((gadget) => (
        <Product key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
  );
};

export default AllProducts;
