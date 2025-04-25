import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#home">STR<span>Dev</span></a>
        </div>
        <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsNavOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsNavOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsNavOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a></li>
          </ul>
          <button className="close-nav" onClick={toggleNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="hamburger" onClick={toggleNav}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
