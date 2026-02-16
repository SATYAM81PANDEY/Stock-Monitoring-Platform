import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row py-3">
        <h1 className=" text-center fs-3">People</h1>
      </div>
      <div
        className="row py-3 text-muted lh-lg"
        // style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src="media/image/nithinKamath.jpg"
             className="img-fluid rounded-circle w-50"
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-lg-6 col-md-12 small">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <Link to="/" className="text-decoration-none">
              Homepage
            </Link>
            / <Link className="text-decoration-none">TradingQnA</Link> /
            <Link className="text-decoration-none">
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
