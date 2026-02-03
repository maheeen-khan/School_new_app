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
      {/* Main content area */}
      <div
        style={{
          // marginLeft: "250px",  // match sidebar width
          padding: "20px",
          overflowY: "auto",
          flex: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
