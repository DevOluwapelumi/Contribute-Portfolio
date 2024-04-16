import React, { useState, useRef } from "react";
// import "./Resume.css";

const Resume = () => {
  const [showDetails, setShowDetails] = useState(false);
  const experienceRef = useRef(null);

  const toggleExperienceDetails = () => {
    setShowDetails(!showDetails);
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="name">Your Name</h1>
        <h3 className="title">Your Job Title</h3>
        <ul className="contact-info">
          <li>
            <a href="mailto:youremail@example.com">youremail@example.com</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/your-github-username">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="resume-body">
        <div className="section">
          <h2>Summary</h2>
          <p>
            A passionate and skilled front-end developer with X years of experience
            in building user-friendly and interactive web applications. Proven
            ability to design, develop, and maintain responsive websites using
            modern technologies. Eager to leverage my skills and contribute to
            challenging projects within a collaborative team environment.
          </p>
        </div>
        <div className="section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3 (including frameworks like Bootstrap, Tailwind CSS)</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Other relevant skills (e.g., Node.js, Git, testing tools)</li>
          </ul>
        </div>
        <div className="section experience-section">
          <h2>Experience</h2>
          <button
            className="experience-toggle"
            onClick={toggleExperienceDetails}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          <div className="experience-details" ref={experienceRef}>
            {/* Add your experience details here, with company names, dates, and accomplishments (use separate divs for each experience) */}
            {showDetails && (
              <div className="experience-item">
                <h3>Company Name</h3>
                <h4>Job Title (Dates)</h4>
                <ul className="achievements">
                  <li>Accomplishment 1</li>
                  <li>Accomplishment 2</li>
                  <li>Accomplishment 3</li>
                </ul>
              </div>
            )}
            {/* Add more experience divs as needed */}
          </div>
        </div>
        <div className="section">
          <h2>Education</h2>
          <p>
            Bachelor of Science in Computer Science (or relevant field) - University
            Name (Graduation Year)
          </p>
          {/* Add any additional educational details here */}
        </div>
        <div className="section">
          <h2>Projects</h2>
          <ul className="projects-list">
            <li>
              <a href="https://www.your-project-link.com">Project Name 1</a>
            </li>
            <li>
              <a href="https://www.your-project-link.com">Project Name 2</a>
            </li>
            {/* Add more project links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
