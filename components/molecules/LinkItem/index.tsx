import { useContext } from 'react';
import OpenTagIcon from 'public/icons/o-tag.svg';
import EndTagIcon from 'public/icons/e-tag.svg';
import Context from 'context/Context';
import { useRouter } from 'next/router';

interface IProps {
  tag: {
    section: string;
    title: string;
  };
  index: number;
}

const LinkItem = ({ tag, index }: IProps) => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Container debe estar dentro del proveedor de contexto");
  }

  const { section, setSection } = context;
  const isActive = section === tag.section;
  const router = useRouter();

  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setSection(tag.section);
        router.push(tag.section);
      }}
      className={`group w-full flex items-center justify-between px-3 py-2.5 rounded-md border text-left font-mono transition-all duration-200 cursor-pointer ${
        isActive
          ? 'bg-accent/10 border-accent/60 text-accent shadow-sm'
          : 'border-transparent text-secondary hover:text-primary hover:bg-surface/50 hover:border-lines/40'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className={`text-xs select-none ${isActive ? 'text-accent font-bold' : 'text-secondary/50'}`}>
          {formattedIndex} //
        </span>
        <div className="flex items-center">
          <OpenTagIcon className="w-3.5 h-3.5 shrink-0 opacity-90 group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span className="text-sm md:text-base px-1 font-semibold tracking-wider">{tag.title}</span>
          <EndTagIcon className="w-3.5 h-3.5 shrink-0 opacity-90 group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </div>
      {isActive && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0"></span>
      )}
    </button>
  );
};

export default LinkItem;