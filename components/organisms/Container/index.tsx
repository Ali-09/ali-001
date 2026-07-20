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

  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // Sincronizar ruta actual con el estado del contexto (Atrás/Adelante y acceso directo por URL)
  useEffect(() => {
    const currentPath = router.pathname === '/' ? '/' : router.pathname.replace('/', '');
    if (sections.includes(currentPath) && currentPath !== section) {
      setSection(currentPath);
    }
  }, [router.pathname]);

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

  // Manejar movimiento de toque con throttling
  const handleTouchMove = (e: TouchEvent) => {
    if (isScrolling || !swipeY) return;

    const sectionPosition = sections.indexOf(section);
    let yUp = e.touches[0].clientY;
    let yDiff = swipeY - yUp;

    if (Math.abs(yDiff) < 40) return; // Umbral mínimo de movimiento

    let nextIndex = sectionPosition;
    if (yDiff > 0) {
      // Swiped UP -> ir a la siguiente sección
      nextIndex = sectionPosition < sections.length - 1 ? sectionPosition + 1 : sectionPosition;
    } else {
      // Swiped DOWN -> ir a la sección anterior
      nextIndex = sectionPosition > 0 ? sectionPosition - 1 : 0;
    }

    if (nextIndex === sectionPosition) return;

    setIsScrolling(true);
    setAnimation(yDiff > 0 ? 'sideUp' : 'sideDown');
    const nextSection = sections[nextIndex];
    setSection(nextSection);
    router.push(nextSection);
    setSwipeY(null);

    if (idTimeout.current) clearTimeout(idTimeout.current);
    idTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  // Manejar rueda del mouse con throttling de eventos
  const handleWheel = (e: WheelEvent) => {
    if (isScrolling || Math.abs(e.deltaY) < 10) return;

    const sectionPosition = sections.indexOf(section);
    const isGoingDown = e.deltaY > 0;

    let nextIndex = sectionPosition;
    if (isGoingDown) {
      nextIndex = sectionPosition < sections.length - 1 ? sectionPosition + 1 : sectionPosition;
    } else {
      nextIndex = sectionPosition > 0 ? sectionPosition - 1 : 0;
    }

    if (nextIndex === sectionPosition) return;

    setIsScrolling(true);
    setAnimation(isGoingDown ? 'sideUp' : 'sideDown');
    const nextSection = sections[nextIndex];
    setSection(nextSection);
    router.push(nextSection);

    if (idTimeout.current) clearTimeout(idTimeout.current);
    idTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
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
          timeout={300}
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
