import React from "react";
import Navbar from "../componenets/Navbar/Navbar";
import Sidebar from "../componenets/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      
      {/* Navbar on top */}
      <Navbar />
      <Sidebar/>
      
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
