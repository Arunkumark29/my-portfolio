import React from 'react';
import './about.css';

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        
        {/* HEADER */}
        <div className="about-header">
          <h1 className="intro-statement">
            I am a Software Engineering Student.
            {/* THEME CHANGE: Gradient Text Class */}
            <span className="highlight">
              Passionate about Full-Stack Development & AI Innovation.
            </span>
          </h1>
        </div>

        {/* LADDER GRID */}
        <div className="pillars-grid">
          
          {/* Card 1 (Left) - Gold Accent */}
          <div className="pillar-card accent-gold">
            <h3 className="pillar-title">Problem Analysis</h3>
            <p className="pillar-text">
              I analyze core constraints to ensure solutions address the root cause, not just the symptoms.
            </p>
          </div>

          {/* Card 2 (Center) - White/Silver Accent */}
          <div className="pillar-card accent-silver">
            <h3 className="pillar-title">Solution Research</h3>
            <p className="pillar-text">
              I research patterns and evaluate trade-offs to design scalable strategies before writing code.
            </p>
          </div>

          {/* Card 3 (Right) - Pink Accent */}
          <div className="pillar-card accent-pink">
            <h3 className="pillar-title">AI Integration</h3>
            <p className="pillar-text">
              I integrate intelligent models to enhance system efficiency without replacing core logic.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;