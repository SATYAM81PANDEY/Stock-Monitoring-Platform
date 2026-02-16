import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img
            src="media/image/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4"
          />
        </div>
        <div className="col-12">
          <h1 className="mt-4 fs-4">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
        </div>
 
        <div className="col-lg-3 col-md-6 col-12 mx-auto text-center">
          <button
            className="btn btn-primary fs-5 mb-4 w-lg-25 w-md-50 w-75"
            onClick={() => navigate("/signup")}
          >
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
