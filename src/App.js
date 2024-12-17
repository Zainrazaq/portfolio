import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import StarBackground from "./components/StarBackground";

function Layout() {
  const location = useLocation(); // Get the current route

  // Determine which components to show based on the current route
  const isHeroPage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about-me";
  const isSpecificPage = location.pathname === "/contact" || location.pathname === "/projects";

  return (
    <>
    {/* Background stays fixed and behind everything */}
    <StarBackground />

{/* Navbar is always visible */}
<Navbar />

{/* Main content */}
<div style={{ position: "relative", zIndex: 1, marginTop: "60px" }}> {/* Adjust margin if Navbar overlaps */}
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
</div>

      {/* Conditional components based on the current page */}
      {isHeroPage && (
        <>
          {/* Show all components except AboutMe on Hero page */}
          <Projects />
          <Contact />
          <Footer />
        </>
      )}

      {isAboutPage && (
        <>
          {/* Show all components except Hero on AboutMe page */}
          <Projects />
          <Contact />
          <Footer />
        </>
      )}

      {isSpecificPage && <Footer />} {/* Only Footer on specific pages */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
