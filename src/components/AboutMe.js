import React from "react";
import "./AboutMe.css";
import mmpng from '../images/mm.png'

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="intro-section">
        <h1 id="ab-h1">About Me</h1>
        <p id="hii">
          Hi, I am a professional <strong>Social Media Manager</strong> and
          <strong> Marketer</strong>. I specialize in:
        </p>
        <ul class="services-list">
  <li>Facebook Ads</li>
  <li>Instagram Ads</li>
  <li>Organic Growth</li>
  <li>Shopify Store Design</li>
  <li>E-commerce Strategies</li>
  <li>TikTok Ads</li>
</ul>

        <p>
          With my expertise, I help businesses achieve their marketing goals
          effectively and grow their online presence.
        </p>
      </div>

      <div className="about-me-layout">
        <div className="about-me-info">
          <h2>What I Offer</h2>
          <p>
            I bring years of experience in social media management and online
            advertising. Whether you are looking for high-converting ad
            campaigns, organic growth strategies, or a beautifully designed
            Shopify store, I can help bring your vision to life.
          </p>
          <p>
            My approach is professional, creative, and tailored to your unique
            needs.
          </p>
        </div>
        <div className="about-me-image">
          <img
            src={mmpng}
            alt="About Me"
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
