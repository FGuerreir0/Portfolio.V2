/* eslint-disable no-unused-vars */
// Site configuration constants
export const SITE_CONFIG = {
  title: 'Fábio Guerreiro | Full Stack Developer',
  description: 'Full Stack Developer with 4 years of experience specializing in Node.js, Python, React, and AWS.',
  author: 'Fábio Guerreiro',
  url: 'https://fabioguerreirodev.netlify.app',
  social: {
    github: 'https://github.com/FGuerreir0',
    linkedin: 'https://www.linkedin.com/in/fabiofsguerreiro/',
    instagram: 'https://www.instagram.com/fguerreir0/',
  },
};

// Animation configuration
export const ANIMATION_CONFIG = {
  cardFlip: {
    duration: 0.4,
    initial: false,
  },
  botSpeech: {
    displayTime: 10000,
    responseDelay: 800,
  },
};

// Bot messages
export const BOT_MESSAGES = {
  greeting: "Meow! I'm Juan, a friendly cat bot. Ready to help you get to know my awesome human!",
  fallback: (text) => `Meow!`,
};
