import React from "react";
import "../skills.css";
import { Icon } from "@iconify/react";
const Skills = () => {
  return (
    <>
      <section className="skills-container d-grid justify-content-center align-items-center m-0">
        <div className="">
          <h1>My SKills</h1>
        </div>
        <div className="">
          <div class="slider d-flex justify-content-center align-items-center py-4">
            <div class="slider-items d-flex justify-content-center  align-items-center gap-5 text-center">
              <div className="text-black d-grid justify-content-center align-items-center text-center">
                <span className="skill-icons--html"></span> <span>HTML 5</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--css"></span> <span>CSS 3</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--javascript"></span> <span>Javascript</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--react-light"></span> <span>React.Js</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--bootstrap"></span> <span>BootTrap</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--tailwindcss-light"></span> <span>Tailwind CSS</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--github-light"></span> <span>Github</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--wordpress"></span> <span>Wordpress</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--figma-light"></span> <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div class="slider d-flex justify-content-center align-items-center  p4">
            <div class="slider-items2 d-flex justify-content-center  align-items-center gap-5 text-center">
              <div className="text-black d-grid justify-content-center align-items-center text-center">
                <span className="skill-icons--html"></span> <span>HTML 5</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--css"></span> <span>CSS 3</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--javascript"></span> <span>Javascript</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--react-light"></span> <span>React.Js</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--bootstrap"></span> <span>BootTrap</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--tailwindcss-light"></span> <span>Tailwind CSS</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--github-light"></span> <span>Github</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--wordpress"></span> <span>Wordpress</span>
              </div>
              <div className="text-black d-grid justify-content-center align-items-center text-center">
              <span class="skill-icons--figma-light"></span> <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
