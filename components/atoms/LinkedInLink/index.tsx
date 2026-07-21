import React from 'react';

const LinkedInLink: React.FC = () => {
  return (
    <a 
      target="_blank" 
      href="https://www.linkedin.com/in/jesusrdzali/" 
      rel="noreferrer"
      aria-label="LinkedIn Profile"
      className="w-9 h-9 md:w-10 md:h-10 border border-lines/60 hover:border-accent bg-surface/40 hover:bg-surface text-secondary hover:text-accent rounded-md flex items-center justify-center p-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm group cursor-pointer"
      title="LinkedIn Profile"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        role="img" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.75" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-4 h-4 md:w-5 md:h-5 transition-colors duration-200"
      >
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
  );
};

export default LinkedInLink;