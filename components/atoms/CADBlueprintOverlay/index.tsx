import React from 'react';

const CADBlueprintOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {/* Marco CAD perimetral con marcas L en esquinas */}
      <div className="absolute inset-3 md:inset-6 border border-lines/25 rounded-sm">
        {/* Esquina Superior Izquierda */}
        <div className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-secondary/40 flex items-center gap-1">
          <span className="text-accent/60 font-bold">┌</span>
          <span className="hidden sm:inline">SYS.ORIGIN [0,0]</span>
        </div>

        {/* Esquina Superior Derecha */}
        <div className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-secondary/40 flex items-center gap-1">
          <span className="hidden sm:inline">DATUM.REF [1400,0]</span>
          <span className="text-accent/60 font-bold">┐</span>
        </div>

        {/* Esquina Inferior Izquierda */}
        <div className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-secondary/40 flex items-center gap-1">
          <span className="text-accent/60 font-bold">└</span>
          <span className="hidden sm:inline">FRAME.LIMIT [0,900]</span>
        </div>

        {/* Esquina Inferior Derecha */}
        <div className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-secondary/40 flex items-center gap-1">
          <span className="hidden sm:inline">CAD.LAYER // v2.4</span>
          <span className="text-accent/60 font-bold">┘</span>
        </div>
      </div>

      {/* Regla de Ticks de Coordenadas X en el borde superior */}
      <div className="hidden lg:flex absolute top-2 left-12 right-12 justify-between font-mono text-[9px] text-secondary/30">
        <span>X-000</span>
        <span>X-200</span>
        <span>X-400</span>
        <span>X-600</span>
        <span>X-800</span>
        <span>X-1000</span>
        <span>X-1200</span>
      </div>

      {/* Regla de Ticks de Coordenadas Y en el borde lateral izquierdo */}
      <div className="hidden lg:flex absolute top-16 bottom-16 left-2 flex-col justify-between font-mono text-[9px] text-secondary/30">
        <span>Y-000</span>
        <span>Y-200</span>
        <span>Y-400</span>
        <span>Y-600</span>
        <span>Y-800</span>
      </div>

      {/* Cruces Cuadrantes CAD Reticulares (+ Marks) */}
      <div className="absolute top-1/4 left-8 font-mono text-[11px] text-secondary/30">+</div>
      <div className="absolute top-1/4 right-8 font-mono text-[11px] text-secondary/30">+</div>
      <div className="absolute bottom-1/4 left-8 font-mono text-[11px] text-secondary/30">+</div>
      <div className="absolute bottom-1/4 right-8 font-mono text-[11px] text-secondary/30">+</div>

      {/* Línea Guía de Cota Punteada Horizontal */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 border-b border-dashed border-lines/15"></div>
    </div>
  );
};

export default CADBlueprintOverlay;
