import { Route, Routes } from "react-router-dom";
import HomePage from "./componentes/Pages/Home/HomePage";
import MainLayout from "./layouts/MainLayout";
import Contact from "./componentes/Pages/Contact";
import RentingArt from "./componentes/RentingArt";
import Cart from "./componentes/Pages/Cart";
import Account from "./componentes/Account";
import Abstract from "./componentes/Pages/Abstract";
import Products from "./componentes/Products";
import Collections from "./componentes/Collections";
import Blogs from "./componentes/Blogs";
import Bio from "./componentes/Bio";
import GicleePrints from "./componentes/GicleePrints";
import OriginalPainting from "./componentes/OriginalPainting";
import OriginalArt from "./componentes/OriginalArt";
import Services from "./componentes/Pages/Home/Services";
import AddToCard from "./componentes/AddToCard";
import ArtServices from "./componentes/ArtServices";
import ArtConsultation from "./componentes/Pages/ArtConsultation";
import WholsalePrints from "./componentes/Pages/WholsalePrints";
import PrintCanvas from "./componentes/Pages/Home/PrintCanvas";
import AddProducts from "./componentes/Pages/AddProducts";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();

    const allImages = document.querySelectorAll('img');
    allImages.forEach((img) => {
      img.setAttribute('data-aos', 'fade-down');
      img.setAttribute('data-aos-anchor-placement', 'top-bottom');
      img.setAttribute('data-aos-duration', '500');
    });
  }, []);

 


  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artservices" element={<ArtServices />} />
          <Route path="/rentart" element={<RentingArt />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/product" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/giclee" element={<GicleePrints />} />
          <Route path="/orignalpainting" element={<OriginalPainting />} />
          <Route path="/orignalart" element={<OriginalArt />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artconsultation" element={<ArtConsultation />} />
          <Route path="/wholsaleprints" element={<WholsalePrints />} />
          <Route path="/printcanvas" element={<PrintCanvas />} />
          <Route path="/addtocart" element={<AddToCard />} />
          <Route path="/addprod" element={<AddProducts />} />

        </Route>
      </Routes>
    
  );
}

export default App;
