import React from "react";
import "../AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section className="d-grid justify-content-center align-items-center position-relative container-fluid p-5 bg- about-me-container">
        <h1 className="hidden display-3 text-center">About Me</h1>
        <div className="hidden row d-flex justify-content-center align-content-center p-4 m-lg-5 rounded-4 gap-1 about-me">
          <div className="col-4 about-left">
            <img
              src="fb.jpg"
              alt=""
              width={300}
              className="rounded-4 about-img shadow p-1 "
            />
          </div>
          <div className="col about-right ">
            <h2 className="text-white fw-semibold py-3">
              I'm A Certified Front-End Developer
            </h2>
            <span className="text-white ">
              Hello, my name is Kehinde Olaleye, and I'm a front-end engineer
              specializing in building modern web experiences with HTML, CSS,
              and Javascript (React.js). I also have experience with Bootstrap,
              Tailwind, WordPress, SEO, and Figma. I'm passionate about creating
              user-friendly and visually appealing websites that meet the needs
              of my clients. I'm also a strong believer in the importance of
              continuous learning and staying up to date with the latest trends
              and technologies in the web development field.
            </span>
            <div className="row p-3 d-flex align-content-start  justify-content-start gap-3">
              <button className="btn btn-lg btn-outline-light col-sm-4 col-12 ">
                Contact Me
              </button>
              <button className="btn btn-lg btn-danger col-sm-4 col-12 ">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  );
};

export default AboutMe;
