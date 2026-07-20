import React, { useEffect, useState } from 'react';
import { LinkedInLink, GithubLink } from "components";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="header border-b border-lines/40 pb-4 pt-6 px-6 lg:px-12 flex flex-row items-center justify-between bg-background/50 backdrop-blur-md transition-colors duration-300">
      {/* Brand CAD Stamp */}
      <div className="flex items-center gap-3">
        <div className="font-mono text-lg md:text-xl font-bold tracking-wider text-primary flex items-center gap-2">
          <span className="text-accent font-bold">[</span>
          <span>JESUS ALI</span>
          <span className="text-secondary text-xs font-normal hidden sm:inline">// DEV.SYS</span>
          <span className="text-accent font-bold">]</span>
        </div>
      </div>

      {/* Center CAD Metadata */}
      <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-secondary/80 uppercase tracking-widest bg-surface/50 border border-lines/50 px-3 py-1 rounded-full">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span>SYS.REF: CAD-001</span>
        </span>
        <span>|</span>
        <span>REV 2.4</span>
        <span>|</span>
        <span>SCALE 1:1</span>
      </div>

      {/* Theme Toggle & Social Links */}
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className="font-mono text-xs px-2.5 py-1 rounded border border-lines/70 hover:border-accent text-secondary hover:text-accent hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5 bg-surface/40"
          title="Toggle CAD Theme"
        >
          <span>{isDark ? '☀️ LIGHT' : '🌙 DARK'}</span>
        </button>
        <div className="flex items-center border-l border-lines/50 pl-3">
          <LinkedInLink/>
          <GithubLink/>
        </div>
      </div>
    </header>
  );
};

export default Header;