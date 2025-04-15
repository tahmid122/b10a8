import React from "react";
import { Link } from "react-router";

const Product2 = () => {
  return (
    <div className="card bg-base-100 shadow-sm p-5 min-h-[300px]">
      <img className="rounded-xl h-[180px] object-cover" src="" alt="Shoes" />

      <div className="card-body p-0 mt-6">
        <h2 className="font-semibold text-2xl">s</h2>
        <p className="text-xl font-medium opacity-60">Price: $</p>
        <div className="card-actions">
          <Link to={`/product-details/`}>
            <button className="btn btn-outline rounded-full text-[#9538e2] hover:bg-[#9538e2] hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product2;
