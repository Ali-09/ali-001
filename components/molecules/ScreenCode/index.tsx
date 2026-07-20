import React, { useState, useEffect, useRef } from "react";

interface Token {
  text: string;
  className?: string;
}

interface CodeLine {
  num: string;
  tokens: Token[];
}

const codeSnippets: CodeLine[] = [
  { num: "01", tokens: [{ text: "// CAD Blueprint Systems Engine", className: "text-secondary/60 italic" }] },
  { num: "02", tokens: [{ text: "interface", className: "text-accent font-semibold" }, { text: " Developer ", className: "text-primary font-semibold" }, { text: "{" }] },
  { num: "03", tokens: [{ text: "  name", className: "text-secondary" }, { text: ": ", className: "text-primary" }, { text: "string", className: "text-amber-600 dark:text-amber-400 font-mono" }, { text: ";" }] },
  { num: "04", tokens: [{ text: "  role", className: "text-secondary" }, { text: ": ", className: "text-primary" }, { text: "string", className: "text-amber-600 dark:text-amber-400 font-mono" }, { text: ";" }] },
  { num: "05", tokens: [{ text: "  stack", className: "text-secondary" }, { text: ": ", className: "text-primary" }, { text: "string[]", className: "text-amber-600 dark:text-amber-400 font-mono" }, { text: ";" }] },
  { num: "06", tokens: [{ text: "  status", className: "text-secondary" }, { text: ": ", className: "text-primary" }, { text: "'ONLINE' | 'BUILDING'", className: "text-emerald-600 dark:text-emerald-400" }, { text: ";" }] },
  { num: "07", tokens: [{ text: "}" }] },
  { num: "08", tokens: [{ text: "" }] },
  { num: "09", tokens: [{ text: "const", className: "text-accent font-semibold" }, { text: " engineer", className: "text-primary font-medium" }, { text: ": ", className: "text-primary" }, { text: "Developer", className: "text-accent" }, { text: " = {" }] },
  { num: "10", tokens: [{ text: "  name", className: "text-secondary" }, { text: ": ", className: "text-primary" }, { text: "'Jesus Ali'", className: "text-emerald-600 dark:text-emerald-400" }, { text: "," }] },
  { num: "11", tokens: [{ text: "  role", className: "text-secondary" }, { text: ": ", className: "text-primary" }, { text: "'Senior Front End Developer'", className: "text-emerald-600 dark:text-emerald-400" }, { text: "," }] },
  { num: "12", tokens: [{ text: "  stack", className: "text-secondary" }, { text: ": [", className: "text-primary" }, { text: "'React'", className: "text-emerald-600 dark:text-emerald-400" }, { text: ", " }, { text: "'TypeScript'", className: "text-emerald-600 dark:text-emerald-400" }, { text: ", " }, { text: "'Next.js'", className: "text-emerald-600 dark:text-emerald-400" }, { text: "]," }] },
  { num: "13", tokens: [{ text: "  status", className: "text-secondary" }, { text: ": ", className: "text-primary" }, { text: "'ONLINE'", className: "text-emerald-600 dark:text-emerald-400" }] },
  { num: "14", tokens: [{ text: "};" }] },
  { num: "15", tokens: [{ text: "" }] },
  { num: "16", tokens: [{ text: "export default", className: "text-accent font-semibold" }, { text: " engineer;", className: "text-primary font-medium" }] },
];

const ScreenCode: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < codeSnippets.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="device w-full">
      <div id="code_lines" className="code-lines flex flex-col font-mono text-xs md:text-sm shadow-md">
        {/* Encabezado de Ventana Técnica CAD */}
        <div className="bg-surface border-b border-lines px-3 py-2 flex items-center justify-between font-mono text-[10px] text-secondary/70 shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-lines/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-lines/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-lines/60"></span>
          </div>
          <span className="tracking-wider uppercase font-semibold text-secondary">
            SYSTEM_SIMULATOR // CODE_STREAM.ts
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        </div>
        
        {/* Contenedor de Código con Resaltado de Sintaxis */}
        <div ref={containerRef} className="p-4 overflow-hidden pointer-events-none select-none grow leading-relaxed space-y-1 bg-surface/50 backdrop-blur-sm">
          {codeSnippets.slice(0, visibleLines).map((line, idx) => (
            <div key={idx} className="flex items-center hover:bg-lines/10 px-1 rounded transition-colors duration-150">
              <span className="text-secondary/40 select-none mr-3 text-[11px] w-6 text-right shrink-0 border-r border-lines/30 pr-2">
                {line.num}
              </span>
              <div className="whitespace-pre">
                {line.tokens.map((token, tIdx) => (
                  <span key={tIdx} className={token.className}>
                    {token.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {visibleLines < codeSnippets.length && (
            <div className="flex items-center pl-9">
              <span className="w-2 h-4 bg-accent animate-pulse"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenCode;
