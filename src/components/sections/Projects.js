import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import evxImage from '../../assets/evx.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'project-placeholder.jpg',
      githubLink: 'https://github.com',
      liveLink: 'https://project-demo.com'
    },
    {
      id: 2,
      title: 'Electric vehicle experience, E-Moto rental platform',
      description: 'Informational website for electric vehicle rental platform.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'react-i18next (for multi-language support)'],
      image: evxImage,
      githubLink: 'https://github.com/HalfBad-dnb/E-Bikes',
      liveLink: 'https://evx.lt/'
    },
    {
      id: 3,
      title: 'Real Estate Listing Platform',
      description: 'Property listing and search application with advanced filtering, maps integration, and user authentication.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS'],
      image: 'project-placeholder.jpg',
      githubLink: 'https://github.com',
      liveLink: 'https://project-demo.com'
    },
    {
      id: 4,
      title: 'Health & Fitness Tracker',
      description: 'A mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.',
      technologies: ['React Native', 'Express', 'MongoDB', 'Chart.js'],
      image: 'project-placeholder.jpg',
      githubLink: 'https://github.com',
      liveLink: 'https://project-demo.com'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms in real-time.',
      technologies: ['Vue.js', 'Node.js', 'Express', 'Socket.io'],
      image: 'project-placeholder.jpg',
      githubLink: 'https://github.com',
      liveLink: 'https://project-demo.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive developer portfolio website showcasing projects and skills (this website).',
      technologies: ['React', 'CSS3', 'React Router'],
      image: 'project-placeholder.jpg',
      githubLink: 'https://github.com',
      liveLink: 'https://project-demo.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader 
          title="My Projects"
          typingTexts={[
            'My Projects',
            'My Work',
            'Portfolio',
            'Case Studies'
          ]}
        />
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-cta">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="primary-btn">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
