import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const handleSelect = (service) => {
    navigate('/contact', { state: { selectedService: service } });
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and user-friendly websites using the latest web technologies.'
    },
    {
      title: 'Software Development',
      description: 'Building custom software solutions tailored to your business needs.'
    },
    {
      title: 'IT Solutions',
      description: 'Providing IT solutions to help businesses stay competitive in the digital age.'
    },
    {
      title: 'Consulting',
      description: 'Offering expert advice and guidance to help businesses make informed decisions.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button 
                className="select-button"
                onClick={() => handleSelect(service.title)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
    