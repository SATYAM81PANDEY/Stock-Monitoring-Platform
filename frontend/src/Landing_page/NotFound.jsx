import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1>404 Not Found</h1>
        <p>Sorry, We couldn’t find the page you were looking for.</p>
        <Link className="text-decoration-none" to="/">
          Visit Zerodha's home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
