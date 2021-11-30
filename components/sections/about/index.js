import React from 'react'
import Divider from '@components/Divider'

const About = () => {
    return (
        <div className="about">
            <div className="text-left flex items-center md:w-2/5 w-full">
                <div className="w-max items-center">
                    <h1 className="title">ABOUT</h1>
                    <Divider/>
                </div>
            </div>
            <div className="md:w-3/5 w-full md:self-center">
                <p className="text">
                    I`m information technology engineer with experience in frontend 
                    development with little more of 4 years development with language 
                    the js and the libraries react and vue. 2 year as backend with 
                    node js with mongodb.
                </p>
            </div>
            
        </div>
    )
}

export default About
