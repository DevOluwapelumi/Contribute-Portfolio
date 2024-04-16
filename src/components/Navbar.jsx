import React, { useState } from "react";
import "../Navbar.css";
// import "bootstrap/dist/js/bootstrap.js";
const DownloadOptions = ({ href, downloadData, onDownloadClick }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-sm dropdown-toggle"
        type="button"
        id="downloadDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Resume
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark text-white "
        aria-labelledby="downloadDropdown"
      >
        <li className="nav-item">
          <a href={href} className="dropdown-item nav-link">
            Open Online
          </a>
        </li>
        <li className="nav-item">
          <a className="dropdown-item nav-link" onClick={onDownloadClick}>
            Download
          </a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = async () => {
    setIsDownloading(true);

    // Replace this with your actual resume data or download logic
    const resumeData =
      "This is your resume content in text format (replace with your actual resume data)"; // Example data

    const blob = new Blob([resumeData], { type: "application/pdf" }); // Adjust content type if your resume is a different format (e.g., .docx)
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "MyResume.pdf"; // Set your desired filename
    link.click();

    window.URL.revokeObjectURL(url);
    setIsDownloading(false);
  };

  const resumeUrl = "https://example.com/your-resume.pdf"; // Replace with your actual resume URL

  return (
    <div id="Home">
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
            <a
              href="https://github.com/deeminentcoder"
              className="text-black fs-4"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kehinde-olaleye-307229123/"
              className="text-black fs-4"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/DeEminentCoder"
              className="text-black fs-4"
            >
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
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
                    <a href="#" className="nav-link active" aria-current="page">
                      <i className="fa fa-star-o"></i>
                      <span>Home</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#About-me">
                      <i className="fa fa-user-o"></i>
                      <span>About</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#Skills">
                      <i className="fa fa-lightbulb"> </i>
                      <span>Skills</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#Projects">
                      <i className="fa fa-gear fa-spin fa-3x fa-fw p-0"></i>
                      <span className="ps-">Projects</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#Contact">
                      <i className="fa fa-address-book-o"></i>
                      <span>Contact</span>
                    </a>
                  </li>
                </div>
                <div className="col-4 col-sm">
                  <li className="nav-item">
                    <DownloadOptions
                      href={resumeUrl}
                      downloadData={downloadResume} // Pass the download function
                      onDownloadClick={
                        isDownloading ? () => {} : downloadResume
                      } // Disable download click if already downloading
                    />
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5"></div>
    </div>
  );
};

export default Navbar;
