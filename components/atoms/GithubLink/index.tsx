import React from 'react';

const GithubLink: React.FC = () => {
  return (
    <a 
      target="_blank" 
      rel="noreferrer" 
      href="https://github.com/ali-09"
      aria-label="GitHub Profile"
      className="w-9 h-9 md:w-10 md:h-10 border border-lines/60 hover:border-accent bg-surface/40 hover:bg-surface text-secondary hover:text-accent rounded-md flex items-center justify-center p-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm group cursor-pointer ml-2"
      title="GitHub Profile"
    >
      <svg 
        role="img" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.75" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-4 h-4 md:w-5 md:h-5 transition-colors duration-200"
      >
        <title>Github</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
  );
};

export default GithubLink;