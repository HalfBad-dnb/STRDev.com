import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import CodeSnippets from './components/effects/CodeSnippets';
import ContactPage from './components/pages/contact/ContactPage';
import ProjectsPage from './components/pages/projects/ProjectsPage';
import SkillsPage from './components/pages/skills/SkillsPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <CodeSnippets />
        <ScrollToTop />
        <div className="content-wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
