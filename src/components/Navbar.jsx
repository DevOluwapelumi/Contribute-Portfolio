import React from "react";
import "../Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span id="logo">
              <span>D</span>
              <span>e</span>
              <span>E</span>
              <span>M</span>
              <span>I</span>
              <span>N</span>
              <span>E</span>
              <span>N</span>
              <span>T</span>
              <span>C</span>
              <span>O</span>
              <span>D</span>
              <span>E</span>
              <span>R</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>
            </ul>
            <div>
                <img src="" alt="github" />
                <img src="" alt="linkedin" />
                <img src="" alt="X" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
