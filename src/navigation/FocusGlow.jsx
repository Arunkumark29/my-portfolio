import React from 'react';
import './focusGlow.css';

const sectionsOrder = ["about", "skills", "projects", "resume", "contact"];

const FocusGlow = ({ currentSection }) => {
  // 1. Find the index (0 to 4)
  const index = sectionsOrder.indexOf(currentSection);

  // If for some reason section isn't found (e.g. 'home'), don't render
  if (index === -1) return null;

  return (
    <div className="focus-glow-container">
      {/* 2. Pass index to CSS for calculation */}
      <div 
        className="glow-orb" 
        style={{ '--glow-index': index }} 
      />
    </div>
  );
};

export default FocusGlow;