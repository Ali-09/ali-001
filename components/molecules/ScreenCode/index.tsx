import React, { useState, useEffect } from "react";
import { FragmentCode } from "components";

const ScreenCode = () => {
  const [lines, setLines] = useState<React.JSX.Element[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => {
        if (prevLines.length < 75) {
          return [...prevLines, <FragmentCode key={prevLines.length} />];
        } else {
          clearInterval(interval);
          return prevLines;
        }
      });

      const codeContainer = document.getElementById("code_lines");
      if (codeContainer) {
        codeContainer.scrollTo({ top: codeContainer.scrollHeight, behavior: "smooth" });
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="device w-full">
      <div id="code_lines" className="code-lines flex flex-col">
        {/* Encabezado de Ventana Técnica CAD */}
        <div className="bg-surface border-b border-lines px-3 py-1.5 flex items-center justify-between font-mono text-[10px] text-secondary/70 shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-lines/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-lines/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-lines/60"></span>
          </div>
          <span className="tracking-wider uppercase">SYSTEM_SIMULATOR // CODE_STREAM.sh</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        </div>
        
        {/* Contenedor de líneas pulsantes */}
        <div className="flex flex-wrap relative p-2 overflow-y-auto grow">
          {lines}
        </div>
      </div>
    </div>
  );
};

export default ScreenCode;
