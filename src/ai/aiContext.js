/* src/ai/aiContext.js */
import { RESUME_DATA, FALLBACK_RESPONSE } from './aiData';

export const generateAIResponse = async (userInput) => {
  // 1. Normalize input
  const cleanInput = userInput.toLowerCase().trim();

  // 2. Simulate Delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // 3. Search for a match using WHOLE WORD check
  for (const rule of RESUME_DATA) {
    const match = rule.keywords.some(keyword => {
      // Creates a Regular Expression to look for the whole word
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      return regex.test(cleanInput);
    });
    
    if (match) {
      return rule.response;
    }
  }

  return FALLBACK_RESPONSE;
};