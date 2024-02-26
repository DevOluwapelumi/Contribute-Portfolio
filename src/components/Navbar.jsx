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
            <div className="d-flex gap-4">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png" alt="github" width={20}/>
                <img src="https://cdn-icons-png.freepik.com/256/1384/1384014.png?uid=R27532602&ga=GA1.1.1710244603.1708425592&" alt="linkedin" width={20}/>
                <img src="https://cdn-icons-png.freepik.com/256/5969/5969020.png?uid=R27532602&ga=GA1.1.1710244603.1708425592&" alt="X" width={20}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
