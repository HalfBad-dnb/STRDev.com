import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TypingEffect from '../../effects/TypingEffect';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text-content">
            <div className="header-container">
              <h1>
                <span className="name">STR<span className="highlight">Dev</span></span>
              </h1>
              <div className="title">
                <TypingEffect 
                  texts={[
                    'Software Development',
                    'Web Development',
                    'IT solutions',
                  ]} 
                  typingSpeed={100} 
                  deletingSpeed={50} 
                  delayBetween={1500}
                />
              </div>
              <div className="hero-social">
                <a href="https://github.com/HalfBad-dnb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/deividas-stropus-24350a1a5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <p className="hero-text">
            We are a reliable partner in the field of digital solutions. We help implement website development projects from concept to full execution – from creating a modern design to providing technical support.

We specialize in software development and integration – ensuring smooth system operation, security, and performance optimization.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="secondary-btn">Get in touch</Link>
              <Link to="/projects" className="secondary-btn">View my work</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
