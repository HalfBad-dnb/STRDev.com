import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaSpinner, FaPaperPlane } from 'react-icons/fa';
import '../contact/Contact.css';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const emailConfig = useMemo(() => ({
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
  }), []);

  const sanitizeInput = (input) => {
    if (!input) return '';
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  };

  useEffect(() => {
    const missingVars = [];
    if (!emailConfig.serviceId) missingVars.push('REACT_APP_EMAILJS_SERVICE_ID');
    if (!emailConfig.templateId) missingVars.push('REACT_APP_EMAILJS_TEMPLATE_ID');
    if (!emailConfig.publicKey) missingVars.push('REACT_APP_EMAILJS_PUBLIC_KEY');
    
    if (missingVars.length > 0) {
      console.error('Missing required environment variables:', missingVars.join(', '));
    }
  }, [emailConfig]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
        throw new Error('Email configuration is incomplete');
      }

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        emailConfig.publicKey
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
        <div className="contact-content">
          <div className="contact-form">
            <h3><FaPaperPlane style={{marginRight: '10px'}} /> Send Me a Message</h3>
            {formSubmitted ? (
              <div className="form-success">
                <p>Thank you for your message! I will get back to you soon.</p>
                <button 
                  onClick={() => navigate('/')} 
                  className="back-home-btn"
                  style={{
                    maxWidth: '200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span>Back to Home</span>
                </button>
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
                    rows="6"
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

export default ContactPage;