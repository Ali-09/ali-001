import React, { useContext } from "react";
import Context from "context/Context";
import { LinkItem } from "components";

interface Tag {
  title: string;
  section: string;
}

const SideMenu = () => {
  const context = useContext(Context);
  const t = context?.t;

  const tags: Tag[] = [
    { title: t?.sideNav.me || "ME", section: "/" },
    { title: t?.sideNav.about || "ABOUT", section: "about" },
    { title: t?.sideNav.contact || "CONTACT", section: "contact" },
  ];

  return (
    <aside className="aside w-full md:w-60 lg:w-64 px-3 py-2 md:p-6 flex flex-col justify-between items-center bg-transparent shrink-0 transition-colors duration-300 h-auto md:h-full">
      {/* CAD Navigation Header Label */}
      <div className="w-full font-mono text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest flex items-center justify-between px-1.5 select-none pb-1.5 sm:pb-3">
        <span className="flex items-center gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent animate-pulse"></span>
          <span>{t?.sideNav.navSys || "SHEETS // NAV.SYS"}</span>
        </span>
        <span className="text-[9px] sm:text-[10px] text-secondary font-mono">v2.4</span>
      </div>

      {/* Navigation Sheet Buttons (Perfectly Centered with Container Content) */}
      <div className="w-full flex flex-row md:flex-col justify-center items-center gap-1.5 sm:gap-3.5 my-0 md:my-auto py-1 sm:py-4">
        {tags.map((tag: Tag, k: number) => (
          <LinkItem tag={tag} index={k + 1} key={k} />
        ))}
      </div>

      {/* CAD Sidebar Technical Footer */}
      <div className="hidden md:block w-full font-mono text-[10px] text-secondary pt-4 uppercase tracking-widest space-y-1 select-none">
        <div className="flex justify-between">
          <span>{t?.sideNav.scale || "SCALE:"}</span>
          <span className="text-primary font-bold">1:1</span>
        </div>
        <div className="flex justify-between">
          <span>{t?.sideNav.system || "SYSTEM:"}</span>
          <span className="text-accent font-bold">ONLINE [NOMINAL]</span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
