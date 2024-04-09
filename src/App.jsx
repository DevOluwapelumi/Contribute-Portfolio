import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { Routes, Route, Navvigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Navvigate to="/" />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="*" element={<Footer />} />
      </Routes>

      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
      <Contact></Contact>
    </>
  );
};

export default App;
