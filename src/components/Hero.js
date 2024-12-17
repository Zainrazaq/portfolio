import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import profilepic from '../images/mnm.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="hero-intro"
      >
        <h1>
          Hello, I'm <span>Razi</span>
        </h1>
        <p>
          A <span>Passionate </span> Social Media Manager & Marketer
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ff7eb9" }}
          className="cta-btn"
          onClick={() => navigate("/about-me")} // Navigate to About Me page
        >
          About Me 
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hero-image"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={profilepic}
          alt="Hero"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
