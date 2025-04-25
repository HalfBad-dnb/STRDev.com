import React from 'react';
import './About.css';
import CV from '../../assets/Deividas Stropus CV (EN).pdf';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              {/* Placeholder for profile image */}
              <div className="placeholder-image"></div>
            </div>
          </div>
          <div className="about-text">
            <h3>Software Developer & Problem Solver</h3>
            <p>
              Hello! I'm a passionate software developer with expertise in building modern web applications.
              I specialize in creating efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            <p>
              With a strong foundation in both front-end and back-end technologies, I enjoy turning complex
              problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me
              exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
            <div className="about-details">
              <div className="detail">
                <span className="label">Name:</span>
                <span className="value">STR Dev</span>
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <span className="value">contact@strdev.com</span>
              </div>
              <div className="detail">
                <span className="label">Location:</span>
                <span className="value">San Francisco, CA</span>
              </div>
              <div className="detail">
                <span className="label">Availability:</span>
                <span className="value">Open to opportunities</span>
              </div>
            </div>
            <div className="about-cta">
              <a href="#contact" className="primary-btn">Hire Me</a>
              <a href={CV} className="secondary-btn" download>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
