import { useEffect, useState, useCallback, useRef } from "react";

const MainTitle = () => {
  const title: string = "JESUS ALI";
  const index = useRef<number>(0);
  const [sentece, setSentence] = useState<string>("");

  const typeWritten = useCallback(() => {
    let idTimeout: NodeJS.Timeout | null = null;
    if (index.current < title.length) {
      const arr = title.split("");
      idTimeout = setTimeout(() => {
        setSentence((sentence) => sentence + arr[index.current]);
        index.current++;
        typeWritten();
      }, 400);
    }
    return () => {
      if (idTimeout) clearTimeout(idTimeout);
    };
  }, []);

  useEffect(() => {
    typeWritten();
    return () => {
      index.current = 0;
      setSentence("");
    };
  }, [typeWritten]);

  return (
    <div className="title-me">
      <div className="flex items-center">
        <h1 className="text-5xl md:text-7xl whitespace-pre">{sentece}</h1>
        <p className="text-5xl md:text-7xl animate-fade">|</p>
      </div>
      <p className="text-2xl md:text-3xl text-red-400">Front End Developer</p>
    </div>
  );
};

export default MainTitle;
