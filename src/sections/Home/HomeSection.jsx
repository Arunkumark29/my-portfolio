import React, { useEffect, useState } from 'react';
import './home.css';

const HomeSection = ({ onStart }) => {
  const [isAssembled, setIsAssembled] = useState(false);
  const name = "ARUNKUMAR K";

  useEffect(() => {
    // Trigger the animation 100ms after mount
    const timer = setTimeout(() => setIsAssembled(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Helper to generate random start positions for the "Boot" effect
  const getRandomPos = () => {
    const x = Math.floor(Math.random() * 200 - 100) + 'px'; // -100px to 100px
    const y = Math.floor(Math.random() * 200 - 100) + 'px';
    return { '--startX': x, '--startY': y };
  };

  return (
    <section className="home-container" onClick={onStart}>
      <div className="home-content">
        
        {/* 1. Name: Gradient Yellow & Pink */}
        <div className={`name-container ${isAssembled ? 'assembled' : ''}`}>
          {name.split('').map((char, index) => (
            <span 
              key={index} 
              className="letter" 
              style={getRandomPos()}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* 2. Identity: Polished Shining White */}
        <div className={`identity-line ${isAssembled ? 'visible' : ''}`}>
          <span className="shiny-text">Software Engineering Student with Ai Passion</span>
          <span className="separator">|</span>
          <span className="shiny-text">First Principles Thinking</span>
        </div>

        {/* 3. Hint: Polished Gray */}
        <div className={`interaction-hint ${isAssembled ? 'visible' : ''}`}>
          <span className="hint-text">CLICK ANYWHERE TO CONTINUE</span>
        </div>

      </div>

      {/* Optional: Subtle Noise Texture */}
      <div className="noise-overlay"></div>
    </section>
  );
};

export default HomeSection;