import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import TypingEffect from '../effects/TypingEffect';
import profileImage from '../../assets/strdev.webp';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-container">
              <img src={profileImage} alt="STR Dev" className="profile-image" />
            </div>
          </div>
          <div className="hero-text-content">
            <h1>
              <span className="greeting">Hi, I'm</span>
              <span className="name">STR<span className="highlight">Dev</span></span>
              <span className="title">
                <TypingEffect 
                  texts={[
                    'Software Developer', 
                    'Frontend Engineer', 
                    'Backend Developer',
                    'Full Stack Developer',
                    'Problem Solver'
                  ]} 
                  typingSpeed={100} 
                  deletingSpeed={50} 
                  delayBetween={1500}
                />
              </span>
            </h1>
            <p className="hero-text">
            We are a reliable partner in the field of digital solutions. We help implement website development projects from concept to full execution – from creating a modern design to providing technical support.

We specialize in software development and integration – ensuring smooth system operation, security, and performance optimization.

We also collaborate with e-commerce platform developers, addressing their daily challenges and offering fast, efficient solutions that allow them to focus on business growth.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="primary-btn">Get in touch</a>
              <a href="#projects" className="secondary-btn">View my work</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <a href="#about">
            <FaArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
