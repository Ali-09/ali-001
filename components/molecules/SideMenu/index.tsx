import React from "react";
import { LinkItem } from "components";

interface Tag {
  title: string;
  section: string;
  index: string;
}

const SideMenu: React.FC = () => {
  const tags: Tag[] = [
    { title: "ME", section: "/", index: "01" },
    { title: "ABOUT", section: "about", index: "02" },
    { title: "CONTACT", section: "contact", index: "03" },
  ];

  return (
    <aside className="aside flex flex-col justify-center px-2 py-4 md:py-8 md:px-4 w-full md:w-64 shrink-0">
      <div className="border border-lines/60 rounded-lg p-3 bg-surface/30 backdrop-blur-sm shadow-sm flex flex-col gap-1 relative">
        {/* Marcas de Esquina CAD */}
        <div className="absolute -top-1.5 -left-1.5 text-[9px] font-mono text-secondary/40 select-none">+</div>
        <div className="absolute -top-1.5 -right-1.5 text-[9px] font-mono text-secondary/40 select-none">+</div>
        <div className="absolute -bottom-1.5 -left-1.5 text-[9px] font-mono text-secondary/40 select-none">+</div>
        <div className="absolute -bottom-1.5 -right-1.5 text-[9px] font-mono text-secondary/40 select-none">+</div>

        {/* Encabezado del Panel de Navegación */}
        <div className="flex items-center justify-between pb-2 border-b border-lines/40 mb-1 px-1">
          <span className="font-mono text-[10px] text-secondary/70 uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            SEC.NAV // INDEX
          </span>
          <span className="font-mono text-[9px] text-secondary/50">SYS.v2</span>
        </div>

        {/* Lista de Enlaces */}
        <div className="flex flex-row md:flex-col justify-around md:justify-start gap-1">
          {tags.map((tag: Tag, k: number) => (
            <LinkItem tag={tag} key={k} />
          ))}
        </div>

        {/* Pie de guía CAD del Menú Lateral */}
        <div className="hidden md:flex items-center justify-between pt-2 border-t border-lines/30 mt-1 px-1 font-mono text-[9px] text-secondary/50">
          <span>NAVIGATION TRACK</span>
          <span className="text-accent font-semibold">● ACTIVE</span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
