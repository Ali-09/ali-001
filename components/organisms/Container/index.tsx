import { useContext, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
//Context
import Context from 'context/Context'
//React Transition Group
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const Container = ({children}) => {
    // @ts-expect-error TS(2339): Property 'section' does not exist on type 'String'... Remove this comment to see the full error message
    const { section, setSection } = useContext(Context)
    const [animation, setAnimation] = useState('sideDown')
    const nodeRef = useRef(null);
    const idTimeout = useRef(null);
    const [swipeY, setSwipeY] = useState(null);
    const sections = [
        '/',
        'about',
        'contact'
    ]

    const router = useRouter()

    useEffect(()=> {
        return () => {
            clearTimeout(idTimeout.current)
        }
    })
  
    const getTouches = (evt) => evt.touches || evt.originalEvent.touches       
  
    const handleTouchStart = (e) => {
      const firstTouch = getTouches(e)[0];
      setSwipeY(firstTouch.clientY);
    };
  
    const handleTouchMove = (e) => {
      const sectionPosition = sections.indexOf(section)
    
      if (!swipeY) {
        return;
      }
  
      let yUp = e.touches[0].clientY;
      let yDiff = swipeY - yUp;
  
      if (yDiff > 0) {
        setSection(sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1])
        router.push(sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1]);
      } else {
        setSection(sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition])
        router.push(sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition]);
      }
  
      setSwipeY(null);
    };

    const handleWheel = (e) => {
        const sectionPosition = sections.indexOf(section)

        setAnimation(e.deltaY < 0 ? 'sideDown' : 'sideUp')

        idTimeout.current = setTimeout(() => { 
            if(e.deltaY < 0){
                setSection(sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1])
                router.push(sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1]);
            }else{
                setSection(sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition])
                router.push(sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition]);
            }
        },600)
    }

    return (
        <div onWheel={handleWheel} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} className="container">
            <SwitchTransition >
                <CSSTransition nodeRef={nodeRef} key={section} timeout={450} classNames={animation}>
                        <div ref={nodeRef} className="section">
                            {children}
                        </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default Container