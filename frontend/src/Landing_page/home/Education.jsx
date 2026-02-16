import React from "react";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 mb-4 text-lg-start text-center">
          <img src="media/image/education.svg" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 className="fs-4 mb-4">Free and open market education</h1>
          <p>
            Versity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="mt-2 d-inline-block text-decoration-none" href="#">
            Versity
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="mt-2 d-inline-block text-decoration-none" href="#">
            TradingQ&A
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
