import { useContext } from 'react';
import OpenTagIcon from 'public/icons/o-tag.svg';
import EndTagIcon from 'public/icons/e-tag.svg';
import Context from 'context/Context';
import { useRouter } from 'next/router';

interface IProps {
  tag: {
    section: string;
    title: string;
    index: string;
  };
}

const LinkItem = ({ tag }: IProps) => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Container debe estar dentro del proveedor de contexto");
  }

  const { section, setSection } = context;
  const isActive = section === tag.section;
  const router = useRouter();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setSection(tag.section);
        router.push(tag.section);
      }}
      className={`group w-full flex items-center justify-between px-3 py-2 my-1 rounded-md transition-all duration-200 cursor-pointer ${
        isActive
          ? 'bg-surface/90 border border-accent/50 shadow-sm text-accent font-semibold'
          : 'border border-transparent hover:border-lines/40 hover:bg-surface/40 text-secondary hover:text-primary'
      }`}
    >
      <div className="flex items-center gap-2">
        {/* Indicador de barra de estado dorada cuando está activo */}
        {isActive ? (
          <span className="w-1 h-5 rounded-full bg-accent animate-pulse shrink-0"></span>
        ) : (
          <span className="w-1 h-5 rounded-full bg-lines/30 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        )}
        
        {/* Número de Índice de Sección CAD */}
        <span className={`font-mono text-[11px] ${isActive ? 'text-accent' : 'text-secondary/50 group-hover:text-secondary'}`}>
          {tag.index}
        </span>

        {/* Etiqueta con Tags < > */}
        <div className="flex items-center hover:translate-x-0.5 transition-transform duration-200">
          <OpenTagIcon className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0 group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span className="text-sm md:text-base px-1.5 font-medium tracking-wide">
            {tag.title}
          </span>
          <EndTagIcon className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </div>

      {/* Flecha indicadora CAD cuando está activo */}
      {isActive && (
        <span className="font-mono text-xs text-accent animate-pulse select-none hidden md:inline">
          ←
        </span>
      )}
    </button>
  );
};

export default LinkItem;