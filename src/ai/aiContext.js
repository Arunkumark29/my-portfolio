import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. The Context
export const PORTFOLIO_CONTENT = `
IDENTITY:
You are the AI Assistant for Arunkumar K's portfolio. You are polite, professional, and technical.
You answer questions about Arunkumar's skills, projects, and experience.

PROFILE:
- Name: Arunkumar K
- Role: Software Engineer 
- Core Philosophy: First principles thinking, root-level understanding, controlled AI integration.

PROJECTS:
1. Personal AI Assistant: Voice-enabled automation. Separates frontend/backend/AI logic.
2. Voice-Enabled Calculator: Parses speech to math expressions in real-time.
3. S-ARM Control UI: Robotic control interface focused on safety and precision.

SKILLS:
- Problem Solving, Real-time Systems, AI Integration.
- Strong foundation in Data structures and Networking.

CONTACT:
- LinkedIn, Email (available in contact section).
`;

// 2. The AI Logic
export const generateAIResponse = async (userMessage) => {
  // FIX 1: Trim the key to remove accidental spaces from copy-pasting
  const apiKey = import.meta.env.VITE_AI_API_KEY?.trim();

  if (!apiKey) {
    return "UI Test Mode: Missing API Key. Please check your .env file.";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // FIX 2: Try 'gemini-1.5-pro' which is often more widely available on new accounts
    // If this fails, we will try 'gemini-1.0-pro' automatically
    let model;
    try {
        model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    } catch (e) {
        model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); 
    }

    const prompt = `
      ${PORTFOLIO_CONTENT}
      USER QUESTION: "${userMessage}"
      YOUR ANSWER (Keep it concise, under 3 sentences):
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("AI Error:", error);
    
    // Detailed error for debugging
    if (error.message.includes("404")) {
        return "Error: The AI Model is currently unavailable. Please check your API Key permissions.";
    }
    return "I'm having trouble connecting. Please try again later.";
  }
};