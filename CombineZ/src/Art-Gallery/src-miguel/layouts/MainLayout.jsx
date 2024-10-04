import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../componentes/Pages/Home/NavbarArt';
import Footer from "../componentes/Pages/Home/Footer";
import FooterBottom from "../componentes/Pages/Home/FooterBottom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-44">
        <Outlet />
      </div>

      <Footer />
      <FooterBottom />
    </>
  );
};

export default MainLayout;
