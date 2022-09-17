import React from "react";
import { Link } from "react-router-dom";
import testData from "../../testData/test_data.js";

const Impact = () => {
    const testSlice = testData.slice(0, 3)
  return (
    <div className="section-gap">
      <div className="container">
        <div className="text-center cmb-50">
          <h3 className="custom-sub-title cmb-10">our impact</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>

        <div className="row">
          {testSlice.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="cart">
                  <img src={item.img} className="img-fluid cart-img" alt="" />
                  <div className="cart-body">
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                  <div className="cart-footer">
                    <Link to="/" className="custom-btn-sm custom-btn-success">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Impact;
