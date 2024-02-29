import React from "react";
import "../Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container row p-2 display-1 ps-lg-5 gap-4 container-fluid m-0 ">
        <div className="hero-left col  p-lg-5">
          <span className="hero-left-text ">
            Hello!, 👋 I'm Kehinde Olaleye
          </span>
          <br />
          <span className="hero-left-text2 ">A Front-End Developer 👨‍💻</span>
          <br />
          <h6 className="hero-left-text3">
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web applications with JavaScript / React JS / Node JS /
            Mongo DB / Express JS and some other cool libraries and frameworks.
          </h6>
        </div>
        <div className="hero-right col p-lg-5 ms-lg- ">
          <div class="profile">
            <div class="profile-image">
              <img src="fb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
