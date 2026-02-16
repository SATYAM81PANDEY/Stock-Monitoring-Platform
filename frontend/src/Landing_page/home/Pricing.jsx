import React from "react";

const Pricing = () => {
  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12 mb-4">
          <h1 className="mb-3 fs-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="mt-2 d-inline-block text-decoration-none" href="#" >
            See pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        {/* <div className="col-2"></div> */}
        <div className="col-lg-7 offset-lg-1 col-md-12 mb-4">
          <div className="row text-center">
            <div className="col-lg-6 col-md-12 p-3 border">
              <h1 className="mb-3 fs-2">₹0</h1>
              <p>
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col-lg-6 col-md-12 p-3 border">
              <h1 className="mb-3 fs-2">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
