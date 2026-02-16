import React from "react";

const Award = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 text-center">
          <img src="media/image/largestBroker.svg" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-12 mt-lg-5">
          <h1 className="fs-4">Largest Stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15%of all retail order
            volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <ul>
                <li>Futures and Options</li>
                <li>Commudity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bond and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/image/pressLogos.png" className="img-fluid mt-3" />
        </div>
      </div>
    </div>
  );
};

export default Award;
