/* src/ai/aiData.js */

export const RESUME_DATA = [
  // --- 1. NAME (Specific Rule) ---
  {
    keywords: ["name", "full name", "called", "who is he"],
    response: "His full name is Arunkumar K."
  },

  // --- 2. DOMAIN & INTERESTS ---
  {
    keywords: ["domain", "interest", "passion", "focus", "specialize", "field"],
    response: "Arunkumar is strictly focused on Full-Stack Development and AI Innovation. He loves solving complex problems using scalable web solutions and integrating Artificial Intelligence into real-world applications."
  },

  // --- 3. SKILLS ---
  {
    keywords: ["skill","skills", "stack", "technology", "tech", "language", "coding", "program", "know"],
    response: "He is proficient in React.js, Node.js, Express, MongoDB (MERN Stack). He also has strong core skills in Java, Python, C++ and Data Structures & Algorithms."
  },

  // --- 4. GREETINGS (Generic - Moved lower and removed "Arunkumar") ---
  {
    keywords: ["hi", "hello", "hey", "greetings", "morning", "evening", "who are you", "start", "bot", "assistant"],
    response: "Hello! I am Arunkumar's AI Assistant. I can tell you about his Domain, Skills, Projects, Achievements, or CGPA. What would you like to know?"
  },

  // --- 5. PROFILES ---
  {
    keywords: ["profile", "profiles", "link", "handle", "platform", "url", "online", "github"],
    response: "Here are his active professional profiles:\n• LeetCode: 550+ Problems Solved\n• SkillRack: 605+ Problems Solved\n• GitHub: For project repositories\n• LinkedIn: For professional updates\n(Clickable links are in the Projects section.)"
  },

  // --- 6. ACHIEVEMENTS ---
  {
    keywords: ["achievement", "achievements", "coding", "rank", "stats", "leetcode", "skillrack", "problem", "solving"],
    response: "Arunkumar is a competitive programmer with impressive stats: \n• LeetCode: Solved around 550+ problems.\n• SkillRack: Solved around 605+ problems.\nHe consistently practices algorithmic thinking."
  },

  // --- 7. EDUCATION ---
  {
    keywords: ["cgpa", "grade", "score", "education", "college", "degree", "university", "study", "mark", "institute", "semester", "year"],
    response: "He is currently in his 3rd Year (6th Semester) pursuing B.E. Computer Science and Engineering at Chennai Institute of Technology, Chennai, maintaining a strong CGPA of 8.6."
  },

  // --- 8. CERTIFICATIONS ---
  {
    keywords: ["certification", "certifications", "certificate", "course", "learn", "badge"],
    response: "He holds several major certifications:\n1. Responsive Web Design (freeCodeCamp)\n2. Supervised Machine Learning (DeepLearning.AI)\n3. Data Structures (UCSD)\n4. Ethical Hacking (NPTEL)\n5. Cisco Networking (Cisco Academy)"
  },

  // --- 9. PROJECTS ---
  {
    keywords: ["project", "projects", "work", "portfolio", "app", "website", "build"],
    response: "He has built multiple full-stack applications. Key highlights include this Portfolio Website itself and AI-integrated web apps. Check the 'PROJECTS' section for demos."
  },

  // --- 10. EXPERIENCE ---
  {
    keywords: ["experience", "job", "intern", "company", "work history", "role", "internship"],
    response: "Arunkumar has gained industry experience through internships in software development. Check the 'EXP & ACH' section for his timeline."
  },

  // --- 11. CONTACT ---
  {
    keywords: ["contact", "email", "mail", "phone", "reach", "hire", "address", "linkedin"],
    response: "You can reach him via:\n •Email: arunkumark.cse2023@citchennai.net \n •LinkedIn: linkedin.com/in/arunkumark2006/ \nOr use the Contact Form below."
  },

  // --- 12. RESUME ---
  {
    keywords: ["resume", "cv", "download", "pdf", "file"],
    response: "Here is a quick summary of his Resume:\n\n• Education: BE. CSE at CIT (CGPA: 8.6)\n• Experience: Cisco Networking Intern & Research Intern (2 Publications)\n• Projects: Personal AI Assistant, Voice Calculator & Robotic Arm UI\n• Skills: C++, Java, Python, React.js, Node.js\n• Achievements: Solved 1100+ coding problems combined.\n\nFor the full detailed document, please Download the PDF or view it in the 'RESUME' section."
  },

  // --- 13. ABOUT ---
  {
    keywords: ["about", "who", "Who", "summary", "intro", "bio"],
    response: "Arunkumar K is a Computer Science and Engineering student passionate about clean code, scalable systems, and bridging the gap between Web Development and AI."
  }
];

export const FALLBACK_RESPONSE = "I missed that. Try asking about my College, CGPA, LeetCode stats, Certifications, or Projects!";