import { LinkItem } from "components";

interface Tag {
  title: string;
  section: string;
}

const SideMenu = () => {
  const tags: Tag[] = [
    { title: "ME", section: "/" },
    { title: "ABOUT", section: "about" },
    { title: "CONTACT", section: "contact" },
  ];

  return (
    <aside className="aside w-full md:w-60 lg:w-64 border-b md:border-b-0 md:border-r border-lines/60 p-5 flex flex-col justify-between items-center bg-surface/80 backdrop-blur-md shrink-0 shadow-sm transition-colors duration-300">
      <div className="w-full flex flex-col items-center my-auto">
        {/* CAD Navigation Header Label */}
        <div className="w-full font-mono text-xs text-primary font-bold uppercase tracking-widest mb-6 flex items-center justify-between px-2 select-none border-b border-lines/60 pb-3">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>SHEETS // NAV.SYS</span>
          </span>
          <span className="text-[10px] text-secondary font-mono">v2.4</span>
        </div>

        {/* Navigation Sheet Buttons (Centered Options) */}
        <div className="w-full flex flex-row md:flex-col justify-center items-center gap-3">
          {tags.map((tag: Tag, k: number) => (
            <LinkItem tag={tag} index={k + 1} key={k} />
          ))}
        </div>
      </div>

      {/* CAD Sidebar Technical Footer */}
      <div className="hidden md:block w-full font-mono text-[10px] text-secondary pt-6 border-t border-lines/60 uppercase tracking-widest space-y-1 select-none mt-auto">
        <div className="flex justify-between">
          <span>SCALE:</span>
          <span className="text-primary font-bold">1:1</span>
        </div>
        <div className="flex justify-between">
          <span>SYSTEM:</span>
          <span className="text-accent font-bold">ONLINE [NOMINAL]</span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
