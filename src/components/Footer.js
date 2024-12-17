import { color } from "framer-motion";
import React from "react";
import "./Footer.css";
import facebookIcon from "../assets/facebook.png"; // Add the correct path for your PNG file
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 All Rights Reserved.</p>
      <div className="social-icons">
     <a  
         href="https://facebook.com" target="_blank" rel="noreferrer">     Facebook
      <img className="link-png l-p" src={facebookIcon} alt="Facebook" style={{ filter: "invert(100%)"}} />
 
        </a>
        <a href="https://www.linkedin.com/in/muhammad-raziullah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">Linkdin
          <img className="link-png2 l-p" src={linkedinIcon} alt="LinkedIn" style={{filter:'invert(100%)' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram
          <img className="link-png3 l-p" src={instagramIcon} alt="Instagram" style={{filter:'invert(100%)' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
