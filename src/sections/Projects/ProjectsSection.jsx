import React, { useState } from 'react';
import './projects.css';

// Make sure these paths match your structure and filenames exactly!
import aiAssistantImg from "../../assets/Ai-Assistant.png";
import voiceAssistantImg from "../../assets/Ai-voice-assistant.png"; 
import sArmImg from "../../assets/S-arm.png";

const projectsData = [
  {
    id: 1,
    name: "Personal AI Assistant",
    image: aiAssistantImg, 
    links: {
      github: "https://github.com/Arunkumark29/jarvis-ai-assistant", 
      demo: "https://ai-assistant-jarvise.vercel.app/"            
    },
    // Changed to simple 4-point list
    points: [
      "Designed a modular system separating frontend voice interaction from backend AI logic.",
      "Implemented real-time speech-to-text and intent recognition for seamless control.",
      "Integrated external AI services to handle complex reasoning and contextual responses.",
      "Built a scalable architecture allowing for future expansion of voice commands."
    ]
  },
  {
    id: 2,
    name: "Voice-Enabled Calculator",
    image: voiceAssistantImg, 
    links: {
      github: "https://github.com/Arunkumark29/Voice-Calculator",   
      demo: "https://voice-calculator-3svlmbrdp.vercel.app/"            
    },
    points: [
      "Developed a hands-free mathematical tool for accessible, real-time calculation.",
      "Engineered a parsing engine to convert spoken natural language into mathematical expressions.",
      "Ensured deterministic accuracy by separating speech recognition from calculation logic.",
      "Optimized for low latency to provide instant feedback during voice interaction."
    ]
  },
  {
    id: 3,
    name: "S-ARM Control UI",
    image: sArmImg, 
    links: {
      github: "https://github.com/Arunkumark29/S-ARM-Control-System",     
      demoBase: "https://sarm-base-control.vercel.app/", 
      demoArm: "https://arm-control-joystick-t4no.vercel.app/"                  
    },
    points: [
      "Created a specialized control interface for precise robotic arm manipulation.",
      "Implemented modular joystick components to translate user input into hardware commands.",
      "Focused on a direct control system layout rather than traditional web navigation.",
      "Designed for real-time responsiveness to ensure safety and accuracy in operation."
    ]
  }
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProject = projectsData[currentIndex];

  // Logic to handle next/prev while triggering re-render for animation
  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="projects-container">
      {/* BACKGROUND DECORATION */}
      <div className="bg-decoration">SYSTEM PROJECTS</div>

      {/* KEY prop forces React to destroy and recreate this div, triggering animation */}
      <div className="project-wrapper" key={currentIndex}>
        
        {/* LEFT SIDE: Visual (Slides in from LEFT) */}
        <div className="project-visual slide-in-left">
          <div className="visual-card">
            <img src={activeProject.image} alt={activeProject.name} className="project-img" />
            {/* The Glorifying Border Overlay */}
            <div className="border-overlay"></div>
          </div>
          
          <nav className="project-nav">
            <button 
              className="nav-btn" 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
            >
              ← PREV
            </button>
            <span className="nav-counter">0{activeProject.id} / 03</span>
            <button 
              className="nav-btn" 
              onClick={handleNext} 
              disabled={currentIndex === projectsData.length - 1}
            >
              NEXT →
            </button>
          </nav>
        </div>

        {/* RIGHT SIDE: Details (Slides in from RIGHT) */}
        <div className="project-details slide-in-right">
          <header className="project-header">
            <h2 className="project-name">{activeProject.name}</h2>
            <div className="project-line"></div>
          </header>

          <div className="project-body">
            {/* 4 Points List */}
            <ul className="project-points">
              {activeProject.points.map((point, index) => (
                <li key={index} className="point-item">
                  <span className="point-bullet">›</span>
                  {point}
                </li>
              ))}
            </ul>
            
            <div className="project-links">
              <a href={activeProject.links.github} target="_blank" rel="noopener noreferrer" className="link-item">
                GitHub Repo
              </a>

              {activeProject.links.demo && (
                <a href={activeProject.links.demo} target="_blank" rel="noopener noreferrer" className="link-item highlight-link">
                  Live System
                </a>
              )}

              {/* S-ARM Specific Links */}
              {activeProject.links.demoBase && (
                <a href={activeProject.links.demoBase} target="_blank" rel="noopener noreferrer" className="link-item">
                  Base Control
                </a>
              )}
              {activeProject.links.demoArm && (
                <a href={activeProject.links.demoArm} target="_blank" rel="noopener noreferrer" className="link-item">
                  Arm Control
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;