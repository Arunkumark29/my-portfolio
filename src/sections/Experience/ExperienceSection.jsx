import React from 'react';
import './experience.css';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        
        {/* MAIN HEADING */}
        <h2 className="section-title">EXPERIENCE & ACHIEVEMENTS</h2>

        {/* --- TOP ROW (2 BOXES) --- */}
        <div className="grid-row-2">
          
          {/* Box 1: Slides in from LEFT */}
          <div className="exp-card anim-left" style={{ animationDelay: '0.1s' }}>
            <div className="card-header">
              <h3 className="card-role">Research Intern</h3>
              <span className="card-date">Nov 2024</span>
            </div>
            <h4 className="card-org">Chennai Institute of Technology</h4>
            <p className="card-desc">
              Applied research on ML models for real-world problems, focusing on data efficiency and model optimization.
            </p>
          </div>

          {/* Box 2: Slides in from RIGHT */}
          <div className="exp-card anim-right" style={{ animationDelay: '0.3s' }}>
            <div className="card-header">
              <h3 className="card-role">Network Intern</h3>
              <span className="card-date">May 2024</span>
            </div>
            <h4 className="card-org">Cisco Networking Academy</h4>
            <p className="card-desc">
              Gained hands-on experience in networking fundamentals, routing protocols, and enterprise security configurations.
            </p>
          </div>

        </div>

        {/* --- BOTTOM ROW (3 BOXES) --- */}
        <div className="grid-row-3">
          
          {/* Box 1: Slides in from LEFT */}
          <div className="exp-card anim-left" style={{ animationDelay: '0.5s' }}>
            <div className="card-header">
              <h3 className="card-role">IEEE Paper</h3>
              <span className="card-date">2025</span>
            </div>
            <h4 className="card-org">ICKECS Publication</h4>
            <p className="card-desc">
              "ML Based House Rental Price Prediction" - Accepted for publication.
            </p>
          </div>

          {/* Box 2: Slides in from BOTTOM (UP) */}
          <div className="exp-card anim-up" style={{ animationDelay: '0.7s' }}>
            <div className="card-header">
              <h3 className="card-role">IEEE Paper</h3>
              <span className="card-date">2025</span>
            </div>
            <h4 className="card-org">ICDSAAI Publication</h4>
            <p className="card-desc">
              "Tech Interventions for Food Security" - Novel AI solutions for agriculture.
            </p>
          </div>

          {/* Box 3: Slides in from RIGHT */}
          <div className="exp-card anim-right" style={{ animationDelay: '0.9s' }}>
            <div className="card-header">
              <h3 className="card-role">Coding</h3>
              <span className="card-date">Ongoing</span>
            </div>
            <h4 className="card-org">500+ Problems Solved</h4>
            <p className="card-desc">
              Consistent algorithmic problem solving across LeetCode and Skillrack.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;