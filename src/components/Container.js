import React, { useContext, useEffect, useState } from 'react'
//Componets
import Me from '@components/sections/me'
import Contact from '@components/sections/contact'
import About from '@components/sections/about'
//Context
import Context from '@ctx/Context'
//React Transition Group
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const Container = () => {
    const { section, setSection } = useContext(Context)
    const [animation, setAnimation] = useState('sideDown')
    const nodeRef = React.useRef(null);
    const sections = {
        'me': <Me/>,
        'about': <About/>,
        'contact':<Contact/>
    }

    useEffect(() => {
        return () => {
            clearTimeout()
        }
    }, [])

    const handleWheel = (e) => {
        const sectionsArr = Object.keys(sections)
        const sectionPosition = sectionsArr.indexOf(section)

        setAnimation(e.deltaY < 0 ? 'sideUp' : 'sideDown')

        setTimeout(() => { 
            if(e.deltaY < 0){
                setSection(sectionPosition < 1 ? sectionsArr[sectionPosition] : sectionsArr[sectionPosition - 1]);
            }else{
                setSection(sectionPosition + 1 !== sectionsArr.length ? sectionsArr[sectionPosition + 1] : sectionsArr[sectionPosition]);
            }
        },800)
    }

    return (
        <div onWheel={handleWheel} className="w-11/12 p-8">
            <SwitchTransition >
                <CSSTransition nodeRef={nodeRef} key={section} timeout={500} classNames={animation}>
                        <div ref={nodeRef} className="section flex flex-col h-full">
                            {sections[section] || sections['me']}
                        </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default Container
