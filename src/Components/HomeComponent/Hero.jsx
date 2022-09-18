import React from "react";
import "../../Scss/HomePageScss/Hero.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroContent from "../../testData/sliderData.js";

const Hero = () => {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {heroContent.map((item) => {
        const { id, heroTitle, heroSubTitle, image } = item;
        return (
          <div id="hero-section" key={id}>
            <div className="hero-section">
              <div className="text-center text-light">
                <div className="container">
                  <h1 className="custom-title">{heroTitle}</h1>
                  <h3 className="custom-sub-title cmt-10 cmb-10">
                    {heroSubTitle}
                  </h3>
                  <button className="custom-btn-lg custom-btn-success cmy-20">
                    donate now
                  </button>
                </div>
              </div>
            </div>
            <div className="background-img">
              <img src={image} className="img-fluid" alt="img" />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Hero;
