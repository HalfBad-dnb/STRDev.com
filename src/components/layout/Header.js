import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Toggle body scroll when mobile menu is open
    document.body.style.overflow = isNavOpen ? 'auto' : 'hidden';
  };

  // Close mobile menu when clicking on overlay
  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    closeNav();
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="#home" onClick={handleNavClick}>STR<span>Dev</span></a>
        </div>
        <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
          <button className="close-nav" onClick={toggleNav} aria-label="Close menu">
            <FaTimes />
          </button>
        </nav>
        {!isNavOpen && (
          <button className="hamburger" onClick={toggleNav} aria-label="Open menu">
            <FaBars />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
