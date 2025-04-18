import React, { use, useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router";
const allGadgets = fetch("gadget.json").then((res) => res.json());

const AllProducts2 = () => {
  const gadgets = use(allGadgets);
  const [catGadgets, setCatGadgets] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const newGadgets = gadgets.filter((gadget) => gadget.category === category);
    setCatGadgets(newGadgets);
  }, [category]);
  console.log(catGadgets);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
      {catGadgets &&
        catGadgets.map((gadget) => (
          <Product key={gadget.product_id} gadget={gadget} />
        ))}
    </div>
  );
};

export default AllProducts2;
