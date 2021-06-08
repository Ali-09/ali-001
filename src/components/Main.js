import React from 'react'
import SideLeft from '@components/SideLeft'
import Container from '@components/Container'

const Main = () => {

    return (    
        <div className="flex flex-row flex-grow mx-8 gap-4 mt-8 overflow-hidden">
            <SideLeft/>
            <Container/>
        </div>
    )
}

export default Main
