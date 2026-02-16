import React from "react";

const Stats = () => {
  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 ps-lg-5 mb-5 mb-lg-0">
          <h1 className="fs-3 mb-5">Trust with confidence</h1>
          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crores
            worth of equity investements
          </p>
          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gimification" or annoying push notifications.
            High quality appa that you use at your pace, the way you like.
          </p>
          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startup offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With initiatives like nudge and kill switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 text-center">
          <img src="media/image/ecosystem.png" className="img-fluid w-75 mb-4" />
          <div className="d-flex justify-content-center gap-4">
            <a className="mx-5 text-decoration-none" href="#">
              Explore our products
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="mx-5 text-decoration-none" href="#">
              Try kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
