import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import mmppng from '../images/sm.jpg';

// Sample projects array
const projects = [
  {
    title: "Project 1",
    description: "This is a brief description of Project 1.",
    img: mmppng, // Fix here: Directly use the imported image
  },
  {
    title: "Project 2",
    description: "This is a brief description of Project 2.",
    img: mmppng,
  },
  {
    title: "Project 3",
    description: "This is a brief description of Project 3.",
    img: mmppng,
  },
  {
    title: "Project 4",
    description: "This is a brief description of Project 4.",
    img: mmppng,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-slider-container">
      <h1>My Projects</h1>
      <div className="slider-wrapper">
        <button className="nav-button left" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="slider">
          <AnimatePresence>
            {projects.map((project, index) => (
              index === currentIndex && (
                <motion.div
  key={index}
  className="slide"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{
    duration: 0.5, // Slightly longer for smoother effect
    ease: "easeInOut", // Easing function for smoothness
  }}
>

                  <div className="slide-image-container">
  <img src={project.img} alt={project.title} className="slide-image" />
  <div className="slide-text">
    <h2 className="slide-title">{project.title}</h2>
    <p>{project.description}</p>
  </div>
</div>

                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        <button className="nav-button right" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Projects;
