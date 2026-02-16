import React from "react";
import { useNavigate } from "react-router-dom";

const OpenAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-4">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investment, and flat ₹20 intraday and
          F&O trads.
        </p>
        {/* <button
          className="btn btn-primary fs-5 mb-5 d-block mx-auto"
          style={{
              width: "17%",
              minWidth: "120px",
              maxWidth: "200px",
            }}
          onClick={() => navigate("/signup")}
        >
          Signup now
        </button> */}



        <div className="col-lg-3 col-md-6 col-12 mx-auto">
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

export default OpenAccount;
