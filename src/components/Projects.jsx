import React from "react";
import "../project.css";

const Projects = () => {
  return (
    <>
      <h1 className="text-light text-center pt-5 display-3">Latest Projects</h1>
      <div className="row d-flex justify-content-center align-items-center p-5 gap- container-fluid">
        <div className="col-5 w-50">
          <div className="card ">
            <img className="card__background" src="de.jpg" alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Paypal Landing Page</h2>
              </div>
              <button className="card__button">Read more</button>
            </div>
          </div>
        </div>
        <div className="col-5 w-50 ">
          <div className="card ">
            <img className="card__background" src="wee.png" alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Konga Clone</h2>
              </div>
              <button className="card__button">Read more</button>
            </div>
          </div>
        </div>
        <div className="col-5 w-50">
          <div className="card ">
            <img className="card__background" src="wew.png" alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">Love Calculator App</h2>
              </div>
              <button className="card__button">Read more</button>
            </div>
          </div>
        </div>
        <div className="col-5 w-50">
          <div className="card ">
            <img className="card__background" src="de.jpg" alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">ombia</h2>
              </div>
              <button className="card__button">Read more</button>
            </div>
          </div>
        </div>
        <div className="col-5 w-50">
          <div className="card ">
            <img className="card__background" src="de.jpg" alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">ombia</h2>
              </div>
              <button className="card__button">Read more</button>
            </div>
          </div>
        </div>
        <div className="col-5 w-50">
          <div className="card ">
            <img className="card__background" src="de.jpg" alt="" />
            <div className="card__content | flow p-4 ">
              <div className="card__content--container | flow">
                <h2 className="card__title">ombia</h2>
              </div>
              <button className="card__button">Read more</button>
            </div>
          </div>
        </div>
      </div>
      {/* <ul className="cards">
        <li>
          <a href="" className="card ">
            <img src="de.jpg" className="card__image" alt="" />
            <div className="card__overlay ">
              <div className="card__header ">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                  <span className="card__status">3 hours ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>
                  <span className="card__tagline">
                    Lorem ipsum dolor sit amet consectetur
                  </span>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                  <span className="card__status">3 hours ago</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul> */}
      {/* <div className='project-container d-flex align-content-center justify-content-center'>
        <div className='project-title'><h1>LATEST PROJECTS</h1></div>
        <div className='project-box'></div>
    </div> */}
    </>
  );
};

export default Projects;
