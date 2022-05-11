import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Home;
