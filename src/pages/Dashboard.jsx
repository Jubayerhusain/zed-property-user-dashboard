import React from "react";
import PopulerProperty from "../components/dashboard/PopulerProperty";
import RightAside from "../components/dashboard/RightAside";

const Dashboard = () => {
  return (
    <div>
      <header className="p-5 bg-white rounded-xl shadow">
        <h1>Dashboard</h1>
      </header>

      <main className="flex flex-col sm:flex-row justify-between sm:h-screen mt-8 gap-8">
        <div className="w-full sm:w-8/12  rounded-2xl">
          <PopulerProperty />
        </div>
        <div className="w-full sm:w-4/12 rounded-2xl">
          <RightAside />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
