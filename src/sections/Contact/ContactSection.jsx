import React from 'react';
import './contact.css';

const ContactSection = () => {
  return (
    <section className="contact-container">
      <div className="contact-content">
        
        {/* ANIMATION 1: Shake & Fit */}
        <h2 className="contact-title">
          GET IN TOUCH
        </h2>
        
        {/* Text: Pure White */}
        <p className="contact-text">
          I am currently open to opportunities in software engineering.
          Feel free to connect via email or LinkedIn.
        </p>

        {/* ANIMATION 2: Blast Entry */}
        <div className="contact-actions">
          
          {/* EMAIL BUTTON */}
          <a 
            href="mailto:arunkumark.cse2023@citchennai.net" 
            className="contact-btn blast-effect"
            style={{ animationDelay: '0.6s' }} // Delay for the blast
          >
            Send Email
          </a>

          {/* LINKEDIN BUTTON */}
          <a 
            href="https://www.linkedin.com/in/arunkumark2006/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn blast-effect"
            style={{ animationDelay: '0.8s' }} // Slight staggered blast
          >
            LinkedIn
          </a>
          
        </div>

      </div>
    </section>
  );
};

export default ContactSection;