import React, { useContext } from "react";
import Context from "context/Context";
import { SideMenu, Container, Header, CADBlueprintOverlay } from "components";

interface IProps {
  children: React.ReactNode;
}

const CoreTemplate: React.FC<IProps> = ({ children }) => {
  const context = useContext(Context);
  const t = context?.t;

  return (
    <div className="main flex flex-col justify-between h-screen overflow-hidden relative">
      <CADBlueprintOverlay />
      <Header/>
      <div className="content relative z-10">
          <SideMenu />
          <Container>{children}</Container>
      </div>
      {/* Pie de página tipo Bloque de Título de Ingeniería CAD */}
      <footer className="w-full py-1.5 sm:py-2 px-3 sm:px-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[9px] sm:text-[10px] text-secondary/70 tracking-wider relative z-10 bg-transparent gap-1 select-none shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-3 text-center">
          <span>{t?.footer.engId || "ENG.ID: JESUS ALI"}</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">{t?.footer.role || "ROLE: SENIOR FRONTEND DEVELOPER"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{t?.footer.systemStatus || "SYSTEM STATUS: ONLINE [NOMINAL]"}</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span>FRAMEWORK: NEXT.JS 16</span>
          <span>|</span>
          <span>ENGINE: TURBOPACK</span>
        </div>
      </footer>
    </div>
  );
};

export default CoreTemplate;