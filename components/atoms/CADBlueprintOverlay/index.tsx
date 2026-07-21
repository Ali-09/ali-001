import React from 'react';

const CADBlueprintOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {/* Marco CAD de Lienzo Principal (Enmarcado entre Header, Footer y SideNav) */}
      <div className="absolute top-28 sm:top-24 bottom-10 sm:bottom-12 left-4 sm:left-8 md:left-64 right-4 sm:right-8 md:right-6 border border-lines/25 rounded-sm">
        {/* Línea Láser de Escaneo Sutil */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent shadow-[0_0_8px_rgba(255,182,72,0.3)] animate-laser-scan"></div>

        {/* Esquina Superior Izquierda con bloque de título de ingeniería */}
        <div className="absolute -top-2.5 -left-1 font-mono text-[9px] text-secondary/50 flex items-center gap-1.5 bg-background px-1.5">
          <span className="text-accent font-bold">┌</span>
          <span className="hidden xs:inline">SYS.ORIGIN [0,0]</span>
          <span className="text-lines font-bold hidden sm:inline">|</span>
          <span className="hidden sm:inline">DRAWN BY: J. ALI</span>
        </div>

        {/* Esquina Superior Derecha */}
        <div className="absolute -top-2.5 -right-1 font-mono text-[9px] text-secondary/50 flex items-center gap-1.5 bg-background px-1.5">
          <span className="hidden sm:inline font-mono">PROJ: BLUEPRINT-V2</span>
          <span className="text-lines font-bold hidden sm:inline">|</span>
          <span className="hidden xs:inline">DATUM.REF [1400,0]</span>
          <span className="text-accent font-bold">┐</span>
        </div>

        {/* Esquina Inferior Izquierda */}
        <div className="absolute -bottom-2.5 -left-1 font-mono text-[9px] text-secondary/50 flex items-center gap-1.5 bg-background px-1.5">
          <span className="text-accent font-bold">└</span>
          <span className="hidden xs:inline">FRAME.LIMIT [0,900]</span>
          <span className="text-lines font-bold hidden sm:inline">|</span>
          <span className="hidden sm:inline">SCALE: NTS</span>
        </div>

        {/* Esquina Inferior Derecha */}
        <div className="absolute -bottom-2.5 -right-1 font-mono text-[9px] text-secondary/50 flex items-center gap-1.5 bg-background px-1.5">
          <span className="hidden sm:inline">SHEET: DA-001/008</span>
          <span className="text-lines font-bold hidden sm:inline">|</span>
          <span className="hidden xs:inline">CAD.LAYER // v2.4</span>
          <span className="text-accent font-bold">┘</span>
        </div>

        {/* Marcadores de Ejes Técnicos Superiores (AXIS Markers) */}
        <div className="hidden lg:flex absolute -top-2.5 left-1/4 -translate-x-1/2 font-mono text-[9px] text-secondary/40 bg-background px-1.5 items-center gap-1">
          <span className="text-accent/60">▼</span>
          <span>AXIS: A-01</span>
        </div>
        <div className="hidden lg:flex absolute -top-2.5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-secondary/40 bg-background px-1.5 items-center gap-1">
          <span className="text-accent/60">▼</span>
          <span>AXIS: B-02</span>
        </div>
        <div className="hidden lg:flex absolute -top-2.5 left-3/4 -translate-x-1/2 font-mono text-[9px] text-secondary/40 bg-background px-1.5 items-center gap-1">
          <span className="text-accent/60">▼</span>
          <span>AXIS: C-03</span>
        </div>

        {/* Marcadores de Referencia Lateral Derecha */}
        <div className="hidden lg:flex absolute top-1/3 -right-3 -translate-y-1/2 font-mono text-[8px] text-secondary/35 bg-background px-1 rotate-90 items-center gap-1">
          <span>REF: Y-250</span>
        </div>
        <div className="hidden lg:flex absolute top-2/3 -right-3 -translate-y-1/2 font-mono text-[8px] text-secondary/35 bg-background px-1 rotate-90 items-center gap-1">
          <span>REF: Y-650</span>
        </div>

        {/* Anotaciones de Cabecera Interna de Lienzo */}
        <div className="hidden xl:flex absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] text-secondary/25 uppercase tracking-widest items-center gap-3">
          <span>┌──</span>
          <span>TECHNICAL DRAFTING CANVAS // REF-CAD-SYSTEM-2026</span>
          <span>──┐</span>
        </div>

        {/* Nodos de Diana Cuadrantes CAD (Target Reticles ⊕) */}
        <div className="absolute top-6 left-6 font-mono text-[10px] text-accent/50 flex items-center gap-1 animate-pulse">
          <span>⊕</span>
          <span className="text-[8px] text-secondary/30 hidden lg:inline">NODE-01</span>
        </div>
        <div className="absolute top-6 right-6 font-mono text-[10px] text-accent/50 flex items-center gap-1 animate-pulse">
          <span className="text-[8px] text-secondary/30 hidden lg:inline">NODE-02</span>
          <span>⊕</span>
        </div>
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-accent/50 flex items-center gap-1 animate-pulse">
          <span>⊕</span>
          <span className="text-[8px] text-secondary/30 hidden lg:inline">NODE-03</span>
        </div>
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-accent/50 flex items-center gap-1 animate-pulse">
          <span className="text-[8px] text-secondary/30 hidden lg:inline">NODE-04</span>
          <span>⊕</span>
        </div>

        {/* Cruces Cuadrantes Intermedias en el Lienzo (+ Marks) */}
        <div className="absolute top-1/3 left-1/3 font-mono text-[10px] text-secondary/20">+</div>
        <div className="absolute top-1/3 right-1/3 font-mono text-[10px] text-secondary/20">+</div>
        <div className="absolute bottom-1/3 left-1/3 font-mono text-[10px] text-secondary/20">+</div>
        <div className="absolute bottom-1/3 right-1/3 font-mono text-[10px] text-secondary/20">+</div>
      </div>
    </div>
  );
};

export default CADBlueprintOverlay;
