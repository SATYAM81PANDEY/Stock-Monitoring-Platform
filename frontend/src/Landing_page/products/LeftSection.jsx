import React from "react";

const LeftSection = ({
  imageURL,
  ProductName,
  ProductDescription,
  tryDemo,
  learnMore,
  playStore,
  appStore,
  imageClass,
}) => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* IMAGE */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src={imageURL}
            className="img-fluid w-75"
            alt={ProductName}
          />
        </div>

        {/* TEXT */}
        <div className="col-lg-6 col-md-12 px-lg-5">
          <h1 className="fs-5 mb-3">{ProductName}</h1>

          <p className="text-muted small mb-4">{ProductDescription}</p>

          <div className="mb-4">
            <a href={tryDemo} className="me-4 text-decoration-none">
              Try Demo
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>

          <div>
            <a href={playStore}>
              <img
                src="media/image/googlePlayBadge.svg"
                className="me-3"
                style={{ width: "135px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/image/appstoreBadge.svg"
                style={{ width: "120px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
