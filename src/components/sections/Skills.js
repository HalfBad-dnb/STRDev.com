import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaMobile, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS/SCSS', 'Redux']
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: <FaNodeJs />,
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'Java', 'Spring Boot']
    },
    {
      id: 3,
      title: 'Database',
      icon: <FaDatabase />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'GraphQL']
    },
    {
      id: 4,
      title: 'DevOps & Cloud',
      icon: <FaServer />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions']
    },
    {
      id: 5,
      title: 'Mobile Development',
      icon: <FaMobile />,
      skills: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)']
    },
    {
      id: 6,
      title: 'Tools & Methodologies',
      icon: <FaTools />,
      skills: ['Agile/Scrum', 'REST API Design', 'TDD', 'Microservices', 'JIRA', 'Figma']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-content">
          {skillCategories.map(category => (
            <div className="skill-card" key={category.id}>
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
