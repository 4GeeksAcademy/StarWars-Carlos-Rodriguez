import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { CardPlanet } from "./component/cardPlanet";
import SinglePerson from "./views/singlePerson";
import SinglePlanet from "./views/singlePlanet";
import SingleVehicle from "./views/singleVehicle";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/singlePerson/:id" element={<SinglePerson />} />
            <Route path="/singlePlanet/:id" element={<SinglePlanet />} />
            <Route path="/singleVehicle/:id" element={<SingleVehicle />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
