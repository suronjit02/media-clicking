import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Pages/Home/Home";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-275px)] ">
        <Outlet />
      </div>

      <Footer></Footer>
    </>
  );
};

export default Layout;
