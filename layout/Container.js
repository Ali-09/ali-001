import { useContext, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
//Context
import Context from '@ctx/Context'
//React Transition Group
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const Container = ({children}) => {
    const { section, setSection } = useContext(Context)
    const [animation, setAnimation] = useState('sideDown')
    const nodeRef = useRef(null);
    const [swipeY, setSwipeY] = useState(null);
    const sections = [
        '/',
        'about',
        'contact'
    ]

    const router = useRouter()

    useEffect(() => {
        setSection(router.route.length === 1 ? router.route : router.route.slice(1))
        return () => {
            clearTimeout()
        }
    }, [])
  
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

        setAnimation(e.deltaY < 0 ? 'sideUp' : 'sideDown')

        setTimeout(() => { 
            if(e.deltaY < 0){
                setSection(sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1])
                router.push(sectionPosition < 1 ? sections[sectionPosition] : sections[sectionPosition - 1]);
            }else{
                setSection(sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition])
                router.push(sectionPosition + 1 !== sections.length ? sections[sectionPosition + 1] : sections[sectionPosition]);
            }
        },800)
    }

    return (
        <div onWheel={handleWheel} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} className="container">
            <SwitchTransition >
                <CSSTransition nodeRef={nodeRef} key={section} timeout={500} classNames={animation}>
                        <div ref={nodeRef} className="section">
                            {children}
                        </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default Container
