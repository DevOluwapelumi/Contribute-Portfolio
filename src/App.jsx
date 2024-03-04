import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Footer></Footer>
    </>
  )
}

export default App