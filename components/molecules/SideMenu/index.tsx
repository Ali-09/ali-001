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
    <aside className="aside w-full md:w-52 lg:w-60 border-b md:border-b-0 md:border-r border-lines/40 p-4 flex flex-col justify-between bg-surface/30 backdrop-blur-sm shrink-0">
      <div>
        {/* CAD Navigation Header Label */}
        <div className="font-mono text-[10px] text-secondary/70 uppercase tracking-widest mb-4 flex items-center justify-between px-1 select-none border-b border-lines/30 pb-2">
          <span className="flex items-center gap-1.5 font-bold text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span>SHEETS // NAV.SYS</span>
          </span>
          <span className="text-[9px] text-secondary/50 font-normal">CAD-VIEW</span>
        </div>

        {/* Navigation Sheet Buttons */}
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
          {tags.map((tag: Tag, k: number) => (
            <LinkItem tag={tag} index={k + 1} key={k} />
          ))}
        </div>
      </div>

      {/* CAD Sidebar Technical Footer */}
      <div className="hidden md:block font-mono text-[9px] text-secondary/50 pt-4 border-t border-lines/30 uppercase tracking-widest space-y-1 select-none">
        <div className="flex justify-between">
          <span>SCALE:</span>
          <span className="text-primary font-semibold">1:1</span>
        </div>
        <div className="flex justify-between">
          <span>SYSTEM:</span>
          <span className="text-primary font-semibold">NOMINAL</span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
