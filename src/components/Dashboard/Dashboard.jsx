import React from "react";
import { Outlet } from "react-router";
import Banner from "../Banner/Banner";

const Dashboard = () => {
  return (
    <div>
      <Banner
        header="Dashboard"
        para="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        isTrue={true}
      />
      <Outlet />
    </div>
  );
};

export default Dashboard;
