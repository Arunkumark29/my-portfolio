import React from 'react';

// --- Icons Import ---
import { 
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaChartBar, FaCode 
} from 'react-icons/fa';

import { SiCplusplus, SiMysql, SiMongodb } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

import './skills.css';

const skillsCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      // Added 'color' for the "Colorful" request
      { id: 1, name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { id: 2, name: "Java", icon: <FaJava />, color: "#f89820" },
      { id: 3, name: "Python", icon: <FaPython />, color: "#3776AB" },
      { id: 4, name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { id: 5, name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { id: 6, name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { id: 7, name: "React Native", icon: <TbBrandReactNative />, color: "#61DAFB" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { id: 8, name: "MySQL", icon: <SiMysql />, color: "#00758F" },
      { id: 9, name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ]
  },
  {
    title: "Analytics & Tools",
    skills: [
      { id: 10, name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { id: 11, name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { id: 12, name: "VS Code", icon: <FaCode />, color: "#007ACC" },
      { id: 13, name: "Power BI", icon: <FaChartBar />, color: "#F2C811" },
    ]
  }
];

const SkillsSection = () => {
  
  const getRandomScatter = () => {
    const x = Math.floor(Math.random() * 800 - 400); 
    const y = Math.floor(Math.random() * 800 - 400); 
    const r = Math.floor(Math.random() * 360); 
    return { 
      '--tx': `${x}px`, 
      '--ty': `${y}px`, 
      '--tr': `${r}deg` 
    };
  };

  return (
    <section className="skills-container">
      <div className="skills-content">
        <h2 className="skills-header">Technical Skills</h2>
        
        <div className="skills-wrapper">
          {skillsCategories.map((category, catIndex) => (
            <div key={catIndex} className="skills-category">
              
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.id} 
                    className="skill-card"
                    style={{ 
                      ...getRandomScatter(), 
                      animationDelay: `${index * 0.05}s` 
                    }} 
                  >
                    {/* The Frame gets the Glorifying Border */}
                    <div className="icon-frame">
                      {/* We pass the specific color to the icon container */}
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;