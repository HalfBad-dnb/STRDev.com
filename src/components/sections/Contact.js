import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaSpinner } from 'react-icons/fa';
import './Contact.css';
import SectionHeader from '../common/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // EmailJS configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_y3l495l',
    TEMPLATE_ID: 'template_dhnf81v',
    PUBLIC_KEY: 'bVNtetP6Re7iuyNJ2'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader 
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
          typingTexts={[
            'Get In Touch',
            'Contact Me',
            'Reach Out',
            'Let\'s Connect'
          ]}
        />
        <div className="contact-content">
<div className="contact-form">
            <h3>Send Me a Message</h3>
            {formSubmitted ? (
              <div className="form-success">
                <p>Thank you for your message! I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="spinner" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {error && <p className="error-message">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
