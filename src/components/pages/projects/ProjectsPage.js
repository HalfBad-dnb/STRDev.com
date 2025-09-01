import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../../common/SectionHeader';
import evxImage from '../../../assets/evx.webp';
import halfbadImage from '../../../assets/HalfBad-home.webp';
import stickyImage from '../../../assets/newstickynotes .webp';
import tunerrImage from '../../../assets/Tunerr.png';
import AniloraImage from '../../../assets/Anilora.png';
import TjetrentImage from '../../../assets/Tjetrent.png';


// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Artist portfolio and shop',
      description: 'A full-stack e-commerce application with product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'JavaScript', 'Java', 'HTML', 'CSS'],
      image: halfbadImage,
      githubLink: 'https://github.com/HalfBad-dnb/Half-Bad',
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
      title: 'Sticky notes web application',
      description: 'Sticky notes web application with free global board , private boards and user authentication.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS'],
      image: stickyImage,
      githubLink: 'https://github.com/HalfBad-dnb/Sticky-Notes',
    },
    {
      id: 4,
      title: 'Tunerr- Music streaming platform',
      description: 'Music streaming platform (Still in development).',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'Java', 'HTML', 'CSS'],
      image: tunerrImage,
      githubLink: 'https://github.com/HalfBad-dnb/Tunerr',
    },
    {
      id: 5,
      title: 'Anilora - Flower Shop',
      description: 'Flower showcase and order platform. (Still in development)',
      technologies: ['React Native Web', 'Redux', 'Firebase', 'D3.js'],
      image: AniloraImage,
      githubLink: 'https://github.com/example/ecotrack',
      liveLink: 'https://anilora.netlify.app'
    },
    {
      id: 6,
      title: 'Tjetrent - jetsky rental platform',
      description: 'Informational website for jetsky rental platform.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'Java', 'HTML', 'CSS'],
      image: TjetrentImage,
      githubLink: 'https://github.com/example/codecollab',
      liveLink: 'https://tjetrent.lt'
    },

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
        <div className="swiper-container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={projects.length > 2}  // Only enable loop if more than 2 projects
            loopAdditionalSlides={projects.length > 2 ? 1 : 0}
            coverflowEffect={{
              rotate: projects.length > 2 ? 50 : 0,  // Reduce rotation if not enough slides
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden'
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-card">
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swipe-hint">Swipe to navigate</div>
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
