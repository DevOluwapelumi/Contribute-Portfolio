import React from "react";
import "../Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ps-lg-5 px-3 pe-lg-0 py-lg-3 shadow-sm fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div id="logo">
              <span>D</span>
              <span>e</span>
              <span>E</span>
              <span>m</span>
              <span>i</span>
              <span>n</span>
              <span>e</span>
              <span>n</span>
              <span>t</span>
              <span>C</span>
              <span>o</span>
              <span>d</span>
              <span>e</span>
              <span>r</span>
            </div>
          </a>
          <div className="d-flex gap-4 px-2 mx-lg-5 social shadow rounded">
            <a href="https://github.com/deeminentcoder" className="text-black fs-4">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kehinde-olaleye-307229123/"
              className="text-black fs-4"
            >
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/DeEminentCoder" className="text-black fs-4">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-sm"></span>
          </button>

          <div
            className="collapse navbar-collapse container-fluid ms-lg-5 ps-lg-5 justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me- mb- mb-lg-0 ms-lg-5 pe-lg-5 nav-ul">
              <div className="row">
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <i class="fa fa-star-o"></i>
                      <span>Home</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-user-o"></i>
                      <span>About</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="fa fa-lightbulb"> </i>
                      <span>Skills</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-gear fa-spin fa-3x fa-fw p-0"></i>
                      <span className="ps-1">Projects</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="fa fa-address-book-o"></i>
                      <span>Contact</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="fa fa-file-o"></i>
                      <span>Resume</span>
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default Navbar;
