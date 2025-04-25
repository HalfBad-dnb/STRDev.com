import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>STR<span>Dev</span></h3>
            <p>Software Development Solutions</p>
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} STRDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
