import React from "react";
import Footer from "../ReuseComponent/Footer.jsx";
import Navigation from "../ReuseComponent/Navigation.jsx";
import Donation from "./Donation.jsx";
import Hero from "./Hero.jsx";
import Impact from "./Impact.jsx";
import Work from "./Work.jsx";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Work />
      <Donation />
      <Impact />
      <Footer />
    </>
  );
};

export default Home;
