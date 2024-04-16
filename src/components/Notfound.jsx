import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const NotFound = () => {
  return (
    <div className="not-found-container p-5 d-grid align-content-center justify-content-center bg-dark ">
        <div>
          <img src="404.png" alt="404 IMG" width={400} />
        </div>
        <p className="text-center  text-white ">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-center text-white-50 ">Let's get you back on track.</p>
        <Link to="/" className="btn btn-lg btn-danger">
          Go to Home
        </Link>
        <Navbar></Navbar>
    </div>
  );
};

export default NotFound;
