import { useEffect, useState, useCallback, useRef, useContext } from "react";
import Context from "context/Context";
import { useRouter } from "next/router";

const MainTitle = () => {
  const [sentece, setSentence] = useState<string>("");
  const context = useContext(Context);
  const router = useRouter();

  // Secuencia de tipeo con equivocación "JSSSA", borrado y corrección a "JESUS ALI"
  const sequence = [
    "J", "JS", "JSS", "JSSS", "JSSSA", // Equivocación
    "JSSS", "JSS", "JS", "J",           // Borrado (Backspace)
    "JE", "JES", "JESU", "JESUS", "JESUS ", "JESUS A", "JESUS AL", "JESUS ALI" // Corrección
  ];

  const indexRef = useRef<number>(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runSequence = () => {
      if (indexRef.current < sequence.length) {
        const currentText = sequence[indexRef.current];
        setSentence(currentText);

        let delay = 100;
        // Pausa al equivocarse y antes de corregir
        if (currentText === "JSSSA") {
          delay = 450;
        } else if (currentText === "J" && indexRef.current > 3) {
          delay = 250;
        } else if (currentText === "JESUS ALI") {
          return;
        }

        indexRef.current++;
        timeoutId = setTimeout(runSequence, delay);
      }
    };

    runSequence();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      indexRef.current = 0;
    };
  }, []);

  const handleNavigate = (path: string) => {
    if (context) context.setSection(path);
    router.push(path);
  };

  return (
    <div className="title-me flex flex-col justify-center">
      <div className="font-mono text-[11px] text-secondary/70 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        <span>FIG 01 // MAIN_VIEW — POS: X-245 Y-980</span>
      </div>
      <div className="flex items-center">
        <h1 className="text-5xl md:text-7xl whitespace-pre">{sentece}</h1>
        <p className="text-5xl md:text-7xl animate-fade text-accent">|</p>
      </div>
      <p className="text-2xl md:text-3xl text-accent font-mono mt-1">Senior Front End Developer</p>
      
      {/* Botones de Acción Técnico CAD */}
      <div className="flex flex-wrap gap-3 mt-6">
        <button 
          onClick={() => handleNavigate('about')}
          className="btn text-sm px-4 py-1.5 h-auto rounded-md cursor-pointer font-mono tracking-wider"
        >
          EXPLORE SYSTEM →
        </button>
        <button 
          onClick={() => handleNavigate('contact')}
          className="btn text-sm px-4 py-1.5 h-auto rounded-md cursor-pointer font-mono tracking-wider border-lines text-secondary hover:border-accent hover:text-accent"
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default MainTitle;
