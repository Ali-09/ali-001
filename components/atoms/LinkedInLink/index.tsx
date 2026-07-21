import React from 'react';

const LinkedInLink: React.FC = () => {
  return (
    <a 
      target="_blank" 
      href="https://www.linkedin.com/in/jesusrdzali/" 
      rel="noreferrer"
      aria-label="LinkedIn Profile"
      className="font-mono text-xs px-3 py-1.5 rounded-md border border-lines hover:border-accent text-secondary hover:text-accent bg-surface transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-sm hover:scale-[1.04] active:scale-95 group"
      title="LinkedIn Profile"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        role="img" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform duration-200"
      >
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
      <span className="font-semibold text-[11px] hidden lg:inline">LINKEDIN</span>
    </a>
  );
};

export default LinkedInLink;