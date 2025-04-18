import React from "react";
import Banner from "../Banner/Banner";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const chartData = [
  {
    name: "Dell",
    price: 100,
    total: 100,
  },
  {
    name: "Lenovo",
    price: 85,
    total: 85,
  },
  {
    name: "Macbook",
    price: 93,
    total: 93,
  },
  {
    name: "HP",
    price: 90,
    total: 90,
  },
  {
    name: "Asus",
    price: 50,
    total: 50,
  },
  {
    name: "Dell2",
    price: 80,
    total: 80,
  },
  {
    name: "Lenovo2",
    price: 55,
    total: 55,
  },
  {
    name: "Macbook2",
    price: 63,
    total: 63,
  },
  {
    name: "HP2",
    price: 30,
    total: 30,
  },
  {
    name: "Asus2",
    price: 60,
    total: 60,
  },
];
const Statistics = () => {
  return (
    <div>
      <Banner
        header="Statistics"
        para="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        isTrue2={true}
      />
      <div className="mx-5  md:mx-40 mt-12 mb-28">
        <div>
          <h5 className="font-bold text-2xl">Statistics</h5>
        </div>
        <div className="mt-8 w-full bg-white rounded-2xl p-5 md:p-8">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={chartData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="total"
                fill="#9538e282"
                stroke="#9538e2"
              />
              <Bar dataKey="price" barSize={30} fill="#9538e2" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
