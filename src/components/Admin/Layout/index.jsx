import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="d-flex w-full flex-row sticky">
        <SideBar />
        <div className="h-[90vh] overflow-y-auto bg-gray-100 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
