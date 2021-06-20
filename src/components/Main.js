import React from 'react'
import SideLeft from '@components/SideLeft'
import Container from '@components/Container'

const Main = () => {

    return (    
        <div className="flex h-5/6 flex-col-reverse md:flex-row flex-grow px-8 gap-4 overflow-hidden">
            <SideLeft/>
            <Container/>
        </div>
    )
}

export default Main
