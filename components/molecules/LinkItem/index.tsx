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
      className={`group w-full flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-3 rounded-md border font-mono transition-all duration-200 cursor-pointer ${
        isActive
          ? 'bg-accent/15 border-accent text-accent font-bold ring-1 ring-accent'
          : 'bg-transparent border-lines/60 text-primary hover:text-accent hover:border-accent hover:bg-surface/30'
      }`}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2.5 w-full">
        <span className={`text-[10px] sm:text-xs font-mono select-none hidden sm:inline ${isActive ? 'text-accent font-bold' : 'text-secondary font-semibold'}`}>
          {formattedIndex} //
        </span>
        <div className="flex items-center justify-center">
          <OpenTagIcon className={`w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 shrink-0 group-hover:-translate-x-0.5 transition-transform duration-200 ${isActive ? 'text-accent' : 'text-accent'}`} />
          <span className="text-[10px] xs:text-xs sm:text-sm md:text-base px-0.5 sm:px-1.5 font-bold tracking-wider uppercase whitespace-nowrap">{tag.title}</span>
          <EndTagIcon className={`w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200 ${isActive ? 'text-accent' : 'text-accent'}`} />
        </div>
      </div>
      {isActive && (
        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent animate-pulse shrink-0 ml-1"></span>
      )}
    </button>
  );
};

export default LinkItem;