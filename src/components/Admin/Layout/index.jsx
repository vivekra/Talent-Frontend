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
        <div className="container h-[90vh] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
