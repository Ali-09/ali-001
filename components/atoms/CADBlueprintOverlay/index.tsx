import React from 'react';

const CADBlueprintOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {/* Marco CAD de Lienzo Principal (Enmarcado entre Header, Footer y SideNav) */}
      <div className="absolute top-20 bottom-12 left-4 md:left-64 right-4 md:right-6 border border-lines/20 rounded-sm">
        {/* Esquina Superior Izquierda */}
        <div className="absolute -top-2.5 -left-1 font-mono text-[9px] text-secondary/40 flex items-center gap-1 bg-background px-1">
          <span className="text-accent/60 font-bold">┌</span>
          <span>SYS.ORIGIN [0,0]</span>
        </div>

        {/* Esquina Superior Derecha */}
        <div className="absolute -top-2.5 -right-1 font-mono text-[9px] text-secondary/40 flex items-center gap-1 bg-background px-1">
          <span>DATUM.REF [1400,0]</span>
          <span className="text-accent/60 font-bold">┐</span>
        </div>

        {/* Esquina Inferior Izquierda */}
        <div className="absolute -bottom-2.5 -left-1 font-mono text-[9px] text-secondary/40 flex items-center gap-1 bg-background px-1">
          <span className="text-accent/60 font-bold">└</span>
          <span>FRAME.LIMIT [0,900]</span>
        </div>

        {/* Esquina Inferior Derecha */}
        <div className="absolute -bottom-2.5 -right-1 font-mono text-[9px] text-secondary/40 flex items-center gap-1 bg-background px-1">
          <span>CAD.LAYER // v2.4</span>
          <span className="text-accent/60 font-bold">┘</span>
        </div>

        {/* Cruces Cuadrantes Reticulares Internas (+ Marks) */}
        <div className="absolute top-6 left-6 font-mono text-[10px] text-secondary/25">+</div>
        <div className="absolute top-6 right-6 font-mono text-[10px] text-secondary/25">+</div>
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-secondary/25">+</div>
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-secondary/25">+</div>
      </div>
    </div>
  );
};

export default CADBlueprintOverlay;
