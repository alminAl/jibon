import React from "react";
import "../../Scss/HomePageScss/Hero.scss";

const Hero = () => {
  return (
    <div id="hero-section">
      <div className="hero-section">
        <div className="text-center text-light">
          <div className="container">
            <h1 className="custom-title cmb-10">
              main title text will be going here
            </h1>
            <h3 className="custom-sub-title cmb-10">
              sub title text will be going here
            </h3>
            <button className="custom-btn-lg custom-btn-success cmy-20">
              donate now
            </button>
          </div>
        </div>
      </div>
      <div className="background-img">
        <img
          src="https://www.zindagitrust.org/img/sections/3.jpg"
          className="img-fluid"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Hero;
