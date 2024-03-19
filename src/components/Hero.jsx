import React from "react";
import "../Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container row p-2 display-1 ps-lg-5 gap-4 container-fluid m-0 ">
        <div className="hero-left col p-lg-5 my-lg-2 text-center text-lg-start ">
          <span className="hero-left-text ">
            Hello!,<span className="wave">👋 </span> I'm Kehinde Olaleye
          </span>
          <br />
          <span className="hero-left-text2 ">A Front-End Developer 👨‍💻</span>
          <br />
          <h6 className="hero-left-text3">
            Building Modern Web Experiences with HTML5{" "}
            <i class="fa fa-html5"></i> CSS3 <i class="fa fa-css3"> </i> and
            Javascript(React.js) <i class="bi bi-filetype-jsx"> </i> || Bootstrap <i class="bi bi-bootstrap"> </i> 
            || Tailwind
          </h6>
          <a href="#" class="btn text-light hire-me-btn">Hire Me</a>
        </div>
        <div className="hero-right col p-lg-5 my-lg-2 d-flex justify-content-center align-items-">
          <div className="carousel__container">
            <div className="carousel-item shadow">
              <img className="carousel-item__img" src="pp.png" alt="Kennyimg" />
              <div className="carousel-item__details">
                <span className="controls fas fa-quote-left"></span>
                <h6 className="carousel-item__details--subtitle display-6">
                  I speak three languages: English, HTML,
                  <br /> and JavaScript
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
