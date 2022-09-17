import React from "react";
import "../../Scss/HomePageScss/Hero.scss";

const Hero = () => {
  return (
    <div id="hero-section">
      <div className="container">
        <div className="hero-section row justify-content-between align-items-center">
          <div className="col-md-7">
            <h1 className="custom-title cmb-10">main title text</h1>
            <h3 className="custom-sub-title cmb-10">
              sub title text will be going here
            </h3>
            <button className="custom-btn-lg custom-btn-success cmy-20">
              donate now
            </button>
          </div>
          <div className="col-md-5">
            <img
              src="https://i.ibb.co/jV4VWJd/slider-img.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
