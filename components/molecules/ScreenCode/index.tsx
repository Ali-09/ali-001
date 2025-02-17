import { useState, useEffect } from "react";
import { FragmentCode } from "components";

const ScreenCode = () => {
  const [lines, setLines] = useState<JSX.Element[]>([]);
  
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
    <div className="device">
      <div id="code_lines" className="code-lines">
        <div className="flex flex-wrap relative p-1">{lines}</div>
      </div>
    </div>
  );
};

export default ScreenCode;
