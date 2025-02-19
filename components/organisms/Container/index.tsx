import { useContext, useEffect, useState, useRef, TouchEvent, WheelEvent } from 'react';
import { useRouter } from 'next/router';
// Context
import Context from 'context/Context';
// React Transition Group
import { SwitchTransition, CSSTransition } from 'react-transition-group';

interface ContainerProps {
  children: React.ReactNode;
}

export interface ContextType {
    section: string;
    setSection: (section: string) => void;
}

const Container = ({ children }: ContainerProps) => {
  const context = useContext(Context);
  
  if (!context) {
    throw new Error("Container debe estar dentro del proveedor de contexto");
  }
  
  // Obtener contexto
  const {section, setSection } = context;
  
  // Estado para animación y swipe
  const [animation, setAnimation] = useState<string>('sideDown');
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const idTimeout = useRef<NodeJS.Timeout | null>(null);
  const [swipeY, setSwipeY] = useState<number | null>(null);
  
  // Secciones
  const sections: string[] = ['/', 'about', 'contact'];
  
  // Router
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (idTimeout.current) clearTimeout(idTimeout.current);
    };
  }, []);

  // Obtener toques para dispositivos táctiles
  const getTouches = (evt: TouchEvent) => evt.touches;

  // Manejar inicio de toque
  const handleTouchStart = (e: TouchEvent) => {
    const firstTouch = getTouches(e)[0];
    setSwipeY(firstTouch.clientY);
  };

  // Manejar movimiento de toque
  const handleTouchMove = (e: TouchEvent) => {
    const sectionPosition = sections.indexOf(section);

    if (!swipeY) {
      return;
    }

    let yUp = e.touches[0].clientY;
    let yDiff = swipeY - yUp;

    if (yDiff > 0) {
      const nextSection = sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1];
      setSection(nextSection);
      router.push(nextSection);
    } else {
      const nextSection = sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition];
      setSection(nextSection);
      router.push(nextSection);
    }

    setSwipeY(null);
  };

  // Manejar rueda del mouse
  const handleWheel = (e: WheelEvent) => {
    const sectionPosition = sections.indexOf(section);

    setAnimation(e.deltaY < 0 ? 'sideDown' : 'sideUp');

    idTimeout.current = setTimeout(() => {
      if (e.deltaY < 0) {
        const prevSection = sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1];
        setSection(prevSection);
        router.push(prevSection);
      } else {
        const nextSection = sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition];
        setSection(nextSection);
        router.push(nextSection);
      }
    }, 600);
  };

  return (
    <div
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      className="container"
    >
      <SwitchTransition>
        <CSSTransition
          nodeRef={nodeRef}
          key={section}
          timeout={450}
          classNames={animation}
        >
          <div ref={nodeRef} className="section">
            {children}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Container;
