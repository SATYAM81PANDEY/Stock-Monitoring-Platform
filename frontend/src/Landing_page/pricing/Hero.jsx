import React from "react";

const Hero = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="fs-4">Charges</h1>
      <p className="text-muted">List of all charges and taxes</p>
      <div className="row mt-5 g-4">
        <div className="col-lg-4 col-md-6 col-12">
          <img src="media\image\pricing0.svg" className="img-fluid w-50 mb-3" />
          <h1 className="fs-5 mt-3">Free equity delivery</h1>
          <p className="small text-muted mt-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="media/image/intradayTrades.svg" className="img-fluid w-50 mb-3" />
          <h1 className="fs-5 mt-3">Intraday and F&O trades</h1>
          <p className="small text-muted mt-2">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <img src="media/image/pricingEquity.svg" className="img-fluid w-50 mb-3" />
          <h1 className="fs-5 mt-3">Free direct MF</h1>
          <p className="small text-muted mt-2">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
