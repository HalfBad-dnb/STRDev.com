import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaHome, FaProjectDiagram, FaPaperPlane, FaTools } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if current path matches the nav item
  const isActive = (path) => {
    return location.pathname === path || 
           (path === '/projects' && location.pathname.startsWith('/projects'));
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

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/" className={isActive('/') ? 'active' : ''} title="Home"><FaHome className="nav-icon" /></Link></li>
            <li><Link to="/skills" className={isActive('/skills') ? 'active' : ''} title="Skills"><FaTools className="nav-icon" /></Link></li>
            <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''} title="Projects"><FaProjectDiagram className="nav-icon" /></Link></li>
            <li><Link to="/contact" className={`cta-button ${isActive('/contact') ? 'active' : ''}`} title="Contact"><FaPaperPlane className="nav-icon" /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
