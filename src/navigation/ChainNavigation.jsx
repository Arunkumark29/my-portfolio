import React from 'react';
import './chain.css';

const ChainNavigation = ({ currentSection, visitedSections, onNavigate }) => {
  
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXP & ACH' },
    { id: 'resume', label: 'RESUME' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className="chain-container">
      {/* Floating Wrapper for the whole chain */}
      <div className="chain-floater">
        <div className="chain-list">
          {sections.map((section) => {
            const isCurrent = currentSection === section.id;
            const isVisited = visitedSections.includes(section.id);

            return (
              <div 
                key={section.id}
                className={`nav-wrapper ${isCurrent ? 'active' : ''} ${isVisited ? 'visited' : ''}`}
                onClick={() => onNavigate(section.id)}
              >
                {/* Hexagon Shape */}
                <div className="nav-hex">
                  <span className="nav-text">{section.label}</span>
                </div>
                
                {/* The Zig-Zag Connector Line */}
                <div className="zig-zag-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ChainNavigation;