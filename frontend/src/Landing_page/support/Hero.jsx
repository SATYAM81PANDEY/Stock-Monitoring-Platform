import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid py-4" id="supportHero">
      <div className="p-4 p-md-5" id="supportWrapper" >
        <h4>Support Portal</h4>
        <a href="" className="text-decoration-none">Track Tickets</a>
      </div>
      <div className="row px-3 px-md-5 my-4">
        <div className="col-lg-6 col-12 mb-4">
          <h1 className="fs-5 mb-3">Search for an answer or brouse help topics to create a ticket</h1>
          <input placeholder="Eg. how do I activate F&O" className="form-control mb-3" />

          <div className="mb-3">
          <a href="" className="text-decoration-none">Track account opening</a>
          <a href="" className="text-decoration-none">Track segment activation</a>
          <br />
          <a href="" className="text-decoration-none">Intraday Margins</a>
          <a href="" className="text-decoration-none">Kite user Manual</a>
          </div>
        </div>


        <div className="col-lg-6 col-12">
          <h1 className="fs-5 mb-3">Features</h1>
          <ol className="ps-3">
            <li className="mb-2">
              <a href=""  className="text-decoration-none">Current Tackeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href=""  className="text-decoration-none">latest Intraday leverage - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
