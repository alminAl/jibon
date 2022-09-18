import React from "react";
import Slider from "react-slick";
import testData from "../../testData/test_data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Scss/HomePageScss/Success.scss";
import { Link } from "react-router-dom";

const Success = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    /* responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ], */
  };
  return (
    <>
      <div id="success-section" className="section-gap">
        <div className="container">
          <div className="text-center cmb-50">
            <h3 className="custom-sub-title cmb-10">our success story</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          </div>

          <div className="row">
            <Slider {...settings}>
              {testData.map((item) => {
                return (
                  <div className="col cmy-40">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-5 cart-content">
                        <h4 className="cart-title">{item.title}</h4>
                        <p>{item.detail}</p>
                        <Link to="/">
                          <button className="custom-btn-sm custom-btn-light">
                            read story
                          </button>
                        </Link>
                      </div>
                      <div className="col-3 cart-image p-0">
                        <img src={item.img} className="img-fluid" alt="img" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
