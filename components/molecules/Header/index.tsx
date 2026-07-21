import React, { useEffect, useState, useContext } from 'react';
import Context from 'context/Context';
import { LinkedInLink, GithubLink } from "components";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const context = useContext(Context);

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

  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 245, y: 980 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleLang = () => {
    if (context) {
      context.setLang(context.lang === 'es' ? 'en' : 'es');
    }
  };

  const t = context?.t;
  const currentLang = context?.lang || 'es';

  return (
    <header className="header pb-2 sm:pb-4 pt-3 sm:pt-6 px-3 sm:px-6 lg:px-12 flex flex-row items-center justify-between bg-transparent transition-colors duration-300">
      {/* Brand CAD Stamp */}
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        <div className="font-mono text-xs xs:text-sm sm:text-lg md:text-xl font-bold tracking-wider text-primary flex items-center gap-1 sm:gap-2 select-none">
          <span className="text-accent font-bold">[</span>
          <span className="whitespace-nowrap">JESUS ALI</span>
          <span className="text-secondary text-xs font-semibold hidden sm:inline">// DEV.SYS</span>
          <span className="text-accent font-bold">]</span>
        </div>
      </div>

      {/* Center CAD Metadata */}
      <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-secondary uppercase tracking-widest bg-surface border border-lines px-3.5 py-1.5 rounded-full shadow-sm">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="font-semibold text-primary">{t?.header.sysRef || "SYS.REF: CAD-001"}</span>
        </span>
        <span className="text-lines font-bold">|</span>
        <span className="font-semibold">REV 2.4</span>
        <span className="text-lines font-bold">|</span>
        <span className="font-mono text-accent font-semibold">POS: X-{coords.x.toString().padStart(4, '0')} Y-{coords.y.toString().padStart(4, '0')}</span>
      </div>

      {/* Theme Toggle, Language Toggle & Social Links */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        <button 
          onClick={toggleLang}
          className="font-mono text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-lines hover:border-accent text-secondary hover:text-accent bg-surface hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-sm select-none"
          title="Switch Language / Cambiar Idioma"
        >
          <span className="text-accent font-bold">🌐</span>
          <span className="font-semibold">{currentLang === 'es' ? 'ES' : 'EN'}</span>
        </button>

        <button 
          onClick={toggleTheme}
          className="font-mono text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-lines hover:border-accent text-secondary hover:text-accent bg-surface hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-sm select-none"
          title="Toggle CAD Theme"
        >
          <span className="font-semibold">{isDark ? (t?.header.darkTheme || '🌙 DARK') : (t?.header.lightTheme || '☀️ LIGHT')}</span>
        </button>

        <div className="flex items-center border-l border-lines pl-1.5 sm:pl-2.5">
          <LinkedInLink/>
          <GithubLink/>
        </div>
      </div>
    </header>
  );
};

export default Header;