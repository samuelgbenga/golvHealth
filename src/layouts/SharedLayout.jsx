import React from "react";
import Navbar from "../components/sections/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";

export const SharedLayout = () => {
  return (
    <div className="relative">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};
