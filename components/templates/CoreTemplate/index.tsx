import React from "react";
import { SideMenu, Container, Header } from "components";

interface IProps {
  children: React.ReactNode;
}

const CoreTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <div className="main flex flex-col justify-between h-screen overflow-hidden bg-background text-primary transition-colors duration-300">
      <Header />

      {/* Barra de Cota / Regla Superior CAD Decorative Bar */}
      <div className="w-full border-b border-lines/30 py-1 px-6 lg:px-12 flex items-center justify-between font-mono text-[9px] text-secondary/60 select-none bg-surface/20 shrink-0">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            <span>AXIS-X // 0000..1400px</span>
          </span>
          <span className="hidden md:inline text-lines">|</span>
          <span className="hidden md:inline">TICK-INTERVAL: 40px</span>
        </div>
        
        {/* Marcadores de regla de cota SVG */}
        <div className="hidden sm:flex items-center gap-2 text-lines font-mono">
          <span>+---</span><span>|</span><span>---</span><span>|</span><span>---</span><span>|</span><span>---+</span>
          <span className="text-secondary/80 px-2 font-semibold">STAGE_VIEWPORT</span>
          <span>+---</span><span>|</span><span>---</span><span>|</span><span>---</span><span>|</span><span>---+</span>
        </div>

        <div className="flex items-center gap-3">
          <span>COORDINATES: X-245 Y-980</span>
          <span>|</span>
          <span className="text-accent font-semibold">CAD.LAYER: 01</span>
        </div>
      </div>

      {/* Área de Contenido Principal con Retículas de Esquina */}
      <div className="content relative grow flex flex-col md:flex-row overflow-hidden">
        {/* Retículas de Esquina CAD HUD */}
        <div className="absolute top-2 left-2 text-[9px] font-mono text-secondary/30 pointer-events-none select-none hidden md:block">
          ┌- [0,0]
        </div>
        <div className="absolute top-2 right-2 text-[9px] font-mono text-secondary/30 pointer-events-none select-none hidden md:block">
          [1400,0] -┐
        </div>
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-secondary/30 pointer-events-none select-none hidden md:block">
          └- [0,900]
        </div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-secondary/30 pointer-events-none select-none hidden md:block">
          [1400,900] -┘
        </div>

        <SideMenu />
        <Container>{children}</Container>
      </div>

      {/* Barra de Cota / Regla Inferior CAD Decorative Bar */}
      <div className="w-full border-t border-lines/30 py-1 px-6 lg:px-12 flex items-center justify-between font-mono text-[9px] text-secondary/60 select-none bg-surface/20 shrink-0">
        <div className="flex items-center gap-3">
          <span>ORIGIN: (0,0,0)</span>
          <span>|</span>
          <span>GRID_DENSITY: FINE</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-secondary/50">
          <span>● ENGINE: TURBOPACK 16</span>
          <span>—</span>
          <span>SYSTEM DIAGNOSTIC: PASS</span>
        </div>
        <div className="flex items-center gap-3">
          <span>FRAME_RATE: 60FPS</span>
          <span>|</span>
          <span className="text-accent">DRAFTMODE: OFF</span>
        </div>
      </div>

      {/* Pie de página tipo Bloque de Título de Ingeniería CAD */}
      <footer className="w-full border-t border-lines/40 py-2 px-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-secondary/60 tracking-wider bg-background">
        <div className="flex items-center gap-3">
          <span>ENG.ID: JESUS ALI</span>
          <span className="hidden sm:inline">|</span>
          <span>ROLE: SENIOR FRONTEND DEVELOPER</span>
        </div>
        <div className="flex items-center gap-2 my-1 sm:my-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-secondary/80">SYSTEM STATUS: ONLINE [NOMINAL]</span>
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