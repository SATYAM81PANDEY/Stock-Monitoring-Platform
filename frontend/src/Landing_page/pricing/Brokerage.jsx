import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row py-5 mt-5 text-center border-top">
        <div className="col-lg-8 col-md-12 mb-4 text-start">
          <a href="" className="text-decoration-none">
            <h4 className="fs-6">Brokerage calculator</h4>
          </a>
          <ul className="lh-lg small text-muted mt-3">
            <li>
              {" "}
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contact notes will be sent via e-mail.</li>
            <li>
              Physical copy of contact notes, if required, cell be charged ₹20
              per contact note. courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              {" "}
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              {" "}
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 text-start">
          <a href="#" className="text-decoration-none">
            <h4 className="fs-6">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
