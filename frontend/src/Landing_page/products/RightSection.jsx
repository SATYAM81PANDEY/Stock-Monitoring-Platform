import React from "react";

const RightSection = ({
  imageURL,
  ProductName,
  ProductDescription,
  tryDemo,
  learnMore,
}) => {
  return (

    <div className="container my-5">
      <div className="row align-items-center">
        {/* TEXT */}
        <div className="col-lg-6 col-md-12 order-lg-1 order-2 px-lg-5">
          <h1 className="fs-5 mb-3">{ProductName}</h1>

          <p className="text-muted small mb-4">{ProductDescription}</p>

          <div className="mb-4">
            <a href={tryDemo} className="me-4 text-decoration-none">
              Kite Connect
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="col-lg-6 col-md-12 order-lg-2 order-1 text-center mb-4 mb-lg-0">
          <img
            src={imageURL}
            className="img-fluid w-75"
            alt={ProductName}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
