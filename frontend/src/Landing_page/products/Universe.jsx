import React from "react";
import { useNavigate } from "react-router-dom";

const Universe = () => {
  const navigate = useNavigate();



const items = [
    {
      img: "media/image/zerodhaFundhouse.png",
      text: "Simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "media/image/streakLogo.png",
      text: "Create and backtest trading strategies without coding.",
    },
    {
      img: "media/image/sensibullLogo.svg",
      text: "Analyze options strategies with advanced data and insights.",
    },
    {
      img: "media/image/smallcaseLogo.png",
      text: "Invest in diversified thematic baskets of stocks and ETFs.",
    },
    {
      img: "media/image/tijori.svg",
      text: "Deep research on stocks, sectors, and supply chains.",
    },
    {
      img: "media/image/dittoLogo.png",
      text: "Personalized advice on life and health insurance.",
    },
  ];



  return (
    // <div className="container mt-5">
    //   <div className="row text-center justify-content-center">
    //     {/* Heading */}
    //     <h1 className="fs-4 text-muted mb-2">The Zerodha Universe</h1>
    //     <p className="small text-muted mb-5">
    //       Extend your trading and investment experience even further with our
    //       partner platforms
    //     </p>

    //     {/* Column 1 */}
    //     <div className="col-md-4 col-12 mb-4">
    //       <img
    //         src="media/image/zerodhaFundhouse.png"
    //         className="img-fluid mb-2 w-50"
    //       />
    //       <p className="small text-muted">
    //         Simple and transparent index funds to help you save for your goals.
    //       </p>

    //       <img
    //         src="media/image/streakLogo.png"
    //         className="img-fluid mb-2 w-50 mt-4"
    //       />
    //       <p className="small text-muted">
    //         Create and backtest trading strategies without coding.
    //       </p>
    //     </div>

    //     {/* Column 2 */}
    //     <div className="col-md-4 col-12 mb-4">
    //       <img
    //         src="media/image/sensibullLogo.svg"
    //         className="img-fluid mb-2 w-50"
    //       />
    //       <p className="small text-muted">
    //         Analyze options strategies with advanced data and insights.
    //       </p>

    //       <img
    //         src="media/image/smallcaseLogo.png"
    //         className="img-fluid mb-2 w-50 mt-4"
    //       />
    //       <p className="small text-muted">
    //         Invest in diversified thematic baskets of stocks and ETFs.
    //       </p>
    //     </div>

    //     {/* Column 3 */}
    //     <div className="col-md-4 col-12 mb-4">
    //       <img
    //         src="media/image/tijori.svg"
    //         className="img-fluid mb-2 w-50"
    //       />
    //       <p className="small text-muted">
    //         Deep research on stocks, sectors, and supply chains.
    //       </p>

    //       <img
    //         src="media/image/dittoLogo.png"
    //         className="img-fluid mb-2 w-50 mt-4"
    //       />
    //       <p className="small text-muted">
    //         Personalized advice on life and health insurance.
    //       </p>
    //     </div>

    //     {/* Button */}
    //     <div className="col-12 mt-4">
    //       <button
    //         className="btn btn-primary px-4 py-2"
    //         onClick={() => navigate("/signup")}
    //       >
    //         Signup Now
    //       </button>
    //     </div>
    //   </div>
    // </div>






 <div className="container my-5">
      <div className="text-center mb-5 px-2">
        <h1 className="fs-4 text-muted">The Zerodha Universe</h1>
        <p className="small text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row justify-content-center g-4">
        {items.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center text-center w-100" style={{ maxWidth: "220px" }}>
              <img
                src={item.img}
                alt=""
                className="img-fluid mb-3"
                style={{ maxHeight: "50px", objectFit: "contain" }}
              />
              <p className="small text-muted mb-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button
          className="btn btn-primary px-4 py-2"
          onClick={() => navigate("/signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
